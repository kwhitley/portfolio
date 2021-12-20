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
    // margin-bottom: 10em;
    text-align: center;

    background-color: pink;
  }
</style>

<main>
  <Title />

  <SocialLinks />
</main>

