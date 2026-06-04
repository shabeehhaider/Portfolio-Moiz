<template>
  <header class="nav" :class="{ scrolled, open: menuOpen }">
    <div class="nav-inner">
      <NuxtLink to="/" class="brand" @click="menuOpen = false">
        <span class="mark font-display">MZ</span>
        <span class="full">
          <span class="name">Moiz Zaidi</span>
          <span class="role ts">Director</span>
        </span>
      </NuxtLink>

      <nav class="links" :class="{ show: menuOpen }">
        <NuxtLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="link"
          @click="menuOpen = false">
          <span class="idx">{{ l.idx }}</span>
          <span class="label">{{ l.label }}</span>
        </NuxtLink>
        <NuxtLink to="/contact" class="link cta" @click="menuOpen = false">
          <span class="label">Start a project</span><span>→</span>
        </NuxtLink>
      </nav>

      <div class="nav-right">
        <span class="clock ts">{{ clock }}</span>
        <button class="burger" :aria-expanded="menuOpen" aria-label="Menu" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// useKarachiClock is auto-imported from ~/composables/useTimecode
const clock = useKarachiClock()

const links = [
  { to: '/work', label: 'Work', idx: '01' },
  { to: '/about', label: 'About', idx: '02' },
  { to: '/contact', label: 'Contact', idx: '03' }
]

const scrolled = ref(false)
const menuOpen = ref(false)
const route = useRoute()

function onScroll() {
  scrolled.value = window.scrollY > 24
}
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// close the mobile menu on route change
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<style scoped>
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 80;
  transition: background .5s var(--ease), backdrop-filter .5s var(--ease), border-color .5s var(--ease);
  border-bottom: 1px solid transparent;
}
.nav.scrolled {
  background: color-mix(in oklab, var(--ink-1) 78%, transparent);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--line-2);
}
.nav-inner {
  height: var(--nav-h);
  padding: 0 var(--pad-x);
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
}

.brand { display: flex; align-items: center; gap: 12px; }
.brand .mark {
  font-size: 26px; line-height: 1; color: var(--amber);
  border: 1px solid var(--line); border-radius: 8px;
  width: 40px; height: 40px; display: grid; place-items: center;
  transition: border-color .4s var(--ease), color .4s var(--ease);
}
.brand:hover .mark { border-color: var(--amber); }
.brand .full { display: flex; flex-direction: column; gap: 2px; }
.brand .name { font-size: 15px; font-weight: 600; letter-spacing: -0.01em; }
.brand .role { font-size: 9px; }

.links { display: flex; align-items: center; gap: 6px; }
.link {
  position: relative;
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 16px; border-radius: 999px;
  font-size: 13px; color: var(--bone-2);
  transition: color .35s var(--ease), background .35s var(--ease);
}
.link .idx { font-family: var(--ff-mono); font-size: 9px; color: var(--bone-3); }
.link:hover { color: var(--bone); }
.link.router-link-active:not(.cta) { color: var(--bone); }
.link.router-link-active:not(.cta) .idx { color: var(--amber); }
.link.cta {
  margin-left: 8px; border: 1px solid var(--line);
  font-family: var(--ff-mono); font-size: 11px; letter-spacing: .12em; text-transform: uppercase;
  color: var(--bone);
}
.link.cta:hover { background: var(--bone); color: var(--ink-0); }
.link.cta span:last-child { transition: transform .35s var(--ease); }
.link.cta:hover span:last-child { transform: translateX(4px); }

.nav-right { display: flex; align-items: center; gap: 18px; }
.clock { font-size: 10px; }

.burger { display: none; width: 28px; height: 18px; position: relative; }
.burger span {
  position: absolute; left: 0; width: 100%; height: 1.5px; background: var(--bone);
  transition: transform .4s var(--ease), opacity .3s var(--ease);
}
.burger span:nth-child(1) { top: 0; }
.burger span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.burger span:nth-child(3) { bottom: 0; }

/* ───── mobile ───── */
@media (max-width: 820px) {
  .clock { display: none; }
  .burger { display: block; }
  .nav.open .burger span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
  .nav.open .burger span:nth-child(2) { opacity: 0; }
  .nav.open .burger span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

  .links {
    position: fixed; inset: var(--nav-h) 0 auto 0;
    flex-direction: column; align-items: stretch; gap: 0;
    background: color-mix(in oklab, var(--ink-1) 96%, transparent);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid var(--line);
    padding: 12px var(--pad-x) 28px;
    transform: translateY(-12px); opacity: 0; pointer-events: none;
    transition: transform .4s var(--ease), opacity .4s var(--ease);
  }
  .links.show { transform: none; opacity: 1; pointer-events: auto; }
  .link {
    padding: 18px 4px; border-radius: 0; border-bottom: 1px solid var(--line-2);
    font-size: 22px; font-family: var(--ff-display);
  }
  .link .idx { font-size: 11px; }
  .link.cta { margin-left: 0; margin-top: 18px; justify-content: center; border-radius: 999px; font-family: var(--ff-mono); font-size: 12px; }
}
</style>
