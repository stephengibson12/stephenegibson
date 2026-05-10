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
        '/grow',
        '/startups',
        '/events',
        '/music'
      ],
      // Project sub-routes exist as templates but have no items yet — don't fail the build
      handleUnseenRoutes: 'ignore'
    }
  }
};

export default config;
