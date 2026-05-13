export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press media',
    route: '/media-network',
    description: 'Wire-ready announcements with editorial review and syndication metadata.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/media-network',
} as const
