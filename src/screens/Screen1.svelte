<script>
  import ScratchCard from '../components/ScratchCard.svelte';
  import HeartPink from '../components/illustrations/HeartPink.svelte';
  import Sparkle from '../components/illustrations/Sparkle.svelte';

  export let onRevealed = () => {};

  let instructionOpacity = 1;

  function handleFirstScratch() {
    // Fade out over 200ms as per spec
    instructionOpacity = 0;
  }
</script>

<!-- Full-screen card with pink stripes background -->
<div class="min-h-dvh w-full flex items-center justify-center bg-cream"
  style="background-image: repeating-linear-gradient(to right, transparent, transparent 22px, #f9c8d4 22px, #f9c8d4 28px);">

  <div class="relative w-full max-w-sm mx-4">
    <!-- Outer green heart-chain border -->
    <div class="border-2 border-green-w rounded-xl p-1">
      <div class="border border-green-w/40 rounded-lg p-6">

        <!-- Decorative elements above scratch area -->
        <div class="flex justify-around items-center mb-4 px-4">
          <HeartPink size={16} />
          <Sparkle size={14} color="#f4a7b9" />
          <HeartPink size={20} />
          <Sparkle size={14} color="#2d5a27" />
          <HeartPink size={16} />
        </div>

        <!-- Instruction hint — fades out on first scratch -->
        <p
          class="text-center font-sans text-sm text-green-w/60 mb-3 tracking-wide"
          style="opacity: {instructionOpacity}; transition: opacity 200ms ease;"
        >
          ✨ raspe para descobrir ✨
        </p>

        <!-- Scratch card wrapping the teaser text -->
        <ScratchCard {onRevealed} onFirstScratch={handleFirstScratch}>
          <div class="bg-cream rounded-lg py-10 px-6 text-center">
            <p class="font-script text-green-w text-3xl leading-relaxed">
              Psst...
            </p>
            <p class="font-sans text-green-w text-lg mt-2 leading-relaxed">
              temos um segredo<br />pra te contar 🤫
            </p>
          </div>
        </ScratchCard>

        <!-- Decorative elements below -->
        <div class="flex justify-around items-center mt-4 px-4">
          <Sparkle size={12} color="#2d5a27" />
          <HeartPink size={16} />
          <Sparkle size={14} color="#f4a7b9" />
          <HeartPink size={20} />
          <Sparkle size={12} color="#2d5a27" />
        </div>

      </div>
    </div>
  </div>
</div>
