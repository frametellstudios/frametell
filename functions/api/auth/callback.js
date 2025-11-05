function renderBody(status, content) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>GitHub Authorization</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .container {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
          text-align: center;
          max-width: 400px;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          background: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .error-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          background: #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .checkmark {
          width: 32px;
          height: 32px;
          border: 3px solid white;
          border-top: none;
          border-left: none;
          transform: rotate(45deg);
          margin-top: -8px;
        }
        .x-mark {
          color: white;
          font-size: 48px;
          font-weight: bold;
          line-height: 1;
        }
        h1 {
          margin: 0 0 1rem;
          color: #1f2937;
          font-size: 1.5rem;
        }
        p {
          margin: 0;
          color: #6b7280;
        }
        .spinner {
          width: 40px;
          height: 40px;
          margin: 1rem auto;
          border: 4px solid #f3f4f6;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </head>
    <body>
      <div class="container">
        ${status === 'success' ? `
          <div class="success-icon">
            <div class="checkmark"></div>
          </div>
          <h1>Authorization Successful!</h1>
          <p>Logged in as ${content.provider}</p>
          <div class="spinner"></div>
          <p>Redirecting you back to the CMS...</p>
        ` : `
          <div class="error-icon">
            <div class="x-mark">×</div>
          </div>
          <h1>Authorization Failed</h1>
          <p>${typeof content === 'string' ? content : JSON.stringify(content)}</p>
        `}
      </div>
      <script>
        const receiveMessage = (message) => {
          window.opener.postMessage(
            'authorization:github:${status}:${JSON.stringify(content)}',
            message.origin
          );
        };
        window.removeEventListener("message", receiveMessage, false);
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:github", "*");
      </script>
    </body>
    </html>
  `;
  const blob = new Blob([html]);
  return blob;
}

export async function onRequest(context) {
  const {
    request,
    env,
  } = context;

  const client_id = env.GITHUB_OAUTH_CLIENT_ID || env.GITHUB_CLIENT_ID;
  const client_secret = env.GITHUB_OAUTH_CLIENT_SECRET || env.GITHUB_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    return new Response(renderBody('error', 'Missing GitHub OAuth credentials'), {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }

  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response(renderBody('error', 'Missing authorization code'), {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }

  try {
    const response = await fetch(
      'https://github.com/login/oauth/access_token',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'user-agent': 'cloudflare-functions-github-oauth-login',
          'accept': 'application/json',
        },
        body: JSON.stringify({ client_id, client_secret, code }),
      }
    );

    const result = await response.json();

    if (result.error) {
      return new Response(renderBody('error', result), {
        status: 200,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    }

    const token = result.access_token;
    const provider = 'github';
    const responseBody = renderBody('success', {
      token,
      provider,
    });

    return new Response(responseBody, {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  } catch (error) {
    return new Response(renderBody('error', error.toString()), {
      status: 200,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  }
}
