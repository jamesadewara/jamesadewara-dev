import type { Metadata } from 'next'
import type { SEOProps } from './types'
import configPromise from '@/lib/config'

const defaultSEO = {
  title: 'James Adewara | Fullstack Developer for Founders',
  description:
    'Fullstack developer shipping production-ready products for early-stage founders. Frontend, backend, and cloud — one developer, faster and cheaper than a team.',
  keywords: [
    'fullstack developer',
    'next.js developer',
    'fastapi developer',
    'MVP development',
    'react developer',
    'cloud deployment',
    'aws deployment',
    'netlify deployment',
    'freelance developer',
    'James Adewara',
  ],
  image: '/favicon.ico',
}

export async function generateSEO(props: SEOProps = {}): Promise<Metadata> {
  const config = await configPromise
  const baseUrl = config.baseUrl

  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    keywords = defaultSEO.keywords,
    image = defaultSEO.image,
    url,
    canonical,
    noindex = false,
    nofollow = false,
    type = 'website',
  } = props

  const fullTitle = title.includes('James Adewara') ? title : `${title} | James Adewara`
  const imageUrl = image.startsWith('https') ? image : `${baseUrl}${image}`
  const canonicalUrl = canonical || (url ? `${baseUrl}${url}` : baseUrl)

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,

    authors: [{ name: 'James Ayomide Adewara' }],
    creator: 'James Ayomide Adewara',
    publisher: 'James Ayomide Adewara',

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'James Adewara',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'en_US',
      type,
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@jamesadewara_dev',
      site: '@jamesadewara_dev',
    },

    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }

  return metadata
}

// Async utility functions for use with generateMetadata in page files
export const seoUtils = {
  home: (): Promise<Metadata> =>
    generateSEO({
      title: 'James Adewara | Fullstack Developer for Founders',
      description:
        'From idea to deployed product — frontend, backend, and cloud. One developer, faster and cheaper than hiring a team or agency.',
      keywords: [
        'fullstack developer',
        'MVP development',
        'next.js developer',
        'fastapi developer',
        'react developer',
        'aws deployment',
        'freelance developer',
        'hire fullstack developer',
        'James Adewara',
      ],
      image: '/favicon.ico',
    }),

  work: (): Promise<Metadata> =>
    generateSEO({
      title: 'Work — Selected Projects',
      description:
        'Real products, real customers. Ventunna Bespoke Fashion (UK e-commerce) and Dwyzmax Electronics (Nigerian full-stack store). Designed, built, and deployed solo.',
      keywords: [
        'fullstack projects',
        'next.js projects',
        'fastapi projects',
        'e-commerce development',
        'james adewara projects',
      ],
      url: '/work',
    }),

  contact: (): Promise<Metadata> =>
    generateSEO({
      title: 'Contact — Start a Project',
      description:
        'Get in touch to discuss your MVP or product build. Email, WhatsApp, GitHub, LinkedIn — or send a message directly.',
      keywords: [
        'hire fullstack developer',
        'MVP development',
        'freelance developer',
        'contact james adewara',
      ],
      url: '/contact',
    }),

  about: (): Promise<Metadata> =>
    generateSEO({
      title: 'About — James Adewara',
      description:
        'Fullstack developer based in Nigeria, working worldwide. Building production-ready web apps with React, Next.js, FastAPI, Django, and AWS.',
      keywords: [
        'about james adewara',
        'fullstack developer nigeria',
        'next.js developer',
        'react developer',
      ],
      url: '/about',
    }),
}
