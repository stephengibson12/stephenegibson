<script lang="ts">
  import '../../app.css';

  let { children } = $props();
</script>

<div class="og-canvas">
  {@render children()}
</div>

<style>
  :global(html), :global(body) {
    margin: 0;
    padding: 0;
    background: #000;
  }

  .og-canvas {
    width: 1200px;
    height: 630px;
    overflow: hidden;
  }
</style>
