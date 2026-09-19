export const identity = {
  name: 'Blessing Alozie',
  givenName: 'Blessing',
  familyName: 'Alozie',
  jobTitle: 'Design Engineer',
  tagline:
    'I design and build user-centered digital products from concept to implementation, combining UX design, product thinking, and Vue.js development.',
  email: 'alozieblessing23@gmail.com',
  phone: '+2348146937843',
  url: 'https://blessingalozie.xyz',
  host: 'blessingalozie.xyz',
  location: 'Nigeria',
  linkedin: 'https://www.linkedin.com/in/blessingalozie1',
  resumeHref:
    'https://docs.google.com/document/d/1RalTdTBwZvMxhaIHtw0EOWE0gKFmpSoCTQ-iMezQdns/view?usp=sharing',
  profileImage: '/profile/profile.jpg?v=2',
  ogImagePath: '/profile/og-banner.webp',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/webp',
  imageAlt: 'Blessing Alozie, design engineer',
} as const

export function pageUrl(path = '/') {
  if (path === '/' || path === '') return `${identity.url}/`
  return `${identity.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function assetUrl(path: string) {
  return `${identity.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function mailto(subject?: string) {
  if (!subject) return `mailto:${identity.email}`
  return `mailto:${identity.email}?subject=${encodeURIComponent(subject)}`
}
