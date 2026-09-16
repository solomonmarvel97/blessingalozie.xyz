import { identity, pageUrl, assetUrl } from './identity'
import { faqs, positioning, seo } from './positioning'

const BASE_URL = identity.url

function replaceLdJson(schemas: object[]) {
  document.querySelectorAll('script[data-profile-ld]').forEach(el => el.remove())
  for (const schema of schemas) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-profile-ld', 'true')
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}

function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: identity.name,
    givenName: identity.givenName,
    familyName: identity.familyName,
    jobTitle: positioning.title,
    description: seo.homeDescription,
    image: assetUrl('/profile/profile.jpg'),
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
        name: 'Frontend Developer',
        occupationLocation: { '@type': 'Organization', name: 'KidsClubZone', url: 'https://kidsclubzone.com' },
      },
      {
        '@type': 'Occupation',
        name: 'UI/UX Product Designer',
        occupationLocation: { '@type': 'Organization', name: 'PeerPay Network', url: 'https://peerpaynetwork.com' },
      },
      {
        '@type': 'Occupation',
        name: 'Frontend Developer',
        occupationLocation: { '@type': 'Organization', name: 'IvoryLearn', url: 'https://ivorylearn.com' },
      },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Ahmadu Bello University',
      description: 'B.Sc. Sociology (2022 – 2025)',
    },
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certified Web Developer',
      credentialCategory: 'certificate',
      recognizedBy: { '@type': 'Organization', name: 'LearnCode Academy' },
    },
  }
}

function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: identity.name,
    url: BASE_URL,
    description: `Personal site of ${identity.name}, a product designer and frontend engineer.`,
    inLanguage: 'en',
    author: { '@id': `${BASE_URL}/#person` },
  }
}

/** Injects JSON-LD for Person, ProfilePage, WebSite, and BreadcrumbList. Idempotent per navigation. */
export function injectProfileStructuredData() {
  const profilePage = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${BASE_URL}/#profilepage`,
    name: seo.homeTitle,
    description: `Work and profile of ${identity.name}, a product designer and frontend engineer.`,
    url: `${BASE_URL}/`,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-09-16',
    inLanguage: 'en',
    image: assetUrl('/profile/profile.jpg'),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
    ],
  }

  const service = {
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

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}/#faq`,
    mainEntity: faqs.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  replaceLdJson([personSchema(), profilePage, websiteSchema(), breadcrumb, service, faqPage])
}

/** Injects JSON-LD for the About page. Idempotent per navigation. */
export function injectAboutStructuredData() {
  const aboutPage = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE_URL}/about#page`,
    name: seo.aboutTitle,
    description: seo.aboutDescription,
    url: pageUrl('/about'),
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-09-16',
    inLanguage: 'en',
    image: assetUrl('/profile/profile.jpg'),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'About', item: pageUrl('/about') },
    ],
  }

  replaceLdJson([personSchema(), aboutPage, websiteSchema(), breadcrumb])
}

export function injectSectionStructuredData(page: {
  path: string
  name: string
  description: string
  crumb: string
}) {
  const url = pageUrl(page.path)
  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}#page`,
    name: page.name,
    description: page.description,
    url,
    mainEntity: { '@id': `${BASE_URL}/#person` },
    dateModified: '2026-09-16',
    inLanguage: 'en',
    image: assetUrl('/profile/profile.jpg'),
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Work', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: page.crumb, item: url },
    ],
  }

  replaceLdJson([personSchema(), webPage, websiteSchema(), breadcrumb])
}
