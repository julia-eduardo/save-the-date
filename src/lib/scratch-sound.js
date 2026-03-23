let audioCtx = null;
let audioBuffer = null;
let lastPlayed = 0;
const THROTTLE_MS = 80;

async function loadBuffer() {
  if (audioBuffer) return audioBuffer;
  if (!audioCtx) audioCtx = new AudioContext();
  const response = await fetch(`${import.meta.env.BASE_URL}scratching-paper.mp3`);
  const arrayBuffer = await response.arrayBuffer();
  audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
  return audioBuffer;
}

// Preload on first user interaction
export async function initScratchSound() {
  if (!audioCtx) audioCtx = new AudioContext();
  await loadBuffer();
}

export function playScratchSound() {
  const now = Date.now();
  if (now - lastPlayed < THROTTLE_MS) return;
  lastPlayed = now;

  if (!audioCtx || !audioBuffer) return;
  if (audioCtx.state === 'suspended') audioCtx.resume();

  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;

  // Start from a random offset so repeated scratches don't sound looped
  const maxOffset = Math.max(0, audioBuffer.duration - 0.12);
  source.playbackRate.value = 0.9 + Math.random() * 0.2; // slight pitch variation

  const gain = audioCtx.createGain();
  gain.gain.value = 0.8;

  source.connect(gain);
  gain.connect(audioCtx.destination);
  source.start(0, Math.random() * maxOffset, 0.12); // play 120ms slice
}
