<template>
  <div class="bts">
    <div class="bts-track" :style="{ animationDuration: duration + 's' }">
      <template v-for="rep in 2" :key="rep">
        <figure v-for="(src, i) in images" :key="rep + '-' + i" class="frame">
          <img :src="src" :alt="`Behind the scenes ${i + 1}`" loading="lazy" decoding="async">
          <figcaption class="ts">BTS · {{ String(i + 1).padStart(2, '0') }}</figcaption>
        </figure>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ images: string[]; speed?: number }>(), { speed: 50 })
const duration = computed(() => Math.max(40, props.images.length * (160 / props.speed)))
</script>

<style scoped>
.bts { overflow: hidden; -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent); }
.bts-track { display: flex; gap: 18px; width: max-content; animation: slide linear infinite; }
.frame {
  position: relative; flex-shrink: 0;
  width: clamp(240px, 28vw, 420px); aspect-ratio: 3/2; overflow: hidden; border-radius: 4px;
  background: var(--ink-2);
}
.frame img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(.3) brightness(.9); transition: filter .5s var(--ease), transform 1s var(--ease-slow); }
.frame:hover img { filter: grayscale(0) brightness(1); transform: scale(1.05); }
.frame figcaption {
  position: absolute; left: 12px; bottom: 12px; color: var(--bone);
  text-shadow: 0 1px 4px rgba(0,0,0,.7);
}
@keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.bts:hover .bts-track { animation-play-state: paused; }
</style>
