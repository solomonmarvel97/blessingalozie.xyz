<script setup lang="ts">
import { PhLinkedinLogo, PhFileText, PhEnvelope } from '@phosphor-icons/vue'
import { identity, mailto } from '@/profile/identity'
import { positioning } from '@/profile/positioning'

defineProps<{
  isDark: boolean
}>()
</script>

<template>
  <div class="mb-8" data-header itemscope itemtype="https://schema.org/Person">
    <h1
      class="text-[14px] font-semibold leading-snug"
      data-name
      :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
      itemprop="name"
    >{{ identity.name }}</h1>
    <div class="mt-3 flex flex-col gap-3">
      <p
        class="m-0 text-[12px] leading-[1.55]"
        :class="isDark ? 'text-[#c9c7c0]' : 'text-[#333]'"
        itemprop="jobTitle"
      >{{ positioning.title }}</p>
      <p
        class="m-0 text-[12px] leading-[1.55]"
        :class="isDark ? 'text-[#888]' : 'text-[#555]'"
      >{{ positioning.headline }}</p>
      <p
        class="m-0 text-[12px] leading-[1.55]"
        :class="isDark ? 'text-[#555]' : 'text-[#888]'"
      >{{ positioning.subhead }}</p>
    </div>

    <div class="flex flex-wrap items-center gap-2 mt-4 mb-3">
      <a
        :href="identity.linkedin"
        target="_blank"
        rel="noopener noreferrer me"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
        :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
        itemprop="sameAs"
        :aria-label="`${identity.name} on LinkedIn`"
      >
        <PhLinkedinLogo :size="13" weight="bold" />
      </a>
      <a
        :href="identity.resumeHref"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
        :class="isDark ? 'bg-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'bg-[#e8e5de] text-[#555] hover:text-[#1a1a1a]'"
        :aria-label="`${identity.name} resume`"
      >
        <PhFileText :size="13" weight="bold" />
      </a>
      <a
        :href="mailto()"
        class="flex items-center justify-center h-7 px-3 rounded-full text-[11px] font-medium transition-colors ml-1 border"
        :class="isDark ? 'border-[#2a2a28] text-[#aaa] hover:text-[#e8e5de]' : 'border-[#d8d5ce] text-[#555] hover:text-[#1a1a1a]'"
      ><PhEnvelope :size="13" class="shrink-0 mr-1" />Email</a>
    </div>
  </div>
</template>
