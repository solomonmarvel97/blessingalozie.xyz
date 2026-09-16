<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectProfileStructuredData } from '@/profile/injectStructuredData'
import {
  businessOfferings,
  achievements,
  skills,
  products,
} from '@/profile/data'
import { faqs, seo } from '@/profile/positioning'
import { pageUrl, assetUrl } from '@/profile/identity'
import type { InquiryIntent } from '@/profile/inquiries'
import ProfileFractionalCtoCard from '@/components/profile/ProfileFractionalCtoCard.vue'
import ProfileBusinessValueSection from '@/components/profile/ProfileBusinessValueSection.vue'
import ProfileAchievementsSection from '@/components/profile/ProfileAchievementsSection.vue'
import ProfileSkillsSection from '@/components/profile/ProfileSkillsSection.vue'
import ProfileProductsSection from '@/components/profile/ProfileProductsSection.vue'
import ProfileFaqSection from '@/components/profile/ProfileFaqSection.vue'

defineProps<{
  isDark: boolean
}>()

const emit = defineEmits<{
  inquiry: [intent: InquiryIntent]
}>()

const title = seo.homeTitle
const description = seo.homeDescription
const imageAlt = seo.imageAlt

usePageMeta({
  title,
  description,
  canonical: pageUrl('/'),
  keywords: seo.keywords,
  og: {
    type: 'profile',
    title,
    description,
    url: pageUrl('/'),
    image: assetUrl('/profile/og-banner.jpg'),
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt,
  },
  twitter: {
    title,
    description,
    image: assetUrl('/profile/og-banner.jpg'),
    imageAlt,
  },
})

const pageRoot = ref<HTMLElement | null>(null)
useProfileSectionAnimations(pageRoot)

onMounted(() => {
  document.title = title
  injectProfileStructuredData()
})
</script>

<template>
  <div ref="pageRoot">
    <ProfileFractionalCtoCard :is-dark="isDark" @inquiry="emit('inquiry', $event)" />
    <ProfileBusinessValueSection
      :is-dark="isDark"
      :offerings="businessOfferings"
    />
    <ProfileAchievementsSection :is-dark="isDark" :achievements="achievements" />
    <ProfileSkillsSection :is-dark="isDark" :skills="skills" />
    <ProfileProductsSection :is-dark="isDark" :products="products" />
    <ProfileFaqSection :is-dark="isDark" :items="faqs" />
  </div>
</template>
