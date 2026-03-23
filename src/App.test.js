import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import App from './App.svelte';

// Mock canvas for all component tests
beforeEach(() => {
  const mockCtx = {
    createLinearGradient: vi.fn(() => ({ addColorStop: vi.fn() })),
    fillRect: vi.fn(),
    arc: vi.fn(),
    beginPath: vi.fn(),
    fill: vi.fn(),
    scale: vi.fn(),
    getImageData: vi.fn(() => ({
      data: new Uint8ClampedArray(4 * 100 * 100).fill(255),
    })),
  };
  Object.defineProperty(mockCtx, 'fillStyle', { set: vi.fn(), configurable: true });
  Object.defineProperty(mockCtx, 'globalCompositeOperation', {
    set: vi.fn(),
    configurable: true,
  });
  HTMLCanvasElement.prototype.getContext = vi.fn(() => mockCtx);
});

describe('App', () => {
  it('starts on Screen 1 showing teaser instruction', () => {
    render(App);
    expect(screen.getByText(/raspe para descobrir/i)).toBeInTheDocument();
  });
});
