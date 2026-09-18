<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectSectionStructuredData } from '@/profile/injectStructuredData'
import { companies, experience } from '@/profile/data'
import { seo } from '@/profile/positioning'
import { buildPageMeta } from '@/profile/siteMeta'
import ProfileExperienceSection from '@/components/profile/ProfileExperienceSection.vue'
import ProfileCompaniesSection from '@/components/profile/ProfileCompaniesSection.vue'

defineProps<{
  isDark: boolean
}>()

const title = seo.experienceTitle
const description = seo.experienceDescription

usePageMeta(buildPageMeta({
  title,
  description,
  canonicalPath: '/experience',
  keywords: seo.experienceKeywords,
  ogType: 'website',
}))

const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

onMounted(() => {
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
