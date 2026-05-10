<script lang="ts">
  import SectionGrid from '$lib/components/SectionGrid.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.section.title} | Stephen Gibson</title>
  <meta name="description" content="{data.section.description} Explore Stephen Gibson's {data.section.title.toLowerCase()} projects." />
  <meta property="og:title" content="{data.section.title} | Stephen Gibson" />
  <meta property="og:description" content="{data.section.description} Explore Stephen Gibson's {data.section.title.toLowerCase()} projects." />
  <meta property="og:image" content="https://stephenegibson.com/images/cover.webp" />
</svelte:head>

<div style="--section-header:{data.section.theme.header}; --section-title:{data.section.theme.title}">
  <h1 class="page-title">{data.section.title}</h1>

  <SectionGrid projects={data.section.projects} theme={data.section.theme} />
</div>

<style>
  .page-title {
    color: var(--section-header);
    font-family: var(--font-display);
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    .page-title {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 400px) {
    .page-title {
      font-size: 1.6rem;
    }
  }
</style>
