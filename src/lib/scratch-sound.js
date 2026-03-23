let audioCtx = null;
let lastPlayed = 0;
const THROTTLE_MS = 50;

/**
 * Plays a short scratch sound via Web Audio API.
 * Throttled to once per THROTTLE_MS.
 */
export function playScratchSound() {
  const now = Date.now();
  if (now - lastPlayed < THROTTLE_MS) return;
  lastPlayed = now;

  if (!audioCtx) {
    audioCtx = new AudioContext();
  }

  // Resume if suspended (browser autoplay policy)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const sampleRate = audioCtx.sampleRate;
  const bufferSize = Math.floor(sampleRate * 0.04); // 40ms of noise
  const buffer = audioCtx.createBuffer(1, bufferSize, sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * 0.25;
  }

  const source = audioCtx.createBufferSource();
  source.buffer = buffer;

  // Band-pass filter to shape scratch timbre
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 2000;
  filter.Q.value = 0.5;

  const gain = audioCtx.createGain();
  gain.gain.value = 0.4;

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  source.start();
}
