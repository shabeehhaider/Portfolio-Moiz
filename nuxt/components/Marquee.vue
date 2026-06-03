<template>
  <div class="marquee" :class="{ border }" aria-hidden="true">
    <div class="marquee-track" :style="{ animationDuration: duration + 's' }">
      <template v-for="rep in 2" :key="rep">
        <span v-for="(item, i) in items" :key="rep + '-' + i" class="item font-display">
          {{ item }}<span class="sep">✦</span>
        </span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: readonly string[] | string[]
  speed?: number
  border?: boolean
}>(), { speed: 38, border: true })

const duration = computed(() => Math.max(12, props.items.length * (60 / props.speed) * 4))
</script>

<style scoped>
.marquee { overflow: hidden; padding: 26px 0; }
.marquee.border { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.marquee-track {
  display: flex; align-items: center; width: max-content;
  animation: scroll linear infinite;
}
.item {
  display: inline-flex; align-items: center;
  font-size: clamp(28px, 4vw, 56px); line-height: 1;
  color: var(--bone); letter-spacing: -0.01em; white-space: nowrap;
}
.item:nth-child(even) { font-style: italic; color: var(--bone-3); }
.sep { color: var(--amber); font-size: .5em; margin: 0 .55em; transform: translateY(-.1em); }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
.marquee:hover .marquee-track { animation-play-state: paused; }
</style>
