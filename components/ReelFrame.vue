<template>
  <div class="reel-wrap reveal">
    <button class="reel" @click="open = true" aria-label="Play showreel">
      <div class="reel-poster" :style="{ backgroundImage: `url(${poster})` }" />
      <div class="reel-scrim" />
      <div class="reel-grid" />

      <div class="reel-top ts">
        <span class="rec"><span class="dot" /> SHOWREEL</span>
        <span>{{ runtime }}</span>
      </div>

      <div class="reel-play">
        <span class="ring" /><span class="ring r2" />
        <span class="tri" />
      </div>

      <div class="reel-foot">
        <span class="font-display label">Play the reel</span>
        <span class="ts hint">Sound ↑ recommended</span>
      </div>
    </button>

    <VideoModal v-model="open" :video="video" :src="embed" title="Moiz Zaidi — Showreel" subtitle="Selected work · 2020—2026" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  poster?: string
  video?: string   // local mp4 — plays in the modal. Falls back to `embed` if empty.
  embed?: string
  runtime?: string
}>(), {
  poster: '/profile/hero.jpeg',
  video: '/videos/showreel.mp4',
  embed: 'https://player.vimeo.com/video/954954489',
  runtime: '02:38'
})
const open = ref(false)
const { poster, video, embed, runtime } = toRefs(props)
</script>

<style scoped>
.reel-wrap { max-width: 1200px; margin: 0 auto; }
.reel {
  position: relative; display: block; width: 100%; aspect-ratio: 21/9;
  overflow: hidden; border-radius: 6px; border: 1px solid var(--line);
  cursor: pointer; isolation: isolate; background: var(--ink-2);
}
@media (max-width: 700px) { .reel { aspect-ratio: 16/10; } }
.reel-poster { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform 1.4s var(--ease-slow), filter .6s var(--ease); filter: brightness(.6); }
.reel:hover .reel-poster { transform: scale(1.05); filter: brightness(.5); }
.reel-scrim { position: absolute; inset: 0; background: radial-gradient(60% 60% at 50% 50%, transparent, rgba(0,0,0,.55)); }
.reel-grid { position: absolute; inset: 0; background: repeating-linear-gradient(90deg, rgba(255,255,255,.03) 0 1px, transparent 1px 64px); opacity: .5; }

.reel-top { position: absolute; top: 20px; left: 24px; right: 24px; display: flex; justify-content: space-between; color: var(--bone-2); }
.reel-top .rec { display: flex; align-items: center; gap: 8px; }
.reel-top .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--red); box-shadow: 0 0 10px var(--red); animation: pulse 1.6s var(--ease) infinite; }

.reel-play { position: absolute; inset: 0; margin: auto; width: 96px; height: 96px; display: grid; place-items: center; }
.reel-play .ring { position: absolute; inset: 0; border: 1px solid var(--bone); border-radius: 50%; opacity: .5; }
.reel-play .ring.r2 { animation: pulseRing 2.6s var(--ease) infinite; }
.reel:hover .reel-play .ring:not(.r2) { background: var(--amber); border-color: var(--amber); }
.reel-play .tri { position: relative; width: 0; height: 0; margin-left: 6px; border-left: 22px solid var(--bone); border-top: 13px solid transparent; border-bottom: 13px solid transparent; transition: border-left-color .4s var(--ease); }
.reel:hover .reel-play .tri { border-left-color: var(--ink-0); }

.reel-foot { position: absolute; left: 24px; bottom: 22px; display: flex; flex-direction: column; gap: 6px; }
.reel-foot .label { font-size: clamp(24px, 3vw, 40px); color: var(--bone); }
.reel-foot .hint { color: var(--bone-3); }
</style>
