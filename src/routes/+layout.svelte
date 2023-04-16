<script>
  import '../Styles/global.css';
  import Title from '$lib/title.svelte';
  let title = 'Svelte Gaming Guides';
</script>

<header>
  <Title {title} />
</header>
<main>
  <slot />
</main>
<footer>
  <p>Copyright 2023 Svelte Gaming Guides</p>
</footer>

<style>
  header {
    display: flex;
    justify-content: center;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
</style>
