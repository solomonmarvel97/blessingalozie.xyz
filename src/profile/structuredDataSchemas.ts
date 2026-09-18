import { identity, pageUrl, assetUrl } from './identity'
import { faqs, positioning, seo } from './positioning'
import { siteLastModified } from './siteMeta'

const BASE_URL = identity.url

function withoutContext(schema: Record<string, unknown>) {
  const { '@context': _context, ...rest } = schema
  return rest
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: identity.name,
    givenName: identity.givenName,
    familyName: identity.familyName,
    jobTitle: positioning.title,
    description: seo.homeDescription,
    image: [
      assetUrl('/profile/profile.jpg'),
      assetUrl(identity.ogImagePath),
    ],
    url: `${BASE_URL}/`,
    email: identity.email,
    telephone: identity.phone,
    nationality: { '@type': 'Country', name: 'Nigeria' },
    homeLocation: { '@type': 'Place', name: identity.location },
    sameAs: [identity.linkedin],
    knowsAbout: [
      'Product Design', 'UX Design', 'UI Design', 'Frontend Engineering',
      'Vue.js', 'Figma', 'Tailwind CSS', 'Responsive Design',
      'Accessibility', 'SEO', 'Design Systems', 'User Flows',
      'Prototyping', 'Wireframing', 'Performance Optimization',
    ],
    hasOccupation: [
      {
        '@type': 'Occupation',
        name: 'Frontend Engineer',
        occupationLocation: { '@type': 'Organization', name: 'JobBox AI', url: 'https://getjobbox.com' },
      },
      {
        '@type': 'Occupation',
        name: 'Frontend Developer',
        occupationLocation: { '@type': 'Organization', name: 'KidsClubZone', url: 'https://kidsclubzone.com' },
      },
      {
        '@type': 'Occupation',
        name: 'UI/UX Product Designer',
        occupationLocation: { '@type': 'Organization', name: 'PeerPay Network', url: 'https://peerpaynetwork.com' },
      },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Ahmadu Bello University',
      description: 'B.Sc. Sociology (Mar 2022 – Jul 2025)',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified Web Developer',
      credentialCategory: 'certificate',
      description: 'Jul 2023 – Jan 2024',
      recognizedBy: { '@type': 'Organization', name: 'LearnCode Academy' },
    },
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: identity.name,
    url: BASE_URL,
    description: `Personal site of ${identity.name}, a product designer and frontend engineer.`,
    inLanguage: 'en',
    publisher: { '@id': `${BASE_URL}/#person` },
    author: { '@id': `${BASE_URL}/#person` },
  }
}

export function profilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profilepage`,
    name: seo.homeTitle,
    description: `Work and profile of ${identity.name}, a product designer and frontend engineer.`,
    url: `${BASE_URL}/`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: siteLastModified,
    inLanguage: 'en',
    image: assetUrl(identity.ogImagePath),
  }
}

export function homeBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
    ],
  }
}

export function homeServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#service`,
    name: 'Product Design and Frontend Engineering',
    serviceType: 'Product design and Vue.js frontend engineering',
    description: 'User-centered product design and frontend implementation for teams in education, fintech, and consumer services.',
    url: BASE_URL,
    provider: { '@id': `${BASE_URL}/#person` },
    areaServed: [
      { '@type': 'Place', name: identity.location },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    audience: {
      '@type': 'Audience',
      audienceType: 'Founders, product leads, and teams who need design and frontend in production',
    },
  }
}

export function homeFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faq`,
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

/** Home-page JSON-LD injected into index.html at build/dev time. */
export function homeLdJsonDocument() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      withoutContext(personSchema()),
      withoutContext(profilePageSchema()),
      withoutContext(websiteSchema()),
      withoutContext(homeBreadcrumbSchema()),
      withoutContext(homeServiceSchema()),
      withoutContext(homeFaqSchema()),
    ],
  }
}

export function aboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about#page`,
    name: seo.aboutTitle,
    description: seo.aboutDescription,
    url: pageUrl('/about'),
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: siteLastModified,
    inLanguage: 'en',
    image: assetUrl(identity.ogImagePath),
  }
}

export function aboutBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: pageUrl('/about') },
    ],
  }
}

export function sectionPageSchema(page: {
  path: string
  name: string
  description: string
}) {
  const url = pageUrl(page.path)
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#page`,
    name: page.name,
    description: page.description,
    url,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: siteLastModified,
    inLanguage: 'en',
    image: assetUrl(identity.ogImagePath),
  }
}

export function sectionBreadcrumbSchema(page: { path: string, crumb: string }) {
  const url = pageUrl(page.path)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: page.crumb, item: url },
    ],
  }
}
