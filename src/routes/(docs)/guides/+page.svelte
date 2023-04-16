<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  console.log(data);
</script>

<div class="guides">
  <ul>
    {#each data.guides as guide}
      <li><a href="/">{guide.title}</a></li>
    {/each}
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
