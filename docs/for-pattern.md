# /for/ — per-prospect private briefs

URL shape: `https://stephenegibson.com/for/<slug>/<token>/`

Each brief is a hand-crafted SvelteKit page pitching Stephen's services to
one specific company. Briefs are share-by-link only — they're noindexed,
disallowed in `robots.txt`, and never linked from the public site.

This pattern mirrors what `minutezero.com` does at `/for/<slug>/<token>/`
for MZ pitches. The MZ version is the canonical reference; this one is
intentionally simpler (no generator pipeline, no JSON manifests, no
LandingLayout slot machine — just hand-crafted Svelte pages on the
shared `ProspectLayout` shell).

## Files

```
src/
├── lib/components/lp/
│   └── ProspectLayout.svelte    # shared shell (header, footer, CSS)
└── routes/for/
    ├── +layout@.svelte          # layout reset — escapes public chrome
    └── <slug>/<token>/
        └── +page.svelte         # one brief per dir
```

The `@` in `+layout@.svelte` is SvelteKit's
[layout-reset syntax](https://kit.svelte.dev/docs/advanced-layouts#advanced-layouts-resetting-layouts) —
it makes `/for/*` skip the root `+layout.svelte` (Header / Footer /
container chrome) and render on its own clean slate.

## Adding a new brief

1. **Pick a slug and token.**
   - Slug: the prospect company, kebab-case (e.g. `acme-co`).
   - Token: 4–6 random chars (e.g. `k9q`, `n7m`, `abc1`). Hard to guess
     so the URL isn't enumerable.

2. **Create the page.**
   ```
   src/routes/for/<slug>/<token>/+page.svelte
   ```
   Copy `src/routes/for/example/abc1/+page.svelte` as a starting point.
   Replace the content with prospect-specific framing — concrete moves
   for *that* company, not generic adjectives.

3. **Register for prerender.**
   Add `'/for/<slug>/<token>'` to the `entries` array in
   `svelte.config.js`. Nothing on the public site links to `/for/*`, so
   the prerender crawler can't discover briefs on its own.

4. **Verify locally.**
   ```
   npm run build && npm run preview
   ```
   Hit `http://localhost:4173/for/<slug>/<token>/` and confirm the page
   renders, the meta robots tag is `noindex,nofollow`, and the public
   header/footer chrome is absent.

5. **Deploy** (Stephen handles deploys — don't run `firebase deploy`
   unless asked).

6. **Send the URL** directly to the prospect. Don't post the link
   anywhere public.

## Conventions

- **`noindex,nofollow`** is enforced by `ProspectLayout.svelte` —
  every brief inherits it automatically. Don't override it.
- **`robots.txt`** also `Disallow: /for/` belt-and-suspenders against
  well-behaved crawlers indexing what shouldn't be indexed.
- **Voice:** Stephen's personal voice — terse, opinionated, specific
  over adjective-soup. Lead with *evidence you've looked at the
  company*. Don't fabricate claims.
- **CTA:** Calendly + email. The example uses
  `https://calendly.com/minutezero` as a placeholder — update
  to the real URL when one's set up.

## What this pattern is NOT

- Not a generator. Each brief is hand-crafted. A `scripts/generate_brief.py`
  may show up later; for now, the implementation cost of hand-writing
  briefs is low and the personal touch matters.
- Not public marketing. If a pitch is repeatable enough to live on the
  public site, it belongs at `/grow/` or a new public route — not `/for/`.
- Not a CRM. Briefs are static artifacts. Tracking who opened what
  belongs upstream (email / Calendly), not here.
