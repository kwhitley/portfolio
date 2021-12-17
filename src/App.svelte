<script>
  import '~/styles/app.scss'
  import SocialLinks from './SocialLinks.svelte'
</script>

<style type="scss">
  h1 {
    // font-family: Arial Narrow, sans-serif;
    // letter-spacing: -0.04em;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: clamp(2rem, 5vmax, 6rem);
    text-align: left;
    // white-space: nowrap;
    // transition: transform 0.1s ease, opacity 1s ease;

    @media (max-aspect-ratio: 1/2) {
      // transform: rotate(-90deg);
      white-space: nowrap;

      display: block;
      transform-origin: top left;
      /* Note: for a CLOCKWISE rotation, use the commented-out
        transform instead of this one. */
      transform: rotate(-90deg) translate(-100%, 135%);
      /* transform: rotate(90deg) translate(0, -100%); */
      margin-top: -50%;
      // margin-top: 5em;
      // background-color: red;
      // position: absolute;
      // top: -0.5em;
      // left: -35vmin;
      // left: -4.1em;
      // margin-left: 0.75em;
    }
  }

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

  .outer {
    display: table;
    // background-color: red;
  }

  .inner {
    @media (max-aspect-ratio: 1/2) {
      padding: 50% 0;
      // height: 0;
      // background-color: cyan;
    }
  }

  br {
    display: none;

    @media (min-width: 56em), (max-aspect-ratio: 1/2) {
      display: block;
    }
  }

  span {
    white-space: nowrap;
  }

  em {
    color: var(--accent-color);
    position: relative;
    display: inline-block;
  }
</style>

<main>
  <div class="outer">
    <div class="inner">
      <h1>
        My name is <span><em>Kevin Whitley</em>,</span> and
        <br />
        I design <em>elegant code</em> for
        <br>
        <strike>myself</strike> <span><em>everyone</em>.</span>
      </h1>
    </div>
  </div>

  <SocialLinks />
</main>

