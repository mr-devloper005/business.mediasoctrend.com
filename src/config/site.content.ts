import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Official Press Release Wire',
  },
  footer: {
    tagline:
      'Delivering verified press releases to journalists, newsrooms, and digital media channels worldwide.',
  },
  hero: {
    badge: 'Global Press Wire',
    title: ['Your story, delivered to every newsroom that matters.'],
    description:
      'Business Mediasoctrend is the trusted press release distribution platform for corporations, agencies, and communications teams. Publish once — reach journalists, search engines, and partner media desks instantly.',
    primaryCta: {
      label: 'Browse press releases',
      href: '/media-network',
    },
    secondaryCta: {
      label: 'Submit a release',
      href: '/contact',
    },
    searchPlaceholder: 'Search press releases',
    focusLabel: 'Latest releases',
    featureCardBadge: 'Wire update',
    featureCardTitle: 'New releases published today.',
    featureCardDescription:
      'The wire updates in real time. Every approved release is indexed, formatted, and ready for pickup by partner newsrooms.',
  },
  home: {
    metadata: {
      title: 'Business Mediasoctrend — Press Release Distribution & Media Wire',
      description:
        'Distribute press releases to journalists, newsrooms, and digital media channels. Editorial review, structured formatting, and real-time syndication.',
      openGraphTitle: 'Business Mediasoctrend — Press Release Distribution',
      openGraphDescription:
        'The trusted press wire for corporations and PR agencies. Publish releases that journalists actually read.',
      keywords: [
        'press release',
        'media distribution',
        'press wire',
        'PR syndication',
        'newsroom',
        'media coverage',
        'Business Mediasoctrend',
      ],
    },
    introBadge: 'Why Business Mediasoctrend',
    introTitle: 'Built for communications teams that cannot afford to miss coverage.',
    introParagraphs: [
      'Every major announcement deserves a distribution channel that respects the craft of public relations — structured formatting, embargo controls, and editorial review before anything goes live.',
      'Business Mediasoctrend gives PR professionals a clean, fast wire that journalists trust. No clutter, no noise — just well-formatted releases that are easy to scan, cite, and republish.',
      'From product launches and earnings reports to executive appointments and partnership announcements, our platform handles every release type with the precision your brand requires.',
    ],
    sideBadge: 'Platform features',
    sidePoints: [
      'Editorial review and compliance check before every release goes live.',
      'Structured fields for headline, dateline, boilerplate, and media contacts.',
      'Category-aware archive with date, industry, and topic filters.',
      'SEO-optimised release pages built for journalist discovery and citation.',
      'Embargo scheduling with automatic publish at your chosen date and time.',
      'Multimedia attachments — images, PDFs, and video links supported.',
    ],
    primaryLink: {
      label: 'View all releases',
      href: '/media-network',
    },
    secondaryLink: {
      label: 'Contact the desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Get started',
    title: 'Ready to put your announcement in front of the right journalists?',
    description:
      'Tell us about your release schedule, target industries, and distribution goals. Our editorial team will set up the right wire lane and review workflow for your organisation.',
    primaryCta: {
      label: 'Contact the editorial desk',
      href: '/contact',
    },
    secondaryCta: {
      label: 'View pricing',
      href: '/pricing',
    },
  },
  taskSectionHeading: 'Latest press releases',
  taskSectionDescriptionSuffix:
    'Freshly published releases from the Business Mediasoctrend wire.',
} as const

export const taskPageMetadata: Record<
  Exclude<TaskKey, 'comment' | 'org' | 'social'>,
  { title: string; description: string }
> = {
  article: {
    title: 'Articles',
    description: 'Read the latest editorial articles and long-form updates.',
  },
  listing: {
    title: 'Listings',
    description: 'Explore directory listings and business entries.',
  },
  classified: {
    title: 'Classifieds',
    description: 'Browse classified notices and short-form announcements.',
  },
  image: {
    title: 'Media',
    description: 'Browse image-led press assets and visual releases.',
  },
  profile: {
    title: 'Profiles',
    description: 'View organisation and spokesperson profiles.',
  },
  sbm: {
    title: 'Resources',
    description: 'Browse curated media resources and saved references.',
  },
  pdf: {
    title: 'Documents',
    description: 'Open press kits, PDFs, and downloadable media files.',
  },
  mediaDistribution: {
    title: 'Press Releases',
    description:
      'Browse the full Business Mediasoctrend wire — filtered by industry, category, and date.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings',
    paragraphs: ['Directory entries and business service pages.'],
    links: [{ label: 'Home', href: '/' }],
  },
  article: {
    title: 'Articles',
    paragraphs: ['Editorial articles and long-form media coverage.'],
    links: [{ label: 'Home', href: '/' }],
  },
  classified: {
    title: 'Classifieds',
    paragraphs: ['Short-form notices and classified announcements.'],
    links: [{ label: 'Home', href: '/' }],
  },
  image: {
    title: 'Media Assets',
    paragraphs: ['Image-first press assets and visual media releases.'],
    links: [{ label: 'Home', href: '/' }],
  },
  profile: {
    title: 'Profiles',
    paragraphs: ['Organisation and spokesperson profile pages.'],
    links: [{ label: 'Home', href: '/' }],
  },
  sbm: {
    title: 'Resources',
    paragraphs: ['Curated media resources and reference links.'],
    links: [{ label: 'Home', href: '/' }],
  },
  pdf: {
    title: 'Documents',
    paragraphs: ['Press kits, PDFs, and downloadable media files.'],
    links: [{ label: 'Home', href: '/' }],
  },
  social: {
    title: 'Social',
    paragraphs: ['Short updates and social media activity.'],
    links: [{ label: 'Home', href: '/' }],
  },
  comment: {
    title: 'Comments',
    paragraphs: ['Commentary and editorial response posts.'],
    links: [{ label: 'Home', href: '/' }],
  },
  org: {
    title: 'Organisations',
    paragraphs: ['Organisation pages and corporate entities.'],
    links: [{ label: 'Home', href: '/' }],
  },
  mediaDistribution: {
    title: 'Press Releases',
    paragraphs: [
      'This archive lists every press release published through Business Mediasoctrend — newest first — with filters for industry, category, and date range.',
      'Open any headline for the full release text, media contacts, boilerplate, and related coverage from the same wire.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
