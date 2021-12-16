<script>
  import '~/styles/app.scss'
  import SocialLinks from './SocialLinks.svelte'
</script>

<style type="scss">
  h1 {
    font-family: 'Roboto Condensed', sans-serif;
    // font-family: 'Bitter', serif;
    font-size: clamp(2rem, 5vmax, 8rem);
    white-space: nowrap;

    @media (prefers-color-scheme: dark) {
      span {
        opacity: 0.11;
      }
    }
  }

  main {
    margin: 0 1em 12vh;
    position: relative;
    transition: transform 0.15s ease;

    @media (orientation: portrait) {
      transform: rotate(-90deg);
    }
  }

  em {
    color: var(--accent-color);
    position: relative;
    display: inline-block;

    @media (prefers-color-scheme: dark) {
      color: var(--foreground-color);
      text-shadow: 0 0 1em rgba(255, 0, 200, 1),
        0 0 0.5em rgba(255, 0, 204, 0.5),
        0 0 0.2em rgba(255, 0, 204, 0.5),
        0 0 0.1em rgba(255, 0, 204, 1),
        0 0 0.04em rgba(255, 230, 250, 1);
    }
  }
</style>

<main>
  <h1>
    My name is <em>Kevin Whitley</em>, and
    <br />
    I design <em>elegant code</em> for
    <br>
    <strike>myself</strike> <em>everyone</em>.
  </h1>

  <SocialLinks />
</main>

