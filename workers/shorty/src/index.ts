// This is a Cloudflare Worker that redirects short URLs to their full URLs //

export interface Env {
  SHORT_URLS: KVNamespace;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    _ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    const { pathname } = url;

    const redirectURL = await env.SHORT_URLS.get(pathname);

    if (!redirectURL) {
      return new Response(`No URL found for: '${pathname}'`);
    }

    return Response.redirect(redirectURL, 301);
  },
};
