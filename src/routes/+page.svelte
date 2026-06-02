<script lang="ts">
  import { siteData } from '$lib/data/siteData';
  import Bio from '$lib/components/Bio.svelte';
  import SectionHeader from '$lib/components/SectionHeader.svelte';
  import SectionGrid from '$lib/components/SectionGrid.svelte';
</script>

<svelte:head>
  <title>{siteData.title} | Stephen Gibson</title>
  <meta name="description" content="Stephen Gibson's portfolio — software development and marketing work, plus companies, events, and music." />
  <meta property="og:title" content="{siteData.title}" />
  <meta property="og:description" content="Stephen Gibson's portfolio — software development and marketing work, plus companies, events, and music." />
  <meta property="og:image" content="https://stephenegibson.com/images/og/home.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://stephenegibson.com/" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Bio />

<div class="sections-spacer"></div>

{#each siteData.sections as section (section.id)}
  <SectionHeader {section} />
  <SectionGrid projects={section.projects} theme={section.theme} />
{/each}

<style>
  /* Preserves the visual gap previously held by the dropped "Projects"
     umbrella header — keeps Bio breathing room above the first section. */
  .sections-spacer {
    margin-top: 7rem;
  }

  @media (max-width: 600px) {
    .sections-spacer {
      margin-top: 5rem;
    }
  }
</style>
