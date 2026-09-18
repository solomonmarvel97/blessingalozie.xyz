import { onMounted, onUnmounted } from 'vue'
import { identity } from '@/profile/identity'
import type { PageMeta } from '@/profile/siteMeta'

export type { PageMeta } from '@/profile/siteMeta'

function setMeta(selector: string, attr: 'content' | 'href', value: string) {
  const el = document.querySelector<HTMLMetaElement | HTMLLinkElement>(selector)
  if (el) el.setAttribute(attr, value)
}

export function usePageMeta(meta: PageMeta) {
  let previousTitle = ''
  let previousRobots = ''

  onMounted(() => {
    previousTitle = document.title
    document.title = meta.title

    setMeta('meta[name="description"]', 'content', meta.description)
    if (meta.keywords) setMeta('meta[name="keywords"]', 'content', meta.keywords)
    if (!meta.skipCanonical) setMeta('link[rel="canonical"]', 'href', meta.canonical)

    const robotsEl = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    if (robotsEl) {
      previousRobots = robotsEl.getAttribute('content') ?? ''
      robotsEl.setAttribute('content', meta.robots ?? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
    }

    setMeta('meta[property="og:site_name"]', 'content', identity.name)
    setMeta('meta[property="og:locale"]', 'content', 'en_US')
    setMeta('meta[property="og:type"]', 'content', meta.og.type)
    setMeta('meta[property="og:title"]', 'content', meta.og.title)
    setMeta('meta[property="og:description"]', 'content', meta.og.description)
    setMeta('meta[property="og:url"]', 'content', meta.og.url)
    setMeta('meta[property="og:image"]', 'content', meta.og.image)
    setMeta('meta[property="og:image:secure_url"]', 'content', meta.og.image)
    setMeta('meta[property="og:image:type"]', 'content', identity.ogImageType)
    if (meta.og.imageWidth)
      setMeta('meta[property="og:image:width"]', 'content', String(meta.og.imageWidth))
    if (meta.og.imageHeight)
      setMeta('meta[property="og:image:height"]', 'content', String(meta.og.imageHeight))
    setMeta('meta[property="og:image:alt"]', 'content', meta.og.imageAlt)

    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'content', meta.twitter.title)
    setMeta('meta[name="twitter:description"]', 'content', meta.twitter.description)
    setMeta('meta[name="twitter:image"]', 'content', meta.twitter.image)
    setMeta('meta[name="twitter:image:alt"]', 'content', meta.twitter.imageAlt)
  })

  onUnmounted(() => {
    document.title = previousTitle
    if (previousRobots) {
      setMeta('meta[name="robots"]', 'content', previousRobots)
    }
  })
}
