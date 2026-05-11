<script lang="ts">
  import OgCard from '$lib/components/OgCard.svelte';

  let { data } = $props();
</script>

<OgCard
  eyebrow="Stephen Gibson"
  title={data.section.title}
  description={data.section.description}
  headerColor={data.section.theme.header}
  titleColor={data.section.theme.title}
/>
