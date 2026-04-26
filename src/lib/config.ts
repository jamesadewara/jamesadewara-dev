// Named exports for synchronous use (server components, static metadata, API routes)
const SMTP_HOST: string = process.env.SMTP_HOST ?? ''
const SMTP_PORT: string = process.env.SMTP_PORT ?? ''
const SMTP_USER: string = process.env.SMTP_USER ?? ''
const SMTP_PASS: string = process.env.SMTP_PASS ?? ''
const SMTP_SECURE: boolean = process.env.SMTP_SECURE === 'true'
const BASE_URL: string =
  process.env.NEXT_PUBLIC_SERVER_URL ?? 'https://jamesadewara.me'
const ANALYTICS_ID: string = process.env.ANALYTICS_ID ?? ''

// configPromise — async-compatible for use in generateMetadata and API routes
const configPromise = Promise.resolve({
  emailSmtp: {
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    user: SMTP_USER,
    pass: SMTP_PASS,
    secure: SMTP_SECURE,
  },
  baseUrl: BASE_URL,
  analyticsId: ANALYTICS_ID,
  contactHrefs: {
    phone: process.env.PHONE ?? '',
    email: process.env.EMAIL ?? '',
    workEmail: process.env.WORK_EMAIL ?? '',
    whatsapp: process.env.WHATSAPP ?? '',
    twitter: process.env.TWITTER ?? '',
    github: process.env.GITHUB ?? '',
    linkedin: process.env.LINKEDIN ?? '',
  }
})

export type SiteConfig = Awaited<typeof configPromise>

export default configPromise