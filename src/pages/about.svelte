<script>
  import { randomItem } from 'supergeneric/randomItem'
  import Back from '../misc/Back.svelte'

  const message = randomItem([
    `Yep, that's my name.`,
    `Imagine me bragging about myself here...`,
    `But who am I really?`,
    `[insert awards and achievements here]`,
    `Let's play a game of Deep Rock!`,
  ])
</script>

<Back />

<p>
  {message}
</p>
