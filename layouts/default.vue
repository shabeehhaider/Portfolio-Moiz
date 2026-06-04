<template>
  <div class="shell">
    <NavBar />
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Wires the global IntersectionObserver that adds `.in` to `.reveal` elements.
useReveal()
</script>

<style scoped>
.shell { display: flex; flex-direction: column; min-height: 100vh; }
main { flex: 1; }
</style>
