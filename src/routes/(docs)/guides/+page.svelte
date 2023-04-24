<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;

  console.log(data);
</script>

<div class="guides">
  <ul>
    {#each data.guides as guide}
      <li><a data-sveltekit-preload-data="hover" href={`/guides/${guide.id}`}>{guide.title}</a></li>
    {/each}
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
