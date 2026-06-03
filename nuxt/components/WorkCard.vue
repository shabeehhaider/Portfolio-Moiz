<template>
  <article class="card reveal" :style="{ transitionDelay: `${Math.min(index * 0.04, 0.4)}s` }">
    <button class="media" @click="$emit('play', item)" :aria-label="`Play ${item.title}`">
      <Skeleton v-show="!loaded" class="media-skel" />
      <img
        v-if="thumb"
        :src="thumb"
        :alt="item.title"
        loading="lazy"
        decoding="async"
        class="thumb"
        :class="{ ready: loaded }"
        @load="loaded = true"
        @error="loaded = true">
      <div class="scrim" />
      <div class="badge ts">{{ item.category }}</div>
      <div class="dur ts">{{ duration }}</div>
      <div class="play"><span class="tri" /></div>
    </button>

    <div class="foot">
      <h3 class="title">{{ item.title }}</h3>
      <span class="yr ts">{{ year }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { WorkItem } from '~/composables/useWork'

const props = defineProps<{ item: WorkItem; index: number }>()
defineEmits<{ (e: 'play', item: WorkItem): void }>()

const loaded = ref(false)
const thumb = computed(() => props.item.thumbnail || props.item.thumbnailSmall)

const duration = computed(() => {
  const s = props.item.duration
  if (!s || !Number.isFinite(s)) return '—'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
})
const year = computed(() => {
  const d = props.item.createdAt ? new Date(props.item.createdAt) : null
  return d && !isNaN(d.getTime()) ? d.getFullYear() : ''
})
</script>

<style scoped>
.card { display: flex; flex-direction: column; background: var(--ink-2); border-radius: 4px; overflow: hidden; }
.media {
  position: relative; display: block; width: 100%; aspect-ratio: 16/9;
  overflow: hidden; background: var(--ink-3); cursor: pointer; isolation: isolate;
}
.media-skel { position: absolute; inset: 0; }
.thumb {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0;
  transition: transform 1s var(--ease-slow), opacity .5s var(--ease), filter .5s var(--ease);
}
.thumb.ready { opacity: 1; }
.card:hover .thumb.ready { transform: scale(1.05); filter: brightness(.85); }

.scrim { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,.4), transparent 40%, transparent 70%, rgba(0,0,0,.5)); pointer-events: none; }
.badge { position: absolute; top: 12px; left: 14px; color: var(--bone-2); text-shadow: 0 1px 3px rgba(0,0,0,.7); }
.dur { position: absolute; bottom: 12px; right: 14px; color: var(--bone); text-shadow: 0 1px 3px rgba(0,0,0,.7); }

.play {
  position: absolute; inset: 0; margin: auto; width: 58px; height: 58px;
  border: 1px solid rgba(241,236,228,.5); border-radius: 50%;
  display: grid; place-items: center;
  background: rgba(10,10,13,.35); backdrop-filter: blur(2px);
  opacity: 0; transform: scale(.85);
  transition: opacity .4s var(--ease), transform .4s var(--ease), background .4s var(--ease), border-color .4s var(--ease);
}
.card:hover .play { opacity: 1; transform: scale(1); }
.card:hover .play { background: var(--amber); border-color: var(--amber); }
.tri {
  width: 0; height: 0; margin-left: 4px;
  border-left: 13px solid var(--bone);
  border-top: 8px solid transparent; border-bottom: 8px solid transparent;
  transition: border-left-color .4s var(--ease);
}
.card:hover .tri { border-left-color: var(--ink-0); }

.foot {
  display: flex; align-items: center; justify-content: space-between; gap: 14px;
  padding: 14px 18px 16px; border-top: 1px solid var(--line-2);
}
.title {
  font-family: var(--ff-display); font-weight: 400; font-size: 19px; line-height: 1.15;
  color: var(--bone); display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden;
}
.yr { flex-shrink: 0; }
</style>
