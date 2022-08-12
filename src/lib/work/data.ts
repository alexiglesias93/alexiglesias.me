import { nanoid } from 'nanoid';

export type WorkItemData = typeof WORK_ITEMS[number];

export const WORK_ITEMS = [
  {
    id: nanoid(),
    title: 'Finsweet Extension',
    description: 'A badass workflow toolkit for Webflow.',
    href: 'https://www.finsweet.com/extension',
    image: 'images/work/finsweet-extension.png',
    tags: ['svelte', 'extension', 'typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Attributes',
    description: 'No-code Attributes solutions for Webflow.',
    href: 'https://www.finsweet.com/attributes',
    image: 'images/work/attributes.png',
    tags: ['typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Cookie Consent',
    description: 'Incredibly powerful cookie consent plugin for Webflow.',
    href: 'https://www.finsweet.com/cookie-consent/',
    image: 'images/work/cookie-consent.png',
    tags: ['typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Cookie Consent',
    description: 'Incredibly powerful cookie consent plugin for Webflow.',
    href: 'https://www.finsweet.com/cookie-consent/',
    image: 'images/work/cookie-consent.png',
    tags: ['typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Finsweet Extension',
    description: 'A badass workflow toolkit for Webflow.',
    href: 'https://www.finsweet.com/extension',
    image: 'images/work/finsweet-extension.png',
    tags: ['svelte', 'extension', 'typescript', 'webflow']
  }
];
