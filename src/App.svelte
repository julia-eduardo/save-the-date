<script>
  import { fly, fade } from 'svelte/transition';
  import Screen1 from './screens/Screen1.svelte';
  import Screen2 from './screens/Screen2.svelte';
  import Screen3 from './screens/Screen3.svelte';
  import Screen4 from './screens/Screen4.svelte';

  let currentScreen = 1;

  const reducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const duration = reducedMotion ? 0 : 300;

  function advance() {
    currentScreen += 1;
  }
</script>

<div class="relative overflow-hidden">
  {#if currentScreen === 1}
    <div
      in:fly={{ y: 16, duration, delay: duration }}
      out:fly={{ y: -16, duration }}
    >
      <Screen1 onRevealed={advance} />
    </div>
  {:else if currentScreen === 2}
    <div
      in:fly={{ y: 16, duration, delay: duration }}
      out:fly={{ y: -16, duration }}
    >
      <Screen2 onRevealed={advance} />
    </div>
  {:else if currentScreen === 3}
    <div
      in:fly={{ y: 16, duration, delay: duration }}
      out:fly={{ y: -16, duration }}
    >
      <Screen3 onRevealed={advance} />
    </div>
  {:else if currentScreen === 4}
    <div in:fade={{ duration }}>
      <Screen4 />
    </div>
  {/if}
</div>
