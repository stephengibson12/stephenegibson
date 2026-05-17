<script lang="ts">
  // Example/placeholder prospect deck. URL: /for/example/abc1/
  // The slug "example" and token "abc1" are intentionally fake — this page
  // exists to demonstrate the pattern. Do not link to it; do not pitch off
  // of it; it's a template reference for hand-crafting real prospect decks.
  //
  // To create a new real prospect deck:
  //   1. Pick a slug (the prospect company, kebab-case) and a token
  //      (4-6 random chars, hard to guess — ensures the URL isn't
  //      enumerable).
  //   2. Create src/routes/for/<slug>/<token>/+page.svelte by copying
  //      this file and replacing the content.
  //   3. Add '/for/<slug>/<token>' to the entries list in svelte.config.js
  //      so it gets prerendered.
  //   4. Send the URL directly to the prospect — never link to it
  //      publicly. noindex,nofollow is set by ProspectLayout.

  import ProspectLayout from '$lib/components/lp/ProspectLayout.svelte';
</script>

<ProspectLayout
  title="A brief for Example Corp · Stephen Gibson"
  description="A private brief sketching what Stephen Gibson would do for Example Corp."
  prospect="Example Corp"
>
  <article class="prospect">
    <header>
      <span class="prospect-tag">Private brief</span>
      <h1>For Example Corp</h1>
      <p class="byline">Stephen Gibson · stephenegibson.com</p>
    </header>

    <p>This is a placeholder prospect deck. The real version, sent to a real
    company, opens with a paragraph or two showing I've actually looked at
    your business — what you're doing well, what I'd push on, and why
    you're the kind of company I'd want to spend time with. Concrete, not
    generic. Specific, not adjective-soup.</p>

    <p class="pulled">The shape of the work: I'd embed for a few weeks,
    diagnose the highest-leverage problem in dev or marketing, then ship
    the fix and hand it back to your team running.</p>

    <h2>What I'd do for you</h2>

    <p>This section, in a real brief, lists 2–4 concrete moves I think
    would move the needle for the specific company. For a placeholder, the
    shape looks like:</p>

    <ul>
      <li><strong>Move one.</strong> A specific, observable change I'd
      make in the first two weeks. Named, scoped, with a hand-wave at
      what it costs in time and what it returns in outcome.</li>
      <li><strong>Move two.</strong> Another concrete thing — usually
      complementary to move one. The pair is meant to compound, not just
      coexist.</li>
      <li><strong>Move three.</strong> The longer-horizon piece. What I'd
      set up so the team can keep running it after I'm gone.</li>
    </ul>

    <h2>Why me</h2>

    <p>Twenty-plus years across software, marketing, and operating
    startups. Production code in eight languages, tier-1 press placements,
    $225K+ in attributed email revenue, and a current company
    (<a href="https://goldlapel.com">Gold Lapel</a>) built solo to
    45,000+ lines of async Rust using AI-augmented workflows. I work as a
    fractional embed — not a deck-and-leave consultant.</p>

    <p>The full picture lives at
    <a href="https://stephenegibson.com/">stephenegibson.com</a>.</p>

    <section class="cta">
      <h2>Next step</h2>
      <p>If any of the above sounds like the shape of help you'd want,
      grab 20 minutes on my calendar — or just reply to the email I sent.</p>
      <div class="cta-links">
        <div class="cta-row">
          <span class="label">Book →</span>
          <a href="https://calendly.com/minutezero" target="_blank" rel="noopener noreferrer">calendly.com/stephen-gibson/intro</a>
        </div>
        <div class="cta-row">
          <span class="label">Email →</span>
          <a href="mailto:hello@stephenegibson.com">hello@stephenegibson.com</a>
        </div>
      </div>
    </section>

    <p class="small">This brief was prepared for Example Corp and is not
    indexed. Please don't share the URL publicly.</p>
  </article>
</ProspectLayout>
