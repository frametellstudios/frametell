/**
 * Cloudflare Pages Function to handle all /api/* routes
 * This proxies requests to the Express backend server
 */

export async function onRequest(context: any) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // For Cloudflare Pages, we need to handle API routes differently
  // Since we can't run a full Express server, we'll need to use Cloudflare Workers
  // or deploy the backend separately
  
  // For now, return a helpful error message
  return new Response(JSON.stringify({
    error: 'Backend API not available in static deployment',
    message: 'The backend server needs to be deployed separately or use Cloudflare Workers',
    path: url.pathname
  }), {
    status: 503,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
