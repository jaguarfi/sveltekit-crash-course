<script>
  export let title = 'Svelte Gaming Default Title';
</script>

<div class="title">
  <h1>{title}</h1>
  <img src="/greek-helmet.png" alt="" />
</div>

<style>
  .title {
    display: flex;
    flex-direction: column;
  }
  .title img {
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
  }

  .title h1 {
    margin-left: 10px;
  }
</style>
