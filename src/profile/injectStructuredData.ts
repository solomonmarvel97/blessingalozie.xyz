import {
  aboutBreadcrumbSchema,
  aboutPageSchema,
  homeBreadcrumbSchema,
  homeFaqSchema,
  homeServiceSchema,
  personSchema,
  profilePageSchema,
  sectionBreadcrumbSchema,
  sectionPageSchema,
  websiteSchema,
} from './structuredDataSchemas'

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

/** Injects JSON-LD for Person, ProfilePage, WebSite, and BreadcrumbList. Idempotent per navigation. */
export function injectProfileStructuredData() {
  replaceLdJson([
    personSchema(),
    profilePageSchema(),
    websiteSchema(),
    homeBreadcrumbSchema(),
    homeServiceSchema(),
    homeFaqSchema(),
  ])
}

/** Injects JSON-LD for the About page. Idempotent per navigation. */
export function injectAboutStructuredData() {
  replaceLdJson([
    personSchema(),
    aboutPageSchema(),
    websiteSchema(),
    aboutBreadcrumbSchema(),
  ])
}

export function injectSectionStructuredData(page: {
  path: string
  name: string
  description: string
  crumb: string
}) {
  replaceLdJson([
    personSchema(),
    sectionPageSchema(page),
    websiteSchema(),
    sectionBreadcrumbSchema(page),
  ])
}
