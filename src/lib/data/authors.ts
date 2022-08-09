export type Author = typeof AUTHORS[keyof typeof AUTHORS];

export const AUTHORS = {
	alex: {
		name: 'Alex Iglesias',
		img: '/images/authors/alex.jpg',
		twitter: 'alexiglesias_me'
	}
};
