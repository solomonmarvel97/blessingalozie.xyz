<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { PhX, PhArrowSquareOut } from '@phosphor-icons/vue'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { haptic } from '@/lib/haptics'
import type { Product } from '@/profile/data'

const props = defineProps<{
  isDark: boolean
  products: Product[]
}>()

const router = useRouter()
const openProduct = ref<Product | null>(null)
const modalVideo = ref<HTMLVideoElement | null>(null)

const visualProducts = computed(() => props.products.filter(item => item.image || item.video))
const listedProducts = computed(() => props.products.filter(item => !item.image && !item.video))

type VisualRow =
  | { kind: 'group-header', id: string, label: string, period: string }
  | { kind: 'product', item: Product }

const visualRows = computed(() => {
  const rows: VisualRow[] = []
  let lastGroupId: string | undefined

  for (const item of visualProducts.value) {
    const group = item.productGroup
    if (group && group.id !== lastGroupId) {
      rows.push({ kind: 'group-header', id: group.id, label: group.label, period: group.period })
      lastGroupId = group.id
    } else if (!group) {
      lastGroupId = undefined
    }
    rows.push({ kind: 'product', item })
  }

  return rows
})

function cardMetaLabel(item: Product) {
  return item.surfaceLabel ?? item.year
}

function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function videoFromEvent(event: Event) {
  return (event.currentTarget as HTMLElement | null)?.querySelector('video') ?? null
}

function playHover(event: Event) {
  if (prefersReducedMotion()) return
  const video = videoFromEvent(event)
  if (!video) return
  video.muted = true
  void video.play().catch(() => {})
}

function stopHover(event: Event) {
  const video = videoFromEvent(event)
  if (!video) return
  video.pause()
  video.currentTime = 0
}

function open(item: Product) {
  if (item.page) {
    haptic.tap()
    router.push(item.page)
    return
  }
  openProduct.value = item
  haptic.tap()
}

function close() {
  if (modalVideo.value) {
    modalVideo.value.pause()
    modalVideo.value.currentTime = 0
  }
  openProduct.value = null
}

watch(openProduct, async (item) => {
  if (!item?.video) return
  await nextTick()
  const video = modalVideo.value
  if (!video) return
  video.currentTime = 0
  video.muted = false
  try {
    await video.play()
  } catch {
    video.muted = true
    await video.play().catch(() => {})
  }
})
</script>

<template>
  <section aria-label="Projects by Blessing Alozie" class="mb-12">
    <h2
      class="text-[11px] uppercase tracking-wider mb-4"
      :class="isDark ? 'text-[#444]' : 'text-[#aaa]'"
      data-writing-label
    >Projects</h2>

    <ul
      v-if="visualProducts.length"
      class="mb-8 grid list-none grid-cols-1 gap-x-5 gap-y-8 p-0 m-0 sm:grid-cols-2"
      aria-label="Selected work"
    >
      <template v-for="row in visualRows" :key="row.kind === 'group-header' ? `group-${row.id}` : row.item.title">
      <li
        v-if="row.kind === 'group-header'"
        class="sm:col-span-2"
        data-writing-row
      >
        <div
          class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b pb-2"
          :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
        >
          <p class="m-0 text-[12px] font-medium" :class="isDark ? 'text-[#c9c7c0]' : 'text-[#333]'">{{ row.label }}</p>
          <p class="m-0 text-[11px] tabular-nums" :class="isDark ? 'text-[#555]' : 'text-[#888]'">{{ row.period }}</p>
        </div>
      </li>
      <li
        v-else
        data-writing-row
      >
        <button
          type="button"
          class="group block w-full cursor-zoom-in text-left touch-manipulation"
          :aria-label="`Open ${row.item.title}`"
          @click="open(row.item)"
          @mouseenter="row.item.video ? playHover($event) : undefined"
          @mouseleave="row.item.video ? stopHover($event) : undefined"
          @focus="row.item.video ? playHover($event) : undefined"
          @blur="row.item.video ? stopHover($event) : undefined"
        >
          <div
            class="overflow-hidden rounded-lg bg-white ring-1 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.45)] transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.5)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0"
            :class="isDark ? 'ring-white/10' : 'ring-black/[0.08]'"
          >
            <video
              v-if="row.item.video"
              class="block h-auto w-full origin-top transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              :poster="row.item.image"
              :aria-label="row.item.imageAlt || row.item.title"
              muted
              loop
              playsinline
              preload="metadata"
            >
              <source :src="row.item.video" type="video/mp4" />
            </video>
            <img
              v-else
              :src="row.item.image!"
              :alt="row.item.imageAlt || row.item.title"
              class="block h-auto w-full origin-top transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="mt-3 flex items-start justify-between gap-4">
            <div class="min-w-0">
              <p class="m-0 flex items-center gap-1.5 text-[13px] font-medium" :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'">
                <span>{{ row.item.title }}</span>
                <span
                  v-if="row.item.isNew"
                  class="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#e57d9b] px-1.5 py-0.5 text-[9px] leading-none text-[#e57d9b]"
                >
                  <span class="h-1 w-1 rounded-full bg-[#e57d9b] animate-pulse" />
                  New
                </span>
              </p>
              <p class="mt-0.5 mb-0 text-[12px] leading-snug" :class="isDark ? 'text-[#555]' : 'text-[#888]'">{{ row.item.pitch }}</p>
            </div>
            <span class="max-w-[8rem] shrink-0 pt-0.5 text-right text-[11px] leading-snug sm:text-[12px]" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ cardMetaLabel(row.item) }}</span>
          </div>
        </button>
      </li>
      </template>
    </ul>

    <ul
      v-if="listedProducts.length"
      class="list-none p-0 m-0"
      aria-label="More projects"
    >
      <li
        v-for="item in listedProducts"
        :key="item.title"
        data-writing-row
        class="border-b last:border-0"
        :class="isDark ? 'border-[#1e1e1c]' : 'border-[#e8e5de]'"
      >
        <button
          type="button"
          class="flex w-full items-start gap-3 py-[9px] text-left touch-manipulation"
          @click="open(item)"
        >
          <span class="w-[7.25rem] shrink-0 pt-0.5 text-[11px] leading-snug sm:w-[8rem] sm:text-[12px]" :class="isDark ? 'text-[#444]' : 'text-[#aaa]'">{{ item.year }}</span>
          <span class="min-w-0 flex-1">
            <span class="flex min-w-0 items-center gap-1.5">
              <span class="truncate text-[13px] font-medium" :class="isDark ? 'text-[#d8d5ce]' : 'text-[#1a1a1a]'">{{ item.title }}</span>
              <span
                v-if="item.isNew"
                class="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#e57d9b] px-1.5 py-0.5 text-[9px] leading-none text-[#e57d9b]"
              >
                <span class="h-1 w-1 rounded-full bg-[#e57d9b] animate-pulse" />
                New
              </span>
            </span>
            <span class="mt-0.5 block text-[12px] leading-snug" :class="isDark ? 'text-[#555]' : 'text-[#888]'">{{ item.pitch }}</span>
          </span>
        </button>
      </li>
    </ul>

    <Dialog :open="!!openProduct" @update:open="(v) => { if (!v) close() }">
      <DialogContent v-if="openProduct" :is-dark="isDark" @close="close">
        <div
          class="relative w-[min(94vw,880px)] max-h-[min(90vh,900px)] overflow-y-auto rounded-2xl shadow-2xl"
          :class="isDark ? 'bg-[#1a1a18] ring-1 ring-white/10' : 'bg-white ring-1 ring-black/10'"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="'product-title-' + openProduct.title"
        >
          <div
            class="sticky top-0 z-[1] flex items-center justify-between gap-3 border-b px-5 py-3.5"
            :class="isDark ? 'border-[#2a2a28] bg-[#1a1a18]' : 'border-[#e8eaed] bg-white'"
          >
            <div class="min-w-0 pr-2">
              <p class="m-0 text-[11px]" :class="isDark ? 'text-[#555]' : 'text-[#888]'">
                <template v-if="openProduct.productGroup">
                  {{ openProduct.productGroup.label }} · {{ openProduct.productGroup.period }}
                  <span v-if="openProduct.surfaceLabel"> · {{ openProduct.surfaceLabel }}</span>
                </template>
                <template v-else>{{ openProduct.year }}</template>
              </p>
              <h3
                :id="'product-title-' + openProduct.title"
                class="m-0 mt-0.5 text-[16px] font-semibold leading-snug"
                :class="isDark ? 'text-[#e8e5de]' : 'text-[#1a1a1a]'"
              >{{ openProduct.title }}</h3>
            </div>
            <div class="flex shrink-0 items-center gap-1">
              <a
                v-if="openProduct.url"
                :href="openProduct.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors"
                :class="isDark ? 'text-[#e8e5de] hover:bg-white/10' : 'text-[#1a1a1a] hover:bg-black/5'"
              >
                {{ openProduct.urlLabel || 'Open product' }}
                <PhArrowSquareOut :size="14" weight="bold" aria-hidden="true" />
              </a>
              <button
                type="button"
                class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                :class="isDark ? 'text-[#aaa] hover:bg-white/10 hover:text-[#e8e5de]' : 'text-[#555] hover:bg-black/5 hover:text-[#1a1a1a]'"
                aria-label="Close"
                @click="close"
              >
                <PhX :size="18" weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div v-if="openProduct.video || openProduct.image" class="px-4 pt-4 sm:px-5">
            <div
              class="overflow-hidden rounded-lg bg-white ring-1"
              :class="isDark ? 'ring-white/10' : 'ring-black/[0.08]'"
            >
              <video
                v-if="openProduct.video"
                ref="modalVideo"
                class="block h-auto w-full"
                :poster="openProduct.image"
                :aria-label="openProduct.imageAlt || openProduct.title"
                controls
                playsinline
                loop
                preload="auto"
              >
                <source :src="openProduct.video" type="video/mp4" />
              </video>
              <img
                v-else
                :src="openProduct.image!"
                :alt="openProduct.imageAlt || openProduct.title"
                class="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div class="space-y-3 px-5 py-4">
            <p
              class="m-0 text-[13px] leading-relaxed"
              :class="isDark ? 'text-[#aaa]' : 'text-[#444]'"
            >{{ openProduct.pitch }}</p>
            <p
              v-for="(paragraph, i) in openProduct.detail"
              :key="i"
              class="m-0 text-[13px] leading-relaxed"
              :class="isDark ? 'text-[#888]' : 'text-[#555]'"
            >{{ paragraph }}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </section>
</template>
