<style type="scss">
  h2 {
    font-size: clamp(0.9rem, 1.9vmax, 1.6rem);
    margin: 1.6em 0.4em 0 0;
    text-transform: uppercase;
    display: inline-block;
    letter-spacing: -0.05em;

    @media (prefers-color-scheme: dark) {
      opacity: 0.41;
      font-weight: 100;
    }
  }

  section {
    display: inline-flex;
    flex-flow: row wrap;
    font-size: clamp(1.2rem, 2.4vmax, 2.4rem);

    > *:not(:last-child) {
      margin-right: 0.4em;
    }

    @media (prefers-color-scheme: dark) {
      opacity: 0.6;
      font-weight: 200;
    }
  }

  main {
    // background-color: cyan;
    text-align: left;

    @media (max-aspect-ratio: 1/2) {
      display: flex;
      flex-flow: column;
      align-items: center;
      flex: 1;
      text-align: left;
      // margin-top: 7rem;

      h2 {
        // background-color: green;
        margin: 2em 0 0.5em 0;
      }

      > * {
        width: 10rem;
      }

      section {
        display: flex;
        flex-flow: column;
        // background-color: cyan;
        flex: 1;

        > * {
          flex: 1;
          margin-bottom: 0.2em;
          // background-color: red;
        }
      }
    }
  }
</style>


<main>
  <h2>Find me on:</h2>
  <section>
    <a href="https://twitter.com/kevinrwhitley">twitter</a>
    <a href="https://github.com/kwhitley">github</a>
    <a href="https://www.npmjs.com/~krwhitley">npm</a>
    <a href="https://slick.af/kevin">slick</a>
  </section>
</main>

