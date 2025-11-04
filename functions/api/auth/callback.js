/**
 * Cloudflare Pages Function: GitHub OAuth Callback
 * 
 * This endpoint receives the authorization code from GitHub,
 * exchanges it for an access token, and returns it to Decap CMS.
 */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Get authorization code from GitHub
  const code = url.searchParams.get('code');
  
  if (!code) {
    return new Response(
      JSON.stringify({ error: 'No authorization code provided' }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Get GitHub OAuth credentials from environment variables
  const clientId = env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = env.GITHUB_OAUTH_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new Response(
      JSON.stringify({ 
        error: 'GitHub OAuth not configured',
        message: 'Please set GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET in Cloudflare Pages environment variables'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      })
    });

    const tokenData = await tokenResponse.json();

    if (tokenData.error) {
      return new Response(
        JSON.stringify({ 
          error: 'GitHub OAuth error',
          details: tokenData.error_description || tokenData.error
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get user information from GitHub
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Accept': 'application/json'
      }
    });

    const userData = await userResponse.json();

    // Return success page that sends token back to CMS
    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>GitHub Authorization Complete</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    .container {
      text-align: center;
      padding: 2rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      backdrop-filter: blur(10px);
    }
    .checkmark {
      font-size: 64px;
      margin-bottom: 1rem;
    }
    h1 {
      margin: 0 0 0.5rem 0;
      font-size: 24px;
    }
    p {
      margin: 0;
      opacity: 0.9;
    }
    .spinner {
      margin-top: 1rem;
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      border-top-color: white;
      animation: spin 1s ease-in-out infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="checkmark">✓</div>
    <h1>Authorization Successful!</h1>
    <p>Redirecting you back to the CMS...</p>
    <div class="spinner"></div>
  </div>
  <script>
    (function() {
      // Send token back to CMS window
      const data = {
        token: "${tokenData.access_token}",
        provider: "github"
      };

      // Try to send message to opener window (CMS popup)
      if (window.opener) {
        window.opener.postMessage(
          'authorization:github:success:' + JSON.stringify(data),
          window.location.origin
        );
        setTimeout(() => window.close(), 1000);
      } else {
        // Fallback: redirect to admin with token in hash
        window.location.href = "/admin/#access_token=" + data.token + "&provider=github";
      }
    })();
  </script>
</body>
</html>
    `;

    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: 'OAuth exchange failed',
        message: error.message
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
