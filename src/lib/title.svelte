<script>
  export let title = 'Svelte Gaming Default Title';
</script>

<div class="title">
    <img src="/greek-helmet.png" alt="" />
  <h1>{title}</h1>
</div>

<style>
  .title {
    display: flex;
    flex-direction: row;
  }
  .title img {
    height: 64px;
    display: inline-block;
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(90%);
  }

  .title h1 {
    margin-left: 10px;
  }
</style>
