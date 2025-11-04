/**
 * Cloudflare Pages Function: GitHub OAuth Authorization
 * 
 * This endpoint initiates the GitHub OAuth flow for Decap CMS.
 * When users click "Login with GitHub" in the CMS, they're redirected here,
 * then to GitHub's authorization page.
 */

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Get GitHub OAuth credentials from environment variables
  const clientId = env.GITHUB_OAUTH_CLIENT_ID;
  
  if (!clientId) {
    return new Response(
      JSON.stringify({ 
        error: 'GitHub OAuth not configured',
        message: 'Please set GITHUB_OAUTH_CLIENT_ID in Cloudflare Pages environment variables'
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Build GitHub OAuth authorization URL
  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id', clientId);
  githubAuthUrl.searchParams.set('scope', 'repo,user');
  
  // Redirect URL should point back to our callback endpoint
  const redirectUri = `${url.origin}/api/auth/callback`;
  githubAuthUrl.searchParams.set('redirect_uri', redirectUri);

  // Redirect user to GitHub authorization page
  return Response.redirect(githubAuthUrl.toString(), 302);
}
