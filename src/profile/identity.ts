export const identity = {
  name: 'Blessing Alozie',
  givenName: 'Blessing',
  familyName: 'Alozie',
  jobTitle: 'Product Designer & Frontend Engineer',
  email: 'alozieblessing23@gmail.com',
  phone: '+2348146937843',
  url: 'https://blessingalozie.xyz',
  host: 'blessingalozie.xyz',
  location: 'Nigeria',
  linkedin: 'https://www.linkedin.com/in/blessingalozie1',
  resumeHref: '/profile/resume.docx',
  profileImage: '/profile/profile.jpg?v=1',
  ogImagePath: '/profile/og-banner.jpg',
  imageAlt: 'Blessing Alozie, product designer and frontend engineer',
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
