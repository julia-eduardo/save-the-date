<script>
  import ScratchCard from './ScratchCard.svelte';
  export let onRevealed = () => {};
</script>

<ScratchCard {onRevealed}>
  <p>hidden content</p>
</ScratchCard>
