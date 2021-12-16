<style type="scss">
  h2 {
    font-size: 1.3em;
    margin-top: 2rem;
    margin-right: 0.4em;
    text-transform: uppercase;
    display: inline-block;
    letter-spacing: -0.05em;
    // opacity: 0.6;

    @media (prefers-color-scheme: dark) {
      opacity: 0.41;
      font-weight: 100;
    }
  }

  section {
    display: inline-flex;
    flex-flow: row wrap;
    font-size: 2em;

    > *:not(:last-child) {
      margin-right: 0.4em;
    }

    @media (prefers-color-scheme: dark) {
      opacity: 0.6;
      font-weight: 200;
    }
  }
</style>


<h2>Find me on:</h2>
<section>
  <a href="https://twitter.com/kevinrwhitley">twitter</a>
  <a href="https://github.com/kwhitley">github</a>
  <a href="https://www.npmjs.com/~krwhitley">npm</a>
</section>

