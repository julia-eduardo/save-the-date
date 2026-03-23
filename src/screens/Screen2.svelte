<script>
  import ScratchCard from '../components/ScratchCard.svelte';
  import WeddingRings from '../components/illustrations/WeddingRings.svelte';
  import HeartPink from '../components/illustrations/HeartPink.svelte';
  import HeartSmall from '../components/illustrations/HeartSmall.svelte';
  import WavyCard from '../components/WavyCard.svelte';

  export let onRevealed = () => {};
</script>

<div class="min-h-dvh w-full flex items-center justify-center bg-cream"
  style="background-image: repeating-linear-gradient(to right, transparent, transparent 22px, #f9c8d4 22px, #f9c8d4 28px);">

  <div class="w-full max-w-sm mx-4">
    <WavyCard>

        <!-- Wedding rings illustration -->
        <div class="flex justify-center mb-4">
          <WeddingRings />
        </div>

        <!-- Floating pink hearts -->
        <div class="flex justify-around items-center mb-3">
          <HeartPink size={14} />
          <HeartPink size={20} />
          <HeartPink size={14} />
        </div>

        <!-- Scratch card wrapping the names -->
        <ScratchCard {onRevealed}>
          <div class="bg-cream rounded-lg py-12 px-6 text-center">
            <p class="font-script text-green-w leading-none"
              style="font-size: clamp(2.8rem, 12vw, 4rem);">
              Julia
            </p>
            <p class="font-sans text-green-w/60 text-xl my-1">&</p>
            <p class="font-script text-green-w leading-none"
              style="font-size: clamp(2.8rem, 12vw, 4rem);">
              Eduardo
            </p>
          </div>
        </ScratchCard>

        <!-- Green hearts below -->
        <div class="flex justify-around items-center mt-4">
          <HeartSmall size={18} />
          <HeartPink size={22} />
          <HeartSmall size={18} />
        </div>

    </WavyCard>
  </div>
</div>
