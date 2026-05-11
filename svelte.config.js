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
        '/startups/minutezero',
        '/startups/gold-lapel',
        '/events',
        '/events/mission-creatives',
        '/events/bayareasearch',
        '/events/open-future-forum',
        '/music',
        '/music/brick-and-mortar',
        '/music/cherry-blossom-festival',
        '/music/original-works',
        '/music/anything-goes-chorus',
        '/og',
        '/og/dev',
        '/og/dev/ai-native',
        '/og/dev/languages',
        '/og/dev/databases',
        '/og/dev/qa-test-automation',
        '/og/dev/devops-sysadmin',
        '/og/grow',
        '/og/grow/pr-media-relations',
        '/og/grow/influencer-endorsement',
        '/og/grow/email-performance',
        '/og/grow/content-seo',
        '/og/startups',
        '/og/startups/minutezero',
        '/og/startups/gold-lapel',
        '/og/events',
        '/og/events/mission-creatives',
        '/og/events/bayareasearch',
        '/og/events/open-future-forum',
        '/og/music',
        '/og/music/brick-and-mortar',
        '/og/music/cherry-blossom-festival',
        '/og/music/original-works',
        '/og/music/anything-goes-chorus'
      ],
      // Other sections have no projects yet — don't fail the build on their empty sub-routes
      handleUnseenRoutes: 'ignore'
    }
  }
};

export default config;
