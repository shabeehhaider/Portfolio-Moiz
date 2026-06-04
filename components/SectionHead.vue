<template>
  <header class="sh reveal">
    <div class="sh-top">
      <span v-if="num" class="num font-mono-ui">{{ num }}</span>
      <span v-if="eyebrow" class="eyebrow"><span class="bar" /> {{ eyebrow }}</span>
    </div>

    <h2 class="sh-title">
      <slot name="title">{{ italic && title ? title + ' ' : title }}<span v-if="italic" class="it">{{ italic }}</span></slot>
    </h2>

    <p v-if="sub || $slots.sub" class="sh-sub">
      <slot name="sub">{{ sub }}</slot>
    </p>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  num?: string
  eyebrow?: string
  title?: string
  italic?: string
  sub?: string
}>()
</script>

<style scoped>
.sh { max-width: 1000px; }
.sh-top { display: flex; align-items: center; gap: 22px; margin-bottom: 26px; }
.num {
  font-size: 12px; color: var(--bone-3); letter-spacing: .1em;
  padding: 4px 10px; border: 1px solid var(--line); border-radius: 6px;
}
.sh-title {
  font-family: var(--ff-display); font-weight: 400;
  font-size: clamp(38px, 6.4vw, 92px); line-height: .98;
  letter-spacing: -0.02em; color: var(--bone);
}
.sh-title :deep(.it) { font-style: italic; color: var(--amber); }
.sh-sub {
  margin-top: 24px; max-width: 64ch;
  color: var(--bone-2); font-size: clamp(15px, 1.4vw, 18px); line-height: 1.6;
}
</style>
