<script lang="ts">
  import Breadcrumb from '$lib/components/Breadcrumb.svelte';
  import ProjectCard from '$lib/components/ProjectCard.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{data.project.title} | {data.section.title} | Stephen Gibson</title>
  <meta name="description" content={data.project.description} />
  <meta property="og:title" content="{data.project.title} | Stephen Gibson" />
  <meta property="og:description" content={data.project.description} />
  <meta property="og:image" content="https://stephenegibson.com/images/og/{data.section.id}-{data.project.id}.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="https://stephenegibson.com/{data.section.id}/{data.project.id}" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div style="--section-header:{data.section.theme.header}; --section-title:{data.section.theme.title}">
  <Breadcrumb section={data.section} project={data.project} />

  <div class="project-card-full">
    <ProjectCard project={data.project} theme={data.section.theme} />
  </div>
</div>

<style>
  .project-card-full {
    width: 100%;
  }
</style>
