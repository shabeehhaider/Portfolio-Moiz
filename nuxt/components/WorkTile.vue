<template>
  <NuxtLink :to="`/work/${project.slug}`" class="tile reveal" :class="sizeClass">
    <Skeleton v-show="!posterLoaded" class="poster-skeleton" />
    <img
      v-if="project.poster"
      :src="project.poster"
      :alt="`${project.title} ${project.titleItalic ?? ''}`"
      loading="lazy"
      decoding="async"
      class="poster"
      :class="{ ready: posterLoaded }"
      @load="posterLoaded = true"
      @error="posterLoaded = true">
    <video
      v-if="project.videoPreview"
      ref="video"
      class="preview"
      muted
      playsinline
      loop
      preload="none"
      :poster="project.poster"
      @pointerenter="playPreview"
      @pointerleave="pausePreview">
      <source :src="project.videoPreview" type="video/mp4">
    </video>

    <div class="scrim" />
    <div class="sweep" />

    <div class="num"><span class="dot" /> {{ project.index }} · {{ project.category.toUpperCase() }}</div>
    <div class="timecode">▶ 00:00 / {{ project.runtime }}</div>

    <div class="meta">
      <div>
        <h3>
          <template v-if="project.title">{{ project.title }} </template>
          <span v-if="project.titleItalic" class="it">{{ project.titleItalic }}</span>
        </h3>
        <div class="row">
          <span>{{ project.category }}</span>
          <template v-if="project.director"><span>·</span><span>Dir. {{ project.director }}</span></template>
          <template v-else-if="project.client"><span>·</span><span>{{ project.client }}</span></template>
          <span>·</span><span>{{ project.year }}</span>
        </div>
      </div>
      <div class="play">VIEW</div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{ project: Project }>()
const sizeClass = computed(() => props.project.size)
const video = ref<HTMLVideoElement | null>(null)
const posterLoaded = ref(false)

function playPreview() {
  const v = video.value
  if (!v) return
  v.currentTime = 0
  v.play().catch(() => {})
}
function pausePreview() {
  const v = video.value
  if (!v) return
  v.pause()
  v.currentTime = 0
}
</script>

<style scoped>
.tile {
  position: relative; aspect-ratio: 16/10; overflow: hidden;
  cursor: pointer; isolation: isolate;
  background: var(--ink-2);
  grid-column: span 6;
  display: block;
  border-radius: 4px;
}
.tile.tall { grid-column: span 6; aspect-ratio: 4/5; }
.tile.wide { grid-column: span 12; aspect-ratio: 21/9; }
@media (max-width: 860px) {
  .tile, .tile.tall, .tile.wide { grid-column: span 12; aspect-ratio: 16/10; }
}

.poster-skeleton { position: absolute; inset: 0; width: 100%; height: 100%; }
.poster, .preview {
  position: absolute; inset: 0;
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 1.2s var(--ease-slow), filter .8s var(--ease), opacity .5s var(--ease);
}
.poster { opacity: 0; }
.poster.ready { opacity: 1; }
.preview { opacity: 0; }
.tile:hover .poster.ready { transform: scale(1.04); filter: brightness(.95) contrast(1.06); }
.tile:hover .preview { opacity: 1; }

.scrim {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(180deg, rgba(0,0,0,.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,.7) 100%);
}
.sweep {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(110deg, transparent 30%, rgba(217,142,75,.10) 50%, transparent 70%);
  transform: translateX(-100%); transition: transform 1.2s var(--ease-slow);
}
.tile:hover .sweep { transform: translateX(100%); }

.meta {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 22px 24px;
  display: flex; justify-content: space-between; align-items: flex-end; gap: 16px;
  background: linear-gradient(to top, rgba(0,0,0,.85), transparent);
  transform: translateY(8px); opacity: .95;
  transition: transform .6s var(--ease), opacity .6s var(--ease);
}
.tile:hover .meta { transform: translateY(0); }
.meta h3 {
  font-family: var(--ff-display); font-weight: 400;
  font-size: clamp(24px, 2.6vw, 38px); line-height: .95; letter-spacing: -0.01em;
}
.meta .it { font-style: italic; }
.meta .row {
  display: flex; gap: 14px; flex-wrap: wrap;
  font-family: var(--ff-mono); font-size: 11px;
  letter-spacing: .12em; text-transform: uppercase; color: var(--bone-3); margin-top: 10px;
}
.num {
  position: absolute; top: 18px; left: 22px;
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .16em; color: var(--bone-2);
  display: flex; align-items: center; gap: 10px; text-shadow: 0 1px 4px rgba(0,0,0,.6);
}
.num .dot { width: 6px; height: 6px; background: var(--amber); border-radius: 50%; }
.play {
  width: 44px; height: 44px; border: 1px solid var(--bone-2); border-radius: 50%;
  display: grid; place-items: center; color: var(--bone-2);
  font-family: var(--ff-mono); font-size: 10px; letter-spacing: .1em; flex-shrink: 0;
  transition: background .4s var(--ease), color .4s var(--ease), border-color .4s var(--ease);
}
.tile:hover .play { background: var(--amber); color: var(--ink-0); border-color: var(--amber); }
.timecode {
  position: absolute; top: 18px; right: 22px;
  font-family: var(--ff-mono); font-size: 11px; color: var(--amber); opacity: 0;
  transition: opacity .3s var(--ease); text-shadow: 0 1px 4px rgba(0,0,0,.6);
}
.tile:hover .timecode { opacity: 1; }
</style>
