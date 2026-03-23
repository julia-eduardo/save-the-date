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

  <div style="width: min(88vw, 360px); aspect-ratio: 3/4;" class="mx-auto">
    <WavyCard>

        <!-- Wedding rings illustration -->
        <div class="flex justify-center shrink-0">
          <WeddingRings />
        </div>

        <!-- Floating pink hearts -->
        <div class="flex justify-around items-center mt-1 shrink-0">
          <HeartPink size={14} />
          <HeartPink size={20} />
          <HeartPink size={14} />
        </div>

        <!-- Scratch card grows to fill remaining space -->
        <div class="flex-1 mt-2">
          <ScratchCard {onRevealed}>
            <div class="bg-cream h-full flex flex-col items-center justify-center text-center px-6">
              <p class="font-script text-green-w leading-none"
                style="font-size: clamp(2.4rem, 10vw, 3.5rem);">
                Julia
              </p>
              <p class="font-sans text-green-w/60 text-xl my-1">&</p>
              <p class="font-script text-green-w leading-none"
                style="font-size: clamp(2.4rem, 10vw, 3.5rem);">
                Eduardo
              </p>
            </div>
          </ScratchCard>
        </div>

        <!-- Green hearts below -->
        <div class="flex justify-around items-center mt-2 shrink-0">
          <HeartSmall size={18} />
          <HeartPink size={22} />
          <HeartSmall size={18} />
        </div>

    </WavyCard>
  </div>
</div>
