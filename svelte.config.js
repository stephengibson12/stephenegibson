import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    prerender: {
      entries: [
        '/',
        '/dev',
        '/dev/ai-native',
        '/dev/languages',
        '/dev/databases',
        '/dev/qa-test-automation',
        '/dev/devops-sysadmin',
        '/grow',
        '/grow/pr-media-relations',
        '/grow/influencer-endorsement',
        '/grow/email-performance',
        '/grow/content-seo',
        '/startups',
        '/events',
        '/music'
      ],
      // Other sections have no projects yet — don't fail the build on their empty sub-routes
      handleUnseenRoutes: 'ignore'
    }
  }
};

export default config;
