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
  const error = url.searchParams.get('error');
  const errorDescription = url.searchParams.get('error_description');
  
  // Check if GitHub returned an error
  if (error) {
    return new Response(
      JSON.stringify({ 
        error: `GitHub OAuth error: ${error}`,
        description: errorDescription || 'No description provided',
        help: 'Check your GitHub OAuth app settings and make sure the callback URL matches exactly.'
      }),
      { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  if (!code) {
    return new Response(
      JSON.stringify({ 
        error: 'No authorization code provided',
        help: 'The OAuth flow did not complete successfully. Please try again.'
      }),
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
        message: 'Environment variables missing',
        details: {
          clientId: clientId ? 'Set' : 'Missing GITHUB_OAUTH_CLIENT_ID',
          clientSecret: clientSecret ? 'Set' : 'Missing GITHUB_OAUTH_CLIENT_SECRET'
        },
        help: 'Add GITHUB_OAUTH_CLIENT_ID and GITHUB_OAUTH_CLIENT_SECRET in Cloudflare Pages Settings → Environment variables'
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

    // Get response text first to handle both JSON and non-JSON responses
    const responseText = await tokenResponse.text();
    
    // Try to parse as JSON
    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
    } catch (parseError) {
      // If not JSON, GitHub returned an error page (HTML)
      return new Response(
        JSON.stringify({ 
          error: 'GitHub API returned non-JSON response',
          status: tokenResponse.status,
          statusText: tokenResponse.statusText,
          responsePreview: responseText.substring(0, 200),
          possibleCauses: [
            'Invalid Client Secret - check it matches exactly in GitHub OAuth app',
            'Client Secret was regenerated - update it in Cloudflare environment variables',
            'Client ID is incorrect',
            'OAuth app is suspended or deleted'
          ],
          help: 'Go to GitHub → Settings → Developer settings → OAuth Apps and verify your credentials'
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if GitHub returned an error in the JSON response
    if (tokenData.error) {
      return new Response(
        JSON.stringify({ 
          error: 'GitHub OAuth token exchange failed',
          githubError: tokenData.error,
          description: tokenData.error_description || 'No description provided',
          errorUri: tokenData.error_uri || null,
          possibleCauses: tokenData.error === 'bad_verification_code' 
            ? ['Authorization code expired (codes are single-use)', 'Authorization code already used', 'Code was tampered with']
            : tokenData.error === 'incorrect_client_credentials'
            ? ['Client Secret is wrong', 'Client ID is wrong', 'Credentials were regenerated']
            : ['Check GitHub OAuth app configuration'],
          help: 'Verify your GitHub OAuth app credentials in Cloudflare environment variables'
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Verify we got an access token
    if (!tokenData.access_token) {
      return new Response(
        JSON.stringify({ 
          error: 'No access token received',
          receivedData: tokenData,
          help: 'GitHub did not return an access token. Check your OAuth app configuration.'
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Get user information from GitHub to verify token works
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Accept': 'application/json',
        'User-Agent': 'FrameTell-CMS-OAuth'
      }
    });

    if (!userResponse.ok) {
      const userError = await userResponse.text();
      return new Response(
        JSON.stringify({ 
          error: 'Failed to fetch user data from GitHub',
          status: userResponse.status,
          details: userError,
          help: 'The access token was received but could not be used to fetch user data. This might be a GitHub API issue.'
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

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
      max-width: 400px;
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
      margin: 0.5rem 0;
      opacity: 0.9;
    }
    .user-info {
      margin-top: 1rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255,255,255,0.2);
      font-size: 14px;
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
    <p>Logged in as <strong>${userData.login}</strong></p>
    <div class="user-info">
      <p>Redirecting you back to the CMS...</p>
    </div>
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
        message: error.message,
        stack: error.stack,
        help: 'An unexpected error occurred. Check the error details above.'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
