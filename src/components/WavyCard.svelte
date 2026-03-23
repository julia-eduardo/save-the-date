<script>
  let w = 0;
  let h = 0;

  function wavyRectPath(width, height, amp = 6, wl = 28) {
    if (!width || !height) return '';
    const pad = 10;
    let d = '';

    function wavyLine(x1, y1, x2, y2, nx, ny) {
      const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      const steps = Math.max(2, Math.round(len / wl));
      const dx = (x2 - x1) / steps;
      const dy = (y2 - y1) / steps;
      for (let i = 0; i < steps; i++) {
        const px = x1 + dx * i;
        const py = y1 + dy * i;
        const ex = x1 + dx * (i + 1);
        const ey = y1 + dy * (i + 1);
        const sign = i % 2 === 0 ? 1 : -1;
        const cx = (px + ex) / 2 + nx * amp * sign;
        const cy = (py + ey) / 2 + ny * amp * sign;
        d += `Q ${cx.toFixed(1)},${cy.toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)} `;
      }
    }

    d = `M ${pad},${pad} `;
    wavyLine(pad, pad, width - pad, pad, 0, -1);         // top
    wavyLine(width - pad, pad, width - pad, height - pad, 1, 0); // right
    wavyLine(width - pad, height - pad, pad, height - pad, 0, 1); // bottom
    wavyLine(pad, height - pad, pad, pad, -1, 0);        // left
    d += 'Z';
    return d;
  }

  $: path = wavyRectPath(w, h);
</script>

<div class="relative" bind:clientWidth={w} bind:clientHeight={h}>
  {#if w && h}
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 {w} {h}"
    >
      <path
        d={path}
        fill="none"
        stroke="#2d5a27"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  {/if}

  <div class="relative p-7">
    <slot />
  </div>
</div>
