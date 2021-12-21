<script>
  import Router from 'svelte-spa-router'
  import '~/styles/app.scss'
  import SocialLinks from './misc/SocialLinks.svelte'
  import Title from './misc/Title.svelte'
  import OSS from './pages/oss.svelte'
  import About from './pages/about.svelte'
  import Code from './pages/code.svelte'

  const routes = {
    '/about': About,
    '/code': Code,
    '/oss': OSS,
  }
</script>

<style type="scss">
  main {
    --padding: 5em;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    margin: 0 1em;
    position: relative;
    padding: 0 var(--padding);
    opacity: 1;
    text-align: center;
    // background-color: pink;

    @media (max-width: 50em) {
      --padding: 7vw;
    }

    section {
      // outline: 1px solid cyan;
      padding: 3em 0 2em;
      // transition: all 2s ease;
      height: auto;
      overflow: hidden;
      display: block;
      text-align: left;

      &:empty {
        outline: none;
        height: 0;
      }
    }
  }

</style>

<main>
  <Title />

  <section>
    <Router {routes}/>
  </section>

  <SocialLinks />
</main>

