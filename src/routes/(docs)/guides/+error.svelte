<script>
  import { page } from '$app/stores';
  const status = $page.status;
  const errorMessage = $page?.error?.message;
</script>

<h1>{status}: {errorMessage}</h1>
<a href="/guides">View all Guides...</a>

<style>
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-top: 40px;
  }
  a {
    display: block;
    text-align: center;
    font-size: 1.2rem;
    margin-top: 20px;
  }
</style>
