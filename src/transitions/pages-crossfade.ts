import { crossfade } from 'svelte/transition';
import { quartOut } from 'svelte/easing';

const [send, receive] = crossfade({
  duration: 400,
  easing: quartOut,
});

export { send, receive };
