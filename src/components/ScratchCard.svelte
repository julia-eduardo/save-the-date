<script>
  import { onMount } from 'svelte';
  import { getRevealPercentage } from '../lib/scratch-utils.js';
  import { playScratchSound, initScratchSound } from '../lib/scratch-sound.js';

  /** Called after the reveal animation completes. */
  export let onRevealed = () => {};
  /** Called on the first pointerdown event (for parent to fade instruction text). */
  export let onFirstScratch = () => {};

  const BRUSH_RADIUS = 40;
  const REVEAL_THRESHOLD = 60;

  let wrapper;
  let canvas;
  let isDrawing = false;
  let activePointerId = null;
  let revealed = false;
  let canvasOpacity = 1;
  let canvasRemoved = false;
  let firstScratchFired = false;

  const reducedMotion =
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  const fadeDuration = reducedMotion ? 0 : 300;

  let scratchCount = 0;

  onMount(() => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = wrapper.offsetWidth * dpr;
    canvas.height = wrapper.offsetHeight * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    const gradient = ctx.createLinearGradient(0, 0, 0, wrapper.offsetHeight);
    gradient.addColorStop(0, '#d4d4d4');
    gradient.addColorStop(1, '#a8a8a8');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, wrapper.offsetWidth, wrapper.offsetHeight);
  });

  function scratch(clientX, clientY) {
    if (revealed) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, BRUSH_RADIUS * dpr, 0, Math.PI * 2);
    ctx.fill();

    playScratchSound();

    scratchCount++;
    if (scratchCount % 5 === 0 && getRevealPercentage(canvas) >= REVEAL_THRESHOLD) {
      triggerReveal();
    }
  }

  function triggerReveal() {
    if (revealed) return;
    revealed = true;
    canvasOpacity = 0;
    setTimeout(() => {
      canvasRemoved = true;
      onRevealed();
    }, reducedMotion ? 0 : fadeDuration + 700);
  }

  function handlePointerDown(e) {
    if (activePointerId !== null) return;
    activePointerId = e.pointerId;
    isDrawing = true;
    if (!firstScratchFired) {
      firstScratchFired = true;
      onFirstScratch();
      initScratchSound(); // preload audio on first interaction
    }
    canvas.setPointerCapture(e.pointerId);
    scratch(e.clientX, e.clientY);
  }

  function handlePointerMove(e) {
    if (!isDrawing || e.pointerId !== activePointerId) return;
    scratch(e.clientX, e.clientY);
  }

  function handlePointerUp(e) {
    if (e.pointerId !== activePointerId) return;
    isDrawing = false;
    activePointerId = null;
  }
</script>

<div bind:this={wrapper} class="relative h-full">
  <!-- Slot content sits below the canvas -->
  <slot />

  <!-- Canvas scratch layer -->
  {#if !canvasRemoved}
    <canvas
      bind:this={canvas}
      class="absolute inset-0 w-full h-full"
      style="
        opacity: {canvasOpacity};
        transition: opacity {fadeDuration}ms ease;
        cursor: crosshair;
        touch-action: none;
      "
      on:pointerdown={handlePointerDown}
      on:pointermove={handlePointerMove}
      on:pointerup={handlePointerUp}
      on:pointerleave={handlePointerUp}
    />
  {/if}

  <!-- Skip button -->
  {#if !revealed}
    <button
      class="absolute bottom-3 right-3 font-sans text-sm font-bold tracking-widest uppercase text-green-w/60 hover:text-green-w transition-colors"
      on:click={triggerReveal}
    >
      PULAR →
    </button>
  {/if}
</div>
