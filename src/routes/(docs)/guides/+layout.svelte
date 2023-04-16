<script>
  import '../../../styles/global.css';
  import Title from '$lib/title.svelte';
  let title = 'Svelte Gaming Guides';
</script>

<header>
  <nav>
    <Title {title} />
    <div class="links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/guides">Guides</a>
    </div>
  </nav>
</header>
<main>
  <slot />
</main>
<footer>
  <p>Copyright 2023 Svelte Gaming Guides</p>
</footer>

<style>
  header {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    justify-content: center;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
  }
  main {
    max-width: 960px;
    margin: 20px auto;
  }
  footer {
    text-align: center;
  }
  .links {
    margin-left: auto;
  }
  a {
    margin-left: 10px;
  }
</style>
