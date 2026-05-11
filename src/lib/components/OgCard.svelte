<script lang="ts">
  let { eyebrow, title, description, headerColor = '#00FFFF', titleColor = '#FFFFFF' } = $props();
</script>

<div class="card" style="--header-color:{headerColor}; --title-color:{titleColor};">
  <div class="grid"></div>

  <div class="content">
    {#if eyebrow}
      <div class="eyebrow">{eyebrow}</div>
    {/if}
    <h1 class="title">{title}</h1>
    {#if description}
      <p class="description">{description}</p>
    {/if}
  </div>

  <div class="footer">
    <div class="brand">STEPHEN&nbsp;GIBSON</div>
    <div class="url">stephenegibson.com</div>
  </div>
</div>

<style>
  .card {
    position: relative;
    width: 1200px;
    height: 630px;
    background: linear-gradient(135deg, #050505 0%, #0d0d12 50%, #050505 100%);
    color: #fff;
    font-family: var(--font-display, 'Press Start 2P', monospace);
    overflow: hidden;
    box-sizing: border-box;
  }

  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0, 255, 255, 0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 255, 255, 0.04) 1px, transparent 1px);
    background-size: 60px 60px;
    opacity: 0.6;
    pointer-events: none;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 12px;
    background: var(--header-color);
    box-shadow: 0 0 30px var(--header-color);
  }

  .content {
    position: relative;
    padding: 80px 80px 0;
    max-width: 1040px;
  }

  .eyebrow {
    font-family: var(--font-mono, monospace);
    font-size: 22px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: var(--header-color);
    margin-bottom: 28px;
    text-shadow: 2px 2px 0 #000;
  }

  .title {
    font-family: var(--font-display, 'Press Start 2P', monospace);
    font-size: 64px;
    line-height: 1.15;
    margin: 0 0 28px;
    color: var(--title-color);
    text-shadow: 4px 4px 0 #000;
  }

  .description {
    font-family: var(--font-body, system-ui, sans-serif);
    font-size: 24px;
    line-height: 1.45;
    color: #d4d4d4;
    margin: 0;
    max-width: 980px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .footer {
    position: absolute;
    left: 80px;
    right: 80px;
    bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid var(--header-color);
    padding-top: 24px;
  }

  .brand {
    font-family: var(--font-display, 'Press Start 2P', monospace);
    font-size: 22px;
    letter-spacing: 4px;
    color: #fff;
    text-shadow: 2px 2px 0 #000;
  }

  .url {
    font-family: var(--font-mono, monospace);
    font-size: 22px;
    color: var(--header-color);
  }
</style>
