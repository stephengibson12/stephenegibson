<script lang="ts">
  // Shared shell for per-prospect landing pages under /for/<slug>/<token>/.
  // Mirrors the pattern from minutezero/apps/marketing/src/lib/components/lp/ReportLayout.svelte
  // but tuned for Stephen's personal voice — this is Stephen pitching himself,
  // not MinuteZero. Lighter masthead, no MZ branding, no MZ footer.
  //
  // Every prospect page MUST set noindex,nofollow — this is baked into the
  // <svelte:head> below, plus there's a robots.txt Disallow on /for/.
  // The page-level CSS lives inline below, scoped via :global so the slotted
  // .prospect content picks up the styles. Kept self-contained so the host
  // page (+layout.svelte at /for/) can stay minimal.

  let {
    title = '',
    description = '',
    prospect = '',
    children
  } = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="robots" content="noindex,nofollow" />
  <meta name="description" content={description} />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Heebo:400,500,600,700|Titillium+Web:400,600,700" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
</svelte:head>

<div class="prospect-shell">
  <header class="prospect-header">
    <a class="brand" href="https://stephenegibson.com/">
      <span class="name">Stephen Gibson</span>
    </a>
    <span class="badge">
      Private brief
      {#if prospect}<span class="badge-soft">for {prospect}</span>{/if}
    </span>
  </header>

  {@render children?.()}

  <footer class="prospect-footer">
    <span>&copy; {new Date().getFullYear()} Stephen Gibson</span>
    <a href="mailto:hello@stephenegibson.com">hello@stephenegibson.com</a>
  </footer>
</div>

<style>
  /* Reset the dark "skater/sticker" public-site palette inherited from
     app.css. Prospect decks read more like a clean editorial document. */
  :global(.prospect-shell) {
    --ink: #1F2937;
    --ink-soft: #4B5563;
    --ink-muted: #6B7280;
    --rule: #E5E7EB;
    --rule-soft: #F3F4F6;
    --bg: #FFFFFF;
    --bg-soft: #FAFAFA;
    --accent: #00b86b;
    --accent-soft: #E7F8EF;
    --accent-ink: #047857;
  }
  :global(.prospect-shell) {
    background: var(--bg);
    color: var(--ink);
    font-family: 'Heebo', system-ui, -apple-system, sans-serif;
    font-size: 17px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
  :global(.prospect-shell *) { box-sizing: border-box; }
  :global(.prospect-shell a) {
    color: var(--accent-ink);
    text-decoration: none;
    border-bottom: 1px solid var(--accent);
    background: none;
    box-shadow: none;
    transition: none;
  }
  :global(.prospect-shell a:hover) {
    background: none;
    color: var(--accent-ink);
    box-shadow: none;
  }

  :global(.prospect-header) {
    max-width: 760px;
    margin: 0 auto;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--rule);
  }
  :global(.prospect-header .brand) {
    font-family: 'Titillium Web', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: var(--ink);
    border-bottom: none;
  }
  :global(.prospect-header .badge) {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--ink);
    font-weight: 700;
  }
  :global(.prospect-header .badge-soft) {
    color: var(--ink-muted);
    font-weight: 500;
    margin-left: 4px;
    text-transform: none;
    letter-spacing: 0;
  }

  /* Article shell — used by prospect content as <article class="prospect"> */
  :global(.prospect) {
    max-width: 720px;
    margin: 56px auto 80px;
    padding: 0 24px;
  }
  :global(.prospect-tag) {
    display: inline-block;
    background: var(--accent);
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
    padding: 9px 14px 8px;
    border-radius: 4px;
    margin: 0 0 20px;
  }
  :global(.prospect h1) {
    font-family: 'Titillium Web', sans-serif;
    font-size: 40px;
    line-height: 1.1;
    margin: 0 0 12px;
    letter-spacing: -0.015em;
    font-weight: 700;
    color: var(--ink);
  }
  :global(.prospect .byline) {
    color: var(--ink-muted);
    font-size: 14px;
    margin: 0 0 56px;
  }
  :global(.prospect h2) {
    font-family: 'Titillium Web', sans-serif;
    font-size: 26px;
    line-height: 1.25;
    margin: 56px 0 16px;
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  :global(.prospect h3) {
    font-family: 'Titillium Web', sans-serif;
    font-size: 22px;
    margin: 44px 0 12px;
    color: var(--ink);
    font-weight: 700;
    letter-spacing: -0.01em;
    position: relative;
    padding-left: 18px;
  }
  :global(.prospect h3::before) {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 4px;
    height: 22px;
    background: var(--accent);
    border-radius: 2px;
  }
  :global(.prospect p) { margin: 0 0 16px; color: var(--ink); }
  :global(.prospect ul) { margin: 0 0 16px; padding-left: 22px; }
  :global(.prospect li) { margin-bottom: 10px; color: var(--ink); }
  :global(.prospect .pulled) {
    font-family: 'Titillium Web', sans-serif;
    font-size: 22px;
    line-height: 1.4;
    color: var(--ink);
    border-left: 3px solid var(--accent);
    padding: 4px 0 4px 20px;
    margin: 32px 0;
    font-weight: 600;
  }
  :global(.prospect code) {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.92em;
    background: var(--rule-soft);
    padding: 1px 6px;
    border-radius: 3px;
    color: var(--ink);
  }

  /* CTA block — dark card so it visually pops at the bottom of the brief */
  :global(.prospect .cta) {
    margin-top: 64px;
    padding: 36px;
    background: #0F1620;
    background-image: radial-gradient(at top right, rgba(0, 184, 107, 0.18), transparent 60%);
    border-radius: 12px;
    border: 1px solid #1F2937;
    color: #F3F4F6;
    box-shadow: 0 16px 40px rgba(15, 22, 32, 0.18), 0 2px 8px rgba(15, 22, 32, 0.08);
  }
  :global(.prospect .cta h2) { margin-top: 0; color: white; }
  :global(.prospect .cta p) { color: #D1D5DB; }
  :global(.prospect .cta-links) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 16px;
  }
  :global(.prospect .cta-row) {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }
  :global(.prospect .cta-row .label) {
    color: #34D399;
    font-weight: 700;
    white-space: nowrap;
    flex-shrink: 0;
  }
  :global(.prospect .cta-row a) {
    color: #F3F4F6;
    border-bottom: none;
    font-weight: 500;
    overflow-wrap: anywhere;
    min-width: 0;
  }
  :global(.prospect .cta-row a:hover) {
    color: #34D399;
    text-decoration: underline;
    text-decoration-color: #34D399;
    text-decoration-thickness: 2px;
    text-underline-offset: 4px;
  }

  :global(.prospect .small) {
    font-size: 13px;
    color: var(--ink-muted);
    margin-top: 48px;
    padding-top: 24px;
    border-top: 1px solid var(--rule);
  }

  :global(.prospect-footer) {
    max-width: 760px;
    margin: 0 auto;
    padding: 32px 24px;
    border-top: 1px solid var(--rule);
    font-size: 13px;
    color: var(--ink-muted);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 8px;
  }
  :global(.prospect-footer a) {
    color: var(--ink-soft);
    border-bottom: 1px solid var(--rule);
  }

  @media (max-width: 600px) {
    :global(.prospect h1) { font-size: 32px; }
    :global(.prospect .cta) { padding: 24px; }
  }
</style>
