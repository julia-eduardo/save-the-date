import { describe, it, expect } from 'vitest';
import { getRevealPercentage } from './scratch-utils.js';

function makeMockCanvas(width, height, alphaValues) {
  // alphaValues: flat array of alpha byte for each pixel
  const data = new Uint8ClampedArray(width * height * 4);
  alphaValues.forEach((alpha, i) => {
    data[i * 4 + 3] = alpha; // set alpha channel
  });
  return {
    width,
    height,
    getContext: () => ({
      getImageData: () => ({ data }),
    }),
  };
}

describe('getRevealPercentage', () => {
  it('returns 0 for a fully opaque canvas', () => {
    const canvas = makeMockCanvas(2, 2, [255, 255, 255, 255]);
    expect(getRevealPercentage(canvas)).toBe(0);
  });

  it('returns 100 for a fully transparent canvas', () => {
    const canvas = makeMockCanvas(2, 2, [0, 0, 0, 0]);
    expect(getRevealPercentage(canvas)).toBe(100);
  });

  it('returns 50 for a half-transparent canvas', () => {
    // 4 pixels: 2 transparent (alpha=0), 2 opaque (alpha=255)
    const canvas = makeMockCanvas(2, 2, [0, 0, 255, 255]);
    expect(getRevealPercentage(canvas)).toBe(50);
  });

  it('returns 0 for a 1x1 opaque canvas', () => {
    const canvas = makeMockCanvas(1, 1, [255]);
    expect(getRevealPercentage(canvas)).toBe(0);
  });

  it('returns 100 for a 1x1 transparent canvas', () => {
    const canvas = makeMockCanvas(1, 1, [0]);
    expect(getRevealPercentage(canvas)).toBe(100);
  });
});
