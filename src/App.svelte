<script>
  import '~/styles/app.scss'
</script>

<style type="scss">
  h1 {
    font-size: clamp(2rem, 10vmax, 8rem);
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

  p {
    position: absolute;
    color: var(--foreground-color);
    font-size: clamp(0.7rem, 2.5vmax, 1.2rem);
    left: 0;
    top: 100%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    white-space: nowrap;

    @media (prefers-color-scheme: dark) {
      opacity: 0.3;
    }
  }
</style>

<main>
  <h1>
    <em>swarm</em><span>.trade</span>
  </h1>

  <p>by <a href="https://twitter.com/kevinrwhitley">@kevinrwhitley</a></p>
</main>
