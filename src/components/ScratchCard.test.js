import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/svelte';
import ScratchCard from './ScratchCard.svelte';
import ScratchCardSlotWrapper from './ScratchCardSlotWrapper.svelte';

// Canvas is not available in jsdom — mock it
beforeEach(() => {
  const mockCtx = {
    createLinearGradient: vi.fn(() => ({
      addColorStop: vi.fn(),
    })),
    fillRect: vi.fn(),
    arc: vi.fn(),
    beginPath: vi.fn(),
    fill: vi.fn(),
    scale: vi.fn(),
    getImageData: vi.fn(() => ({
      // All pixels transparent → 100% revealed
      data: new Uint8ClampedArray(4 * 100 * 100).fill(0),
    })),
  };
  Object.defineProperty(mockCtx, 'fillStyle', { set: vi.fn(), configurable: true });
  Object.defineProperty(mockCtx, 'globalCompositeOperation', {
    set: vi.fn(),
    configurable: true,
  });
  HTMLCanvasElement.prototype.getContext = vi.fn(() => mockCtx);
  Object.defineProperty(HTMLCanvasElement.prototype, 'width', {
    get: () => 100,
    set: vi.fn(),
    configurable: true,
  });
  Object.defineProperty(HTMLCanvasElement.prototype, 'height', {
    get: () => 100,
    set: vi.fn(),
    configurable: true,
  });
});

describe('ScratchCard', () => {
  it('renders slot content', () => {
    render(ScratchCardSlotWrapper, { props: { onRevealed: vi.fn() } });
    expect(screen.getByText('hidden content')).toBeInTheDocument();
  });

  it('renders the skip button', () => {
    render(ScratchCard, { props: { onRevealed: vi.fn() } });
    expect(screen.getByRole('button', { name: /pular/i })).toBeInTheDocument();
  });

  it('calls onRevealed when skip button is clicked', async () => {
    vi.useFakeTimers();
    const onRevealed = vi.fn();
    render(ScratchCard, { props: { onRevealed } });
    const skipBtn = screen.getByRole('button', { name: /pular/i });
    await fireEvent.click(skipBtn);
    await vi.runAllTimersAsync();
    expect(onRevealed).toHaveBeenCalledOnce();
    vi.useRealTimers();
  });
});
