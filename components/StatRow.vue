<template>
  <div ref="root" class="stats">
    <div v-for="(s, i) in stats" :key="s.label" class="stat reveal" :class="`delay-${i + 1}`">
      <span class="val font-display">{{ display[i] }}<span class="suffix">{{ s.suffix }}</span></span>
      <span class="label ts">{{ s.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { profile } from '~/data/profile'

const stats = [
  { target: parseInt(profile.yearsExperience), suffix: '+', label: 'Years directing' },
  { target: parseInt(profile.projectsCount), suffix: '+', label: 'Films delivered' },
  { target: parseInt(profile.brandsCount), suffix: '+', label: 'Brands & agencies' },
  { target: parseInt(profile.countriesCount), suffix: '', label: 'Countries shot in' }
]

const root = ref<HTMLElement | null>(null)
const display = ref(stats.map(() => 0))

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined' || !root.value) {
    display.value = stats.map(s => s.target)
    return
  }
  const io = new IntersectionObserver((entries) => {
    if (!entries[0]?.isIntersecting) return
    io.disconnect()
    const start = performance.now()
    const DUR = 1200
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DUR)
      const e = 1 - Math.pow(1 - p, 3)
      display.value = stats.map(s => Math.round(s.target * e))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.4 })
  io.observe(root.value)
  onBeforeUnmount(() => io.disconnect())
})
</script>

<style scoped>
.stats {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
  border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  /* vertical only — horizontal gutter comes from the parent (.section pad / .pad-x),
     so a shorthand here won't zero it out */
  padding-top: 44px; padding-bottom: 44px;
}
@media (max-width: 760px) { .stats { grid-template-columns: repeat(2, 1fr); gap: 36px 24px; } }
.stat { display: flex; flex-direction: column; gap: 10px; }
.val { font-size: clamp(44px, 6vw, 84px); line-height: 1; color: var(--bone); letter-spacing: -0.02em; }
.suffix { color: var(--amber); }
.label { color: var(--bone-3); }
</style>
