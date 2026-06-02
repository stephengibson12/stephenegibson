<script lang="ts">
  import type { Project, SectionTheme } from '$lib/data/siteData';

  let { project, theme, showAction = true, interactive = true }: { project: Project; theme: SectionTheme; showAction?: boolean; interactive?: boolean } = $props();

  const iconStyle = "width:24px; height:24px; stroke:var(--section-title); fill:none; stroke-width:2; stroke-linecap:round; stroke-linejoin:round; transition: transform 0.2s;";
</script>

<div class="card-wrapper" style="--section-title:{theme.title}">
  <svelte:element
    this={interactive ? 'a' : 'div'}
    href={interactive ? project.path : null}
    class={interactive ? 'card-link' : 'card-link card-link-static'}
  >
    <div class="card">
      {#if project.image}
        <img
          src={project.image}
          class="card-image"
          alt={project.title}
        />
      {/if}

      <div class="card-content">
        <div class="card-header">
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
        {#if showAction}
          <div class="card-action">
            &gt; {project.action || 'VIEW'}
          </div>
        {/if}
      </div>
    </div>
  </svelte:element>

  {#if project.links?.demo || project.links?.repo}
    <div class="card-icons-overlay">
      {#if project.links?.demo}
        <a
          href={project.links.demo}
          target="_blank"
          rel="noopener noreferrer"
          class="card-icon-link"
          title="Visit {project.title}"
          aria-label="Visit {project.title} (opens in new tab)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </a>
      {/if}
      {#if project.links?.repo}
        <a
          href={project.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          class="card-icon-link"
          title="View source for {project.title}"
          aria-label="View source for {project.title} (opens in new tab)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" style={iconStyle} viewBox="0 0 24 24">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      {/if}
    </div>
  {/if}
</div>

<style>
  .card-wrapper {
    position: relative;
  }

  .card-link {
    text-decoration: none;
    border-bottom: none;
    display: block;
  }

  .card-link:hover {
    background: none;
    box-shadow: none;
  }

  .card {
    cursor: pointer;
  }

  /* Detail-page (leaf) cards: not clickable, no hover effects.
     Overrides global .card:hover styles in app.css. */
  :global(.card-link-static .card) {
    cursor: default;
  }
  :global(.card-link-static .card:hover) {
    transform: none;
    border-color: var(--dim-color);
    box-shadow: none;
  }
  :global(.card-link-static .card:hover h2) {
    filter: none;
    text-shadow: 2px 2px 0px #000;
  }

  /* Glyph overlay — sits outside the card-link anchor so the inner
     glyphs are real <a> elements (browser status-bar URL + native
     target=_blank, no nested-anchor invalid HTML). */
  .card-icons-overlay {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 2;
    display: flex;
    gap: 0.5rem;
    /* Slight backdrop so glyphs read against any image. */
    padding: 0.4rem 0.5rem;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 4px;
    backdrop-filter: blur(2px);
  }
</style>
