/**
 * Returns what percentage of the canvas has been erased (alpha = 0).
 * @param {HTMLCanvasElement} canvas
 * @returns {number} 0–100
 */
export function getRevealPercentage(canvas) {
  const ctx = canvas.getContext('2d');
  const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let transparent = 0;
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] === 0) transparent++;
  }
  return (transparent / (canvas.width * canvas.height)) * 100;
}
