import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://www.jandrescholtz.com/', priority: 1 }];
}
