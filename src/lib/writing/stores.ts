import { writable } from 'svelte/store';

export const active_writing_filter_tag = writable<string | null>(null);
