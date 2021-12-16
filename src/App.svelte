<script>
  import '~/styles/app.scss'
  import SocialLinks from './SocialLinks.svelte'
</script>

<style type="scss">
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: clamp(2rem, 5vmax, 6rem);
    white-space: nowrap;
  }

  main {
    margin: 0 1em 12vh;
    position: relative;
    transition: transform 0.15s ease;
    transition: opacity 1s ease;
    opacity: 1;

    @media (orientation: portrait) {
      transform: rotate(-90deg);
    }
  }

  em {
    color: var(--accent-color);
    position: relative;
    display: inline-block;
  }
</style>

<main>
  <h1>
    My name is <em>Kevin Whitley</em><span class="first">, and
    <br />
    I design <em>elegant code</em></span> <span class="second"> for
    <br>
    <strike>myself</strike> <em>everyone</em>.</span>
  </h1>

  <SocialLinks />
</main>

