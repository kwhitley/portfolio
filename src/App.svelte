<script>
  import '~/styles/app.scss'
</script>

<style type="scss">
  h1 {
    font-size: clamp(2rem, 10vmin, 5rem);
    white-space: nowrap;
  }

  h2 {
    text-align: center;
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
    font-size: clamp(0.7rem, 2.5vmin, 1rem);
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
