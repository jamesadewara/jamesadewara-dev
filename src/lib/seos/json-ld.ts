import configPromise from '@/lib/config'

export const jsonLdUtils = {
  // Person Schema
  person: async () => {
    const config = await configPromise
    const baseUrl = config.baseUrl
    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'James Ayomide Adewara',
      jobTitle: 'Fullstack Developer',
      url: baseUrl,
      image: `${baseUrl}/favicon.ico`,
      sameAs: [
        'https://www.linkedin.com/in/james-adewara/',
        'https://github.com/jamesadewara',
        'https://x.com/jamesadewaradev',
        'https://medium.com/@jamesadewara1',
      ],
      knowsAbout: [
        'React',
        'Next.js',
        'FastAPI',
        'Django',
        'PostgreSQL',
        'AWS',
        'Docker',
        'TypeScript',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'jamesadewara1@gmail.com',
        contactType: 'professional',
      },
    }
  },

  // Website Schema
  website: async () => {
    const config = await configPromise
    const baseUrl = config.baseUrl
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'James Adewara — Fullstack Developer',
      url: baseUrl,
      author: {
        '@type': 'Person',
        name: 'James Ayomide Adewara',
      },
    }
  },

  // Breadcrumb Schema
  breadcrumb: async (items: { name: string; url: string }[]) => {
    const config = await configPromise
    const baseUrl = config.baseUrl
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
      })),
    }
  },
}
