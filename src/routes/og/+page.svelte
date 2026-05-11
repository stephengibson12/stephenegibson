<script lang="ts">
  import OgCard from '$lib/components/OgCard.svelte';
  import { siteData } from '$lib/data/siteData';
</script>

<OgCard
  eyebrow="Portfolio"
  title={siteData.hero.title}
  description={siteData.hero.description + ' — software development, marketing, startups, events, and music.'}
/>
