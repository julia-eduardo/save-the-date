<script>
  // Unique ID per instance to avoid SVG filter ID collisions
  const uid = Math.random().toString(36).slice(2, 8);
</script>

<div class="relative">
  <!-- Wavy SVG border using feTurbulence displacement -->
  <svg
    class="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <filter id="wavy-{uid}" x="-6%" y="-6%" width="112%" height="112%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.038"
          numOctaves="3"
          seed="6"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="3"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
    <rect
      x="3%"
      y="3%"
      width="94%"
      height="94%"
      fill="none"
      stroke="#2d5a27"
      stroke-width="2.5"
      filter="url(#wavy-{uid})"
    />
  </svg>

  <!-- Content sits inside the border -->
  <div class="relative p-7">
    <slot />
  </div>
</div>
