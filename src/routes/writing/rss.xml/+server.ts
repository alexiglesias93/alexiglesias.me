import type { RequestHandler } from '@sveltejs/kit';

import { WEBSITE_ORIGIN } from '$lib/utils/constants';
import { WRITINGS } from '$lib/writing/data';

export const prerender = true;

export const GET: RequestHandler = () => {
  const most_recent_publish_date = WRITINGS.reduce<Date>((acc, curr) => {
    const curr_date = new Date(curr.module.metadata.date_published);

    if (curr_date > acc) {
      acc = curr_date;
    }

    return acc;
  }, new Date(WRITINGS[0].module.metadata.date_published));

  const writings_xml = WRITINGS.map(
    ({
      slug,
      module: {
        metadata: { date_published, subtitle, title }
      }
    }) => `<item>
      <title>${title}</title>
      <link>${WEBSITE_ORIGIN}/writing/${slug}</link>
      <guid>${WEBSITE_ORIGIN}/writing/${slug}</guid>
      <description>${subtitle}</description>
      <pubDate>${new Date(date_published).toUTCString()}</pubDate>
      <media:content url="${WEBSITE_ORIGIN}/images/open-graph.jpg" medium="image"/>
      <media:thumbnail url="${WEBSITE_ORIGIN}/images/open-graph.jpg"/>
    </item>`
  ).join(`
    `);

  const xml = `<?xml version="1.0" encoding="utf-8"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
    <channel>
    <title>Alex Iglesias</title>
    <link>${WEBSITE_ORIGIN}</link>
    <description>Interactive bites about Webflow, Svelte and Typescript.</description>
    <pubDate>${most_recent_publish_date.toUTCString()}</pubDate>
    <atom:link href="${WEBSITE_ORIGIN}/writing/rss.xml" rel="self" type="application/rss+xml"/>
    ${writings_xml}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml'
    }
  });
};
