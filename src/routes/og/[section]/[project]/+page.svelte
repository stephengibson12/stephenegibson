<script lang="ts">
  import OgCard from '$lib/components/OgCard.svelte';

  let { data } = $props();
</script>

<OgCard
  eyebrow="{data.section.title} · Stephen Gibson"
  title={data.project.title}
  description={data.project.description}
  headerColor={data.section.theme.header}
  titleColor={data.section.theme.title}
/>
