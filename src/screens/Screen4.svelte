<script>
  import HeartPink from '../components/illustrations/HeartPink.svelte';
  import HeartSmall from '../components/illustrations/HeartSmall.svelte';
  import Sparkle from '../components/illustrations/Sparkle.svelte';
</script>

<div class="min-h-dvh w-full flex items-center justify-center bg-cream"
  style="background-image: repeating-linear-gradient(to right, transparent, transparent 22px, #f9c8d4 22px, #f9c8d4 28px);">

  <div class="relative w-full max-w-sm mx-4">
    <div class="border-2 border-green-w rounded-xl p-1">
      <div class="border border-green-w/40 rounded-lg p-8 text-center">

        <!-- Top decorative row -->
        <div class="flex justify-around items-center mb-6">
          <Sparkle size={14} color="#f4a7b9" />
          <HeartPink size={20} />
          <Sparkle size={16} color="#2d5a27" />
          <HeartPink size={20} />
          <Sparkle size={14} color="#f4a7b9" />
        </div>

        <!-- Main message -->
        <p class="font-script text-green-w leading-tight"
          style="font-size: clamp(1.8rem, 8vw, 2.4rem);">
          Julia & Eduardo
        </p>

        <div class="my-5 border-t border-green-w/20" />

        <p class="font-sans text-green-w text-base leading-relaxed mb-6">
          Mais informações e confirmação de presença
        </p>

        <!-- CTA button -->
        <a
          href="https://julia-eduardo.github.io/casamento/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-green-w text-cream font-sans font-semibold
                 px-8 py-3 rounded-full text-base
                 hover:bg-green-w/90 active:scale-95
                 transition-all duration-150
                 focus-visible:ring-2 focus-visible:ring-green-w focus-visible:ring-offset-2"
        >
          Ver site do casamento
        </a>

        <!-- Bottom decorative row -->
        <div class="flex justify-around items-center mt-6">
          <HeartSmall size={18} />
          <HeartPink size={22} />
          <HeartSmall size={18} />
        </div>

      </div>
    </div>
  </div>
</div>
