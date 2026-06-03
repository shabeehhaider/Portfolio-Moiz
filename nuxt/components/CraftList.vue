<template>
  <ul class="craft">
    <li v-for="c in craft" :key="c.index" class="row reveal">
      <div class="idx font-mono-ui">{{ c.index }}</div>
      <div class="head">
        <h3 class="title font-display">{{ c.title }}</h3>
        <p class="summary">{{ c.summary }}</p>
      </div>
      <div class="detail">
        <p>{{ c.detail }}</p>
        <ul class="deliverables">
          <li v-for="d in c.deliverables" :key="d"><span class="tick">+</span> {{ d }}</li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { craft } from '~/data/craft'
</script>

<style scoped>
.craft { border-top: 1px solid var(--line); }
.row {
  display: grid; grid-template-columns: 80px 1.1fr 1.4fr; gap: 32px;
  padding: 44px 0; border-bottom: 1px solid var(--line);
  transition: background .5s var(--ease);
}
.row:hover { background: linear-gradient(90deg, rgba(217,142,75,.04), transparent 60%); }
.idx { font-size: 13px; color: var(--bone-3); padding-top: 8px; }
.title { font-size: clamp(28px, 3vw, 46px); line-height: 1; color: var(--bone); margin-bottom: 14px; }
.title::first-letter { color: var(--amber); }
.summary { color: var(--bone-2); font-size: 15px; line-height: 1.55; max-width: 38ch; }
.detail p { color: var(--bone-3); font-size: 15px; line-height: 1.6; margin-bottom: 20px; max-width: 50ch; }
.deliverables { display: grid; grid-template-columns: 1fr 1fr; gap: 10px 24px; }
.deliverables li { display: flex; gap: 10px; align-items: baseline; color: var(--bone-2); font-size: 13px; }
.tick { color: var(--amber); font-family: var(--ff-mono); }

@media (max-width: 860px) {
  .row { grid-template-columns: 48px 1fr; }
  .detail { grid-column: 1 / -1; padding-left: 0; }
  .deliverables { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 520px) { .deliverables { grid-template-columns: 1fr; } }
</style>
