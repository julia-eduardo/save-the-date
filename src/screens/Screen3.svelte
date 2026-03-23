<script>
  import ScratchCard from '../components/ScratchCard.svelte';
  import WeddingCake from '../components/illustrations/WeddingCake.svelte';
  import HeartPink from '../components/illustrations/HeartPink.svelte';
  import Sparkle from '../components/illustrations/Sparkle.svelte';
  import WavyCard from '../components/WavyCard.svelte';

  export let onRevealed = () => {};
</script>

<div class="min-h-dvh w-full flex items-center justify-center bg-cream"
  style="background-image: repeating-linear-gradient(to right, transparent, transparent 22px, #f9c8d4 22px, #f9c8d4 28px);">

  <div class="w-full max-w-sm mx-4">
    <WavyCard>

        <!-- Wedding cake illustration -->
        <div class="flex justify-center mb-2">
          <WeddingCake />
        </div>

        <!-- Sparkle row -->
        <div class="flex justify-around items-center mb-3">
          <Sparkle size={12} color="#f4a7b9" />
          <HeartPink size={16} />
          <Sparkle size={14} color="#2d5a27" />
          <HeartPink size={16} />
          <Sparkle size={12} color="#f4a7b9" />
        </div>

        <!-- Scratch card wrapping the date -->
        <ScratchCard {onRevealed}>
          <div class="bg-cream rounded-lg py-10 px-6 text-center">
            <!-- Oval capsule matching invitation style -->
            <div class="inline-block border-2 border-green-w rounded-full px-8 py-3">
              <p class="font-sans font-semibold text-green-w text-xl leading-tight">
                20 de junho
              </p>
              <p class="font-sans text-green-w/70 text-base">às 12h30</p>
            </div>
          </div>
        </ScratchCard>

    </WavyCard>
  </div>
</div>
