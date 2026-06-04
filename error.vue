<template>
  <div class="err">
    <FilmGrain />
    <div class="err-inner">
      <div class="eyebrow"><span class="bar" /> {{ error.statusCode || 'ERR' }} · Cut</div>
      <h1 class="err-title">
        <span>This frame</span>
        <span class="it">didn't render.</span>
      </h1>
      <p class="err-sub">{{ message }}</p>
      <button class="btn btn-ghost" @click="handleError">
        <span>Back to the reel</span><span>→</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string; message?: string } }>()

const message = computed(() =>
  props.error.statusCode === 404
    ? 'The page you were looking for is no longer on the timeline.'
    : props.error.statusMessage || props.error.message || 'Something went wrong behind the camera.'
)

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.err {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background:
    radial-gradient(60% 50% at 30% 30%, rgba(217, 142, 75, 0.08), transparent 60%),
    linear-gradient(180deg, var(--ink-1), var(--ink-0));
  padding: var(--pad-x);
}
.err-inner {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
}
.err-title {
  font-family: var(--ff-display);
  font-weight: 400;
  font-size: clamp(48px, 9vw, 120px);
  line-height: 0.95;
  letter-spacing: -0.015em;
}
.err-title span {
  display: block;
}
.err-title .it {
  font-style: italic;
  color: var(--amber);
}
.err-sub {
  color: var(--bone-2);
  font-size: 16px;
  line-height: 1.6;
  max-width: 46ch;
}
</style>
