import { identity, pageUrl, assetUrl } from './identity'
import { seo } from './positioning'

/** ISO date for sitemap lastmod and JSON-LD dateModified. */
export const siteLastModified = '2026-09-18'

export type OgType = 'website' | 'profile' | 'article'

export interface PageMetaInput {
  title: string
  description: string
  canonicalPath: string
  keywords?: string
  ogType?: OgType
  robots?: string
  skipCanonical?: boolean
}

export interface PageMeta extends PageMetaInput {
  canonical: string
  og: {
    type: OgType
    title: string
    description: string
    url: string
    image: string
    imageWidth: number
    imageHeight: number
    imageAlt: string
  }
  twitter: {
    title: string
    description: string
    image: string
    imageAlt: string
  }
}

export function buildPageMeta(options: PageMetaInput): PageMeta {
  const canonical = pageUrl(options.canonicalPath)
  const image = assetUrl(identity.ogImagePath)
  const ogType = options.ogType ?? 'website'

  return {
    ...options,
    canonical,
    og: {
      type: ogType,
      title: options.title,
      description: options.description,
      url: canonical,
      image,
      imageWidth: identity.ogImageWidth,
      imageHeight: identity.ogImageHeight,
      imageAlt: seo.imageAlt,
    },
    twitter: {
      title: options.title,
      description: options.description,
      image,
      imageAlt: seo.imageAlt,
    },
  }
}
