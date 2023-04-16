<script lang="ts">
  import type { PageData } from '../../guides/$types';

  export let data: PageData;
</script>

<div class="guides">
  <ul>
    <li><a href="/">Guide 1</a></li>
    <li><a href="/">Guide 2</a></li>
  </ul>
</div>

<style>
  .guides {
    margin: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  a {
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: 1px dotted #ccc;
  }
</style>
