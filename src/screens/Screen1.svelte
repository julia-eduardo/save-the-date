<script>
  import ScratchCard from '../components/ScratchCard.svelte';
  import Sparkle from '../components/illustrations/Sparkle.svelte';
  import WavyCard from '../components/WavyCard.svelte';

  export let onRevealed = () => {};

  let instructionOpacity = 1;

  function handleFirstScratch() {
    instructionOpacity = 0;
  }
</script>

<div class="min-h-dvh w-full flex items-center justify-center bg-cream"
  style="background-image: repeating-linear-gradient(to right, transparent, transparent 22px, #f9c8d4 22px, #f9c8d4 28px);">

  <div style="width: min(88vw, 360px); aspect-ratio: 3/4;" class="mx-auto">
    <WavyCard>

        <!-- Decorative sparkles above -->
        <div class="flex justify-around items-center px-2 shrink-0">
          <Sparkle size={12} color="#f4a7b9" />
          <Sparkle size={16} color="#2d5a27" />
          <Sparkle size={14} color="#f4a7b9" />
          <Sparkle size={16} color="#2d5a27" />
          <Sparkle size={12} color="#f4a7b9" />
        </div>

        <!-- Instruction hint — fades out on first scratch -->
        <p
          class="text-center font-sans text-sm text-green-w/60 mt-2 tracking-wide shrink-0"
          style="opacity: {instructionOpacity}; transition: opacity 200ms ease;"
        >
          ✨ Raspe para descobrir ✨
        </p>

        <!-- Scratch card grows to fill remaining space -->
        <div class="flex-1 mt-2">
          <ScratchCard {onRevealed} onFirstScratch={handleFirstScratch}>
            <div class="bg-cream h-full flex flex-col items-center justify-center text-center px-6">
              <p class="font-script text-green-w text-3xl leading-relaxed">
                Psst...
              </p>
              <p class="font-sans text-green-w text-lg mt-2 leading-relaxed">
                temos um segredo<br />pra te contar 🤫
              </p>
            </div>
          </ScratchCard>
        </div>

        <!-- Decorative sparkles below -->
        <div class="flex justify-around items-center mt-2 px-2 shrink-0">
          <Sparkle size={14} color="#2d5a27" />
          <Sparkle size={12} color="#f4a7b9" />
          <Sparkle size={16} color="#2d5a27" />
          <Sparkle size={12} color="#f4a7b9" />
          <Sparkle size={14} color="#2d5a27" />
        </div>

    </WavyCard>
  </div>
</div>
