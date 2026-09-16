<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectSectionStructuredData } from '@/profile/injectStructuredData'
import { companies, experience } from '@/profile/data'
import { seo } from '@/profile/positioning'
import { pageUrl, assetUrl } from '@/profile/identity'
import ProfileExperienceSection from '@/components/profile/ProfileExperienceSection.vue'
import ProfileCompaniesSection from '@/components/profile/ProfileCompaniesSection.vue'

defineProps<{
  isDark: boolean
}>()

const title = seo.experienceTitle
const description = seo.experienceDescription

usePageMeta({
  title,
  description,
  canonical: pageUrl('/experience'),
  keywords: seo.keywords,
  og: {
    type: 'profile',
    title,
    description,
    url: pageUrl('/experience'),
    image: assetUrl('/profile/og-banner.jpg'),
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: seo.imageAlt,
  },
  twitter: {
    title,
    description,
    image: assetUrl('/profile/og-banner.jpg'),
    imageAlt: seo.imageAlt,
  },
})

const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

onMounted(() => {
  document.title = title
  injectSectionStructuredData({
    path: '/experience',
    name: title,
    description,
    crumb: 'Experience',
  })
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileExperienceSection :is-dark="isDark" :experience="experience" />
    <ProfileCompaniesSection :is-dark="isDark" :companies="companies" />
  </div>
</template>
