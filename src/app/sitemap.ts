import { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // ⚡ Add this line

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gakgroup.in',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];
}
