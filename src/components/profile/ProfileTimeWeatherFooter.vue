<script setup lang="ts">
defineProps<{
  isDark: boolean
  time: string
  weatherIcon: string
  tempC: number | null
}>()
</script>

<template>
  <footer
    class="text-[11px] flex flex-col gap-2"
    :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
    data-footer
    aria-label="Site footer"
  >
    <div class="flex items-center gap-1.5" aria-label="Local time and weather">
      <span><time datetime="PT1M">{{ time }}</time> in Nigeria</span>
      <span v-if="weatherIcon" class="text-[13px] leading-none" aria-label="Current weather">{{ weatherIcon }}</span>
      <span v-if="tempC !== null" :class="isDark ? 'text-[#555]' : 'text-[#888]'" aria-label="Temperature">{{ tempC }}°C</span>
    </div>
  </footer>
</template>
