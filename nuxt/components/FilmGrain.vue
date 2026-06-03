<template>
  <ClientOnly>
    <div class="grain" aria-hidden="true" />
    <div class="scanlines" aria-hidden="true" />
    <div class="vignette" aria-hidden="true" />
  </ClientOnly>
</template>

<script setup lang="ts">
// Pure decoration — the styles live in assets/css/main.css so the error page can
// reuse the same .grain/.scanlines/.vignette classes without this component.
</script>
