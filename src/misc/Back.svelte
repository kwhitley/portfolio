<script>
  import { link } from 'svelte-spa-router'
</script>

<style type='scss'>
  div {
    margin-bottom: 2em;
    display: none;
  }

  a {
    font-size: 1.2em;
    margin-left: 1.2em;

    &:before {
      display: block;
      content: '\21E0 ';
      position: absolute;
    }
  }
</style>

<div>
  <a href="/" use:link>Back</a>
</div>
