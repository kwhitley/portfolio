<script>
  import '~/styles/app.scss'
</script>

<style type="scss">
  h1 {
    font-size: clamp(2rem, 10vw, 8rem);
    white-space: nowrap;
  }

  main {
    margin: 0 1em 12vh;
    position: relative;
  }

  em {
    color: var(--accent-color);
    position: relative;
    display: inline-block;
  }

  p {
    position: absolute;
    color: var(--foreground-color);
    font-size: clamp(0.7rem, 2.5vw, 1.2rem);
    left: 0;
    top: 100%;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    white-space: nowrap;
  }
</style>

<main>
  <h1>
    <em>swarm</em>.trade
  </h1>

  <p>by <a href="https://twitter.com/kevinrwhitley">@kevinrwhitley</a></p>
</main>
