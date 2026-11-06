import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.housingrepairsteam.co.uk';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/login/'], // Prevent crawling of API routes and auth portals
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}