import { crossfade } from 'svelte/transition';
import { quartIn } from 'svelte/easing';

const [send, receive] = crossfade({
  duration: 400,
  easing: quartIn,
});

export { send, receive };
