import { WRITINGS } from '$lib/data/writings';
import type { RequestHandler } from './__types';

export const GET: RequestHandler = ({ params }) => {
	const status = WRITINGS.find(({ slug }) => slug === params.slug) ? 200 : 404;

	return {
		status,
		body: params
	};
};
