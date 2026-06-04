<template>
  <ClientOnly>
    <Transition name="loader">
      <div v-if="visible" class="loader" aria-hidden="true">
        <div class="loader-inner">
          <div class="bars">
            <span v-for="n in 6" :key="n" :style="{ animationDelay: `${n * 0.09}s` }" />
          </div>
          <div class="brand font-display">Moiz Zaidi</div>
          <div class="meta ts">
            <span>Loading reel</span>
            <span class="count">{{ pct }}%</span>
          </div>
          <div class="track"><span class="fill" :style="{ width: pct + '%' }" /></div>
        </div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
const visible = ref(true)
const pct = ref(0)

onMounted(() => {
  // Only play the intro on the very first visit of a session.
  if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem('mz-intro')) {
    visible.value = false
    return
  }
  let raf = 0
  const start = performance.now()
  const DURATION = 1500

  const step = (t: number) => {
    const p = Math.min(1, (t - start) / DURATION)
    // ease-out
    pct.value = Math.round((1 - Math.pow(1 - p, 3)) * 100)
    if (p < 1) {
      raf = requestAnimationFrame(step)
    } else {
      sessionStorage.setItem('mz-intro', '1')
      setTimeout(() => (visible.value = false), 260)
    }
  }
  raf = requestAnimationFrame(step)
  onBeforeUnmount(() => cancelAnimationFrame(raf))
})
</script>

<style scoped>
.loader {
  position: fixed; inset: 0; z-index: 1000;
  display: grid; place-items: center;
  background: var(--ink-0);
}
.loader-inner {
  width: min(420px, 78vw);
  display: flex; flex-direction: column; align-items: center; gap: 22px;
  text-align: center;
}
.bars { display: flex; gap: 5px; height: 42px; align-items: flex-end; }
.bars span {
  width: 4px; height: 100%;
  background: var(--amber);
  transform-origin: bottom;
  animation: bar 1s var(--ease) infinite alternate;
  opacity: .85;
}
@keyframes bar { from { transform: scaleY(.18); } to { transform: scaleY(1); } }

.brand {
  font-size: clamp(34px, 7vw, 54px);
  letter-spacing: -0.01em;
  color: var(--bone);
}
.meta { display: flex; gap: 14px; align-items: center; }
.meta .count { color: var(--amber); }

.track {
  width: 100%; height: 1px; background: var(--line);
  overflow: hidden;
}
.fill { display: block; height: 100%; background: var(--bone); transition: width .12s linear; }

.loader-leave-active { transition: opacity .5s var(--ease), transform .6s var(--ease); }
.loader-leave-to { opacity: 0; transform: scale(1.03); }
</style>
