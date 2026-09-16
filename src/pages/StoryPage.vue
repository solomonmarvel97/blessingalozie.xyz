<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectAboutStructuredData } from '@/profile/injectStructuredData'
import { seo } from '@/profile/positioning'
import { identity, pageUrl, assetUrl } from '@/profile/identity'
import ProfileBioSection from '@/components/profile/ProfileBioSection.vue'

defineProps<{
  isDark: boolean
}>()

usePageMeta({
  title: seo.aboutTitle,
  description: seo.aboutDescription,
  canonical: pageUrl('/about'),
  keywords: seo.keywords,
  og: {
    type: 'profile',
    title: seo.aboutTitle,
    description: seo.aboutDescription,
    url: pageUrl('/about'),
    image: assetUrl('/profile/og-banner.jpg'),
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: seo.imageAlt,
  },
  twitter: {
    title: seo.aboutTitle,
    description: seo.aboutDescription,
    image: assetUrl('/profile/og-banner.jpg'),
    imageAlt: seo.imageAlt,
  },
})

const emailCopied = ref(false)
const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

function copyEmail() {
  navigator.clipboard.writeText(identity.email)
  emailCopied.value = true
  setTimeout(() => { emailCopied.value = false }, 2000)
}

onMounted(() => {
  injectAboutStructuredData()
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileBioSection
      :is-dark="isDark"
      :email-copied="emailCopied"
      @copy-email="copyEmail"
    />
  </div>
</template>
