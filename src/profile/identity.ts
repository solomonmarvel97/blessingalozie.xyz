export const identity = {
  name: 'Blessing Alozie',
  givenName: 'Blessing',
  familyName: 'Alozie',
  jobTitle: 'Frontend Developer & Product Designer',
  tagline:
    'I build responsive, accessible interfaces in Vue.js and design user-centered product experiences in Figma, from concept to production.',
  email: 'alozieblessing23@gmail.com',
  phone: '+2348146937843',
  url: 'https://blessingalozie.xyz',
  host: 'blessingalozie.xyz',
  location: 'Nigeria',
  linkedin: 'https://www.linkedin.com/in/blessingalozie1',
  resumeDeveloperHref: '/resume/blessing-alozie-frontend-developer-cv.pdf',
  resumeDesignerHref: '/resume/blessing-alozie-product-designer-cv.pdf',
  profileImage: '/profile/profile.jpg?v=2',
  ogImagePath: '/profile/og-banner.webp',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/webp',
  imageAlt: 'Blessing Alozie, frontend developer and product designer',
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
