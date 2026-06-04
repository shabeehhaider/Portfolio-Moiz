<template>
  <div class="bm" aria-label="Brands and agencies I've worked with">
    <div class="bm-track" :style="{ animationDuration: duration + 's' }">
      <template v-for="rep in 2" :key="rep">
        <div v-for="(b, i) in brands" :key="rep + '-' + i" class="logo" :title="b.name">
          <img :src="b.logo" :alt="b.name" loading="lazy" decoding="async">
        </div>
      </template>
    </div>
    <div class="fade left" /><div class="fade right" />
  </div>
</template>

<script setup lang="ts">
import { brands } from '~/data/clients'
const props = withDefaults(defineProps<{ speed?: number }>(), { speed: 60 })
const duration = computed(() => Math.max(40, brands.length * (120 / props.speed)))
</script>

<style scoped>
.bm { position: relative; overflow: hidden; padding: 8px 0; }
.bm-track { display: flex; align-items: center; gap: 22px; width: max-content; animation: roll linear infinite; }
/* Logos sit on a light "bone" tile so transparent PNGs *and* JPEGs with white
   or coloured backgrounds all read correctly — no colour inversion needed. */
.logo {
  flex-shrink: 0;
  width: 150px; height: 70px;
  display: flex; align-items: center; justify-content: center;
  padding: 14px 18px;
  background: rgba(241, 236, 228, 0.92);
  border-radius: 6px;
  transition: background .35s var(--ease), transform .4s var(--ease);
}
.logo img { max-width: 100%; max-height: 100%; width: auto; object-fit: contain; }
.logo:hover { background: var(--bone); transform: translateY(-3px); }
@keyframes roll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.bm:hover .bm-track { animation-play-state: paused; }

.fade { position: absolute; top: 0; bottom: 0; width: 12%; pointer-events: none; z-index: 2; }
.fade.left { left: 0; background: linear-gradient(90deg, var(--ink-1), transparent); }
.fade.right { right: 0; background: linear-gradient(270deg, var(--ink-1), transparent); }
</style>
