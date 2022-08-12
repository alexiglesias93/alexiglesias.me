import { nanoid } from 'nanoid';

export type WorkItemData = typeof WORK_ITEMS[number];

export const WORK_ITEMS = [
  {
    id: nanoid(),
    title: 'Finsweet Extension',
    description: 'A badass workflow toolkit for Webflow.',
    href: 'https://chrome.google.com/webstore/detail/finsweet-extension-for-we/mjfibgdpclkaemogkfadpbdfoinnejep',
    image: 'images/work/finsweet-extension.webp',
    tags: ['svelte', 'extension', 'typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Attributes',
    description: 'No-code Attributes solutions for Webflow.',
    href: 'https://www.finsweet.com/attributes',
    image: 'images/work/attributes.webp',
    tags: ['typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Finsweet SSO',
    description: 'One single account for all Finsweet products, services, and preferences.',
    href: 'https://www.finsweet.com/fin-pro/log-in-with-finsweet',
    image: 'images/work/finsweet-sso.webp',
    tags: ['svelte', 'typescript', 'backend']
  },
  {
    id: nanoid(),
    title: 'Cookie Consent',
    description: 'Incredibly powerful cookie consent plugin for Webflow.',
    href: 'https://www.finsweet.com/cookie-consent/',
    image: 'images/work/cookie-consent.webp',
    tags: ['typescript', 'webflow']
  },
  {
    id: nanoid(),
    title: 'Enterprise Sales Demo',
    description: 'Taking Webflow to the next level.',
    href: 'https://www.finsweet.website/',
    image: 'images/work/enterprise-sales-demo.webp',
    tags: ['typescript', 'webflow', 'backend']
  },
  {
    id: nanoid(),
    title: 'Advanced Webflow Forms',
    description: 'Multi steps & conditional logic for Webflow.',
    href: 'https://advanced-forms.webflow.io/',
    image: 'images/work/advanced-webflow-forms.webp',
    tags: ['svelte', 'typescript', 'webflow']
  }
];
