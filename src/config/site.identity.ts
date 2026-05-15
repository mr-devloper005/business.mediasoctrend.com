export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'rkn8dyg9ny',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Business Mediasoctrend',
  tagline:
    process.env.NEXT_PUBLIC_SITE_TAGLINE ||
    'Official Press Release Wire & Media Distribution',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Business Mediasoctrend is the trusted press release distribution platform for corporations, PR agencies, and communications teams. Publish once — reach journalists, search engines, and partner media desks instantly.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'business.mediasoctrend.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://business.mediasoctrend.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=80&h=80&fit=crop',
} as const
