<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { usePageMeta } from '@/composables/usePageMeta'
import { useProfileSectionAnimations } from '@/composables/useProfilePageAnimations'
import { injectAboutStructuredData } from '@/profile/injectStructuredData'
import { seo } from '@/profile/positioning'
import { identity } from '@/profile/identity'
import { buildPageMeta } from '@/profile/siteMeta'
import ProfileBioSection from '@/components/profile/ProfileBioSection.vue'

defineProps<{
  isDark: boolean
}>()

usePageMeta(buildPageMeta({
  title: seo.aboutTitle,
  description: seo.aboutDescription,
  canonicalPath: '/about',
  keywords: seo.aboutKeywords,
  ogType: 'profile',
}))

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
