export interface BaseSEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
}

export interface WebsiteSEOProps extends BaseSEOProps {
  type?: 'website'
}

export type SEOProps = WebsiteSEOProps

// Re-export Next.js Metadata type for convenience
export type { Metadata } from 'next'
