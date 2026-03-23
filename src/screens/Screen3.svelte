<script>
  import ScratchCard from '../components/ScratchCard.svelte';
  import MonogramJE from '../components/illustrations/MonogramJE.svelte';
  import Sparkle from '../components/illustrations/Sparkle.svelte';
  import WavyCard from '../components/WavyCard.svelte';

  export let onRevealed = () => {};
</script>

<div class="min-h-dvh w-full flex items-center justify-center bg-cream"
  style="background-image: repeating-linear-gradient(to right, transparent, transparent 22px, #f9c8d4 22px, #f9c8d4 28px);">

  <div style="width: min(88vw, 360px); aspect-ratio: 3/4;" class="mx-auto">
    <WavyCard>

        <!-- Monogram JE -->
        <div class="flex justify-center shrink-0">
          <MonogramJE />
        </div>

        <!-- Sparkle row -->
        <div class="flex justify-around items-center mt-1 shrink-0">
          <Sparkle size={12} color="#f4a7b9" />
          <Sparkle size={14} color="#2d5a27" />
          <Sparkle size={12} color="#f4a7b9" />
        </div>

        <!-- Scratch card grows to fill remaining space -->
        <div class="flex-1 mt-2">
          <ScratchCard {onRevealed}>
            <div class="bg-cream h-full flex flex-col items-center justify-center text-center px-6 gap-4">
              <p class="font-script text-green-w" style="font-size: clamp(1.6rem, 7vw, 2rem);">
                Save the date!
              </p>
              <div class="inline-block border-2 border-green-w rounded-full px-8 py-3">
                <p class="font-sans font-semibold text-green-w text-xl leading-tight">
                  20 de junho
                </p>
                <p class="font-sans text-green-w/70 text-base">às 12h30</p>
              </div>
            </div>
          </ScratchCard>
        </div>

    </WavyCard>
  </div>
</div>
