<template>
  <div class="skel" :style="{ width, height }" aria-hidden="true" />
</template>

<script setup lang="ts">
withDefaults(defineProps<{ width?: string; height?: string }>(), {
  width: '100%',
  height: '100%'
})
</script>

<style scoped>
.skel {
  background: linear-gradient(100deg, var(--ink-2) 30%, var(--ink-3) 50%, var(--ink-2) 70%);
  background-size: 220% 100%;
  animation: shimmer 1.4s var(--ease) infinite;
}
@keyframes shimmer { from { background-position: 200% 0; } to { background-position: -20% 0; } }
</style>
