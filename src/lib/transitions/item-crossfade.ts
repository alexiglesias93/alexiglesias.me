import { quartOut } from 'svelte/easing';
import { crossfade } from 'svelte/transition';

export const [send, receive] = crossfade({
  duration: 200,
  easing: quartOut,
});
