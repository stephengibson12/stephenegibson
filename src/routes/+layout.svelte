<script lang="ts">
  import { page } from '$app/state';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '../app.css';

  let { children } = $props();

  // /for/<slug>/<token>/ is private prospect-brief territory. Those pages
  // ship their own light/editorial chrome via ProspectLayout — the public
  // site's Header, Footer, and dark container styles would fight that.
  // SvelteKit's `+layout@.svelte` reset syntax can't skip the root layout
  // entirely, so we conditionally bypass the chrome here instead.
  let isProspectBrief = $derived(page.url.pathname.startsWith('/for/'));
</script>

{#if isProspectBrief}
  {@render children()}
{:else}
  <div id="app">
    <Header />
    <main class="container">
      {@render children()}
    </main>
    <Footer />
  </div>
{/if}
