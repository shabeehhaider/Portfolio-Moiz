<template>
  <div>
    <!-- Cinematic film overlays — fixed, pointer-events:none, sit above everything -->
    <FilmGrain />

    <!-- Intro / loader animation (client-only, self-dismisses) -->
    <SiteLoader v-if="!noIntro" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global progress / reveal observers are wired in the default layout via useReveal().
// `?nointro` skips the loader (handy for screenshots / audits).
const route = useRoute()
const noIntro = computed(() => route.query.nointro !== undefined)
</script>
