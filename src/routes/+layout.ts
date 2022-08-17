import type { LayoutLoad } from './$types';

// throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export const load: LayoutLoad = async ({ url: { pathname } }) => ({ pathname });
