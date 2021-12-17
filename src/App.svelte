<script>
  import '~/styles/app.scss'
  import SocialLinks from './SocialLinks.svelte'
  import Title from './Title.svelte'
</script>

<style type="scss">


  main {
    --padding: 5em;
    margin: 0 1em;
    position: relative;
    padding: 0 var(--padding);
    opacity: 1;
    margin-bottom: 10em;
    text-align: center;
    // max-width: calc(100vw - 2*var(--padding));

    // display: flex;
    // flex-flow: column;
    // justify-content: center;

    // > * {
    //   flex: 1 100%;
    //   outline: 1px solid red;
    // }

    @media (max-aspect-ratio: 1/2) {
      height: 80vh;
      margin-bottom: 6em;
    }
    // background-color: pink;
  }
</style>

<main>
  <Title />

  <SocialLinks />
</main>

