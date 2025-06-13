import { createFetchForWorker } from '@cloudflare/next-on-pages/fetch';

export default {
  async fetch(request, env, ctx) {
    const nextFetch = createFetchForWorker(request, env, ctx);
    return nextFetch(request);
  }
};