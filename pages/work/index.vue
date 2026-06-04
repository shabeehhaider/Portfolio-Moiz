<template>
  <div class="page">
    <section class="page-hero pad-x">
      <SectionHead
        num="—"
        eyebrow="The Archive · Live from Vimeo"
        title="A decade"
        italic="of films."
        sub="Commercials, music videos, brand films, the first Netflix Original shot in Pakistan, and the long tail in between — streamed straight from my Vimeo, newest first." />

      <div class="meta-row reveal">
        <div class="filters" role="tablist" aria-label="Filter by category">
          <button
            v-for="c in categories"
            :key="c"
            class="chip"
            :class="{ on: activeCategory === c }"
            :aria-selected="activeCategory === c"
            role="tab"
            @click="setCategory(c)">
            {{ c }}
            <span class="chip-count">{{ countFor(c) }}</span>
          </button>
        </div>
        <div class="stats">
          <span class="ts">{{ filtered.length }} films · showing {{ visible.length }}</span>
          <button v-if="error" class="ts retry" @click="refresh()">↻ Retry</button>
        </div>
      </div>
    </section>

    <section class="grid-section pad-x">
      <!-- Pending: skeleton grid -->
      <div v-if="pending && !visible.length" class="grid" aria-busy="true">
        <div v-for="i in 9" :key="i" class="skel-card">
          <Skeleton class="skel-media" />
          <div class="skel-foot">
            <Skeleton width="60%" height="18px" />
            <Skeleton width="40px" height="10px" />
          </div>
        </div>
      </div>

      <!-- Error fallback -->
      <div v-else-if="error && !visible.length" class="empty">
        <p>Couldn’t reach Vimeo. The archive will reappear once it’s back.</p>
        <button class="btn btn-ghost" @click="refresh()"><span>Try again</span><span>→</span></button>
      </div>

      <!-- Empty filter result -->
      <div v-else-if="!filtered.length" class="empty">
        <p>No films in <em>{{ activeCategory }}</em> just yet.</p>
        <button class="btn btn-ghost" @click="setCategory('All')"><span>Show everything</span><span>→</span></button>
      </div>

      <!-- Loaded grid -->
      <div v-else class="grid">
        <WorkCard
          v-for="(item, i) in visible"
          :key="item.id"
          :item="item"
          :index="i"
          @play="openItem" />
      </div>

      <!-- Progressive load sentinel -->
      <div v-if="hasMore" ref="sentinel" class="sentinel">
        <button class="btn btn-subtle" @click="loadMore"><span>Load more</span><span>↓</span></button>
      </div>
    </section>

    <ContactBlock />

    <VideoModal
      v-model="modalOpen"
      :src="active?.embedUrl ?? ''"
      :title="active?.title ?? ''"
      :subtitle="active ? `${active.category} · ${formatDuration(active.duration)}` : ''" />
  </div>
</template>

<script setup lang="ts">
import type { WorkItem, WorkCategory } from '~/composables/useWork'

const {
  pending, error, refresh,
  categories, activeCategory, setCategory,
  allItems, filtered, visible, hasMore, loadMore
} = useWork()

const countFor = (c: WorkCategory) =>
  c === 'All' ? allItems.value.length : allItems.value.filter(i => i.category === c).length

// ─── Modal player ───
const modalOpen = ref(false)
const active = ref<WorkItem | null>(null)
function openItem(item: WorkItem) {
  active.value = item
  modalOpen.value = true
}
function formatDuration(seconds: number): string {
  if (!seconds || !Number.isFinite(seconds)) return '—'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// ─── IntersectionObserver-driven progressive reveal ───
const sentinel = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null
onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return
  io = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) loadMore()
  }, { rootMargin: '600px 0px' })
  watchEffect((onCleanup) => {
    if (!sentinel.value || !io) return
    io.observe(sentinel.value)
    onCleanup(() => io?.disconnect())
  })
})
onBeforeUnmount(() => io?.disconnect())

useHead({
  title: 'Work · Moiz Zaidi',
  meta: [{
    name: 'description',
    content: 'The full film archive of director Moiz Zaidi — commercials, music videos, brand films and the first Netflix Original shot in Pakistan.'
  }]
})
</script>

<style scoped>
.page-hero { padding-top: calc(var(--nav-h) + 80px); padding-bottom: 48px; }
.grid-section { padding-bottom: 120px; }

.meta-row { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-top: 40px; }
.filters { display: flex; flex-wrap: wrap; gap: 10px; }
.chip {
  display: inline-flex; align-items: center; gap: 8px;
  border: 1px solid var(--line); padding: 10px 18px; border-radius: 999px;
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
  color: var(--bone-2); cursor: pointer; transition: all .35s var(--ease);
}
.chip:hover { border-color: var(--bone-2); color: var(--bone); }
.chip.on { background: var(--bone); color: var(--ink-0); border-color: var(--bone); }
.chip-count { font-size: 10px; color: var(--bone-3); padding: 2px 6px; border: 1px solid var(--line); border-radius: 999px; }
.chip.on .chip-count { background: var(--ink-0); color: var(--bone-2); border-color: transparent; }

.stats { display: flex; align-items: center; gap: 16px; margin-left: auto; }
.retry { color: var(--amber); }

.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
@media (max-width: 1100px) { .grid { grid-template-columns: repeat(2, 1fr); gap: 18px; } }
@media (max-width: 600px) { .grid { grid-template-columns: 1fr; gap: 16px; } }

.skel-card { background: var(--ink-2); display: flex; flex-direction: column; border-radius: 4px; overflow: hidden; }
.skel-media { aspect-ratio: 16/9; }
.skel-foot { padding: 14px 18px 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px; border-top: 1px solid var(--line-2); }

.empty { display: flex; flex-direction: column; align-items: center; gap: 18px; padding: 90px 0; text-align: center; color: var(--bone-2); }
.empty p { font-family: var(--ff-display); font-size: clamp(22px, 2vw, 30px); }
.empty em { font-style: italic; color: var(--amber); }

.sentinel { margin-top: 48px; display: flex; justify-content: center; }
</style>
