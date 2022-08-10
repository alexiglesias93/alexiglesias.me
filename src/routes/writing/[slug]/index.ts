import type { RequestHandler } from './__types';
import { WRITINGS } from '$lib/writing/data';

export const GET: RequestHandler = ({ params }) => {
	const status = WRITINGS.find(({ slug }) => slug === params.slug) ? 200 : 404;

	return {
		status,
		body: params
	};
};
