<script lang="ts">
  import { siteData } from '$lib/data/siteData';
  import Bio from '$lib/components/Bio.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import SectionGrid from '$lib/components/SectionGrid.svelte';
</script>

<svelte:head>
  <title>{siteData.title} | Stephen Gibson</title>
  <meta name="description" content="Stephen Gibson's portfolio — software development and marketing work, plus startups, events, and music." />
  <meta property="og:title" content="{siteData.title}" />
  <meta property="og:description" content="Stephen Gibson's portfolio — software development and marketing work, plus startups, events, and music." />
  <meta property="og:image" content="https://stephenegibson.com/images/og/home.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://stephenegibson.com/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Bio />

<section class="projects-header">
  <h2>Projects</h2>
</section>

{#each siteData.sections as section (section.id)}
  <SectionHeader {section} />
  <SectionGrid projects={section.projects} theme={section.theme} />
{/each}

<style>
  .projects-header {
    margin-top: 4rem;
    margin-bottom: 1rem;
    border-left: 4px solid var(--accent-color);
    padding-left: 1.5rem;
  }

  .projects-header h2 {
    font-family: var(--font-display);
    font-size: 2.5rem;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
  }

  @media (max-width: 600px) {
    .projects-header {
      margin-top: 3rem;
      padding-left: 1rem;
    }

    .projects-header h2 {
      font-size: 2rem;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 400px) {
    .projects-header h2 {
      font-size: 1.6rem;
    }
  }
</style>
