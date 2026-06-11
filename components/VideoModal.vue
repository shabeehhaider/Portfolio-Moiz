<template>
  <Teleport to="body">
    <Transition name="wipe">
      <div v-if="modelValue && (src || video)" class="modal" @click="close" role="dialog" aria-modal="true">
        <div class="modal-inner" @click.stop>
          <button class="close" @click="close" aria-label="Close player">×</button>
          <div class="player">
            <!-- local mp4 (e.g. the showreel) -->
            <video
              v-if="video"
              :src="video"
              :title="title"
              controls
              autoplay
              playsinline
              preload="metadata" />
            <!-- otherwise a Vimeo / YouTube embed -->
            <iframe
              v-else
              :src="iframeSrc"
              :title="title"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen />
          </div>
          <div v-if="title || subtitle" class="meta">
            <span v-if="title" class="title">{{ title }}</span>
            <span v-if="subtitle" class="sub">{{ subtitle }}</span>
            <span class="hint">Esc to close</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  src: { type: String, default: '' },     // Vimeo / YouTube embed URL
  video: { type: String, default: '' },   // local mp4 path (takes priority over src)
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' }
})
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()

// Force autoplay=1 on Vimeo / YouTube URLs.
const iframeSrc = computed(() => {
  if (!props.src) return ''
  const u = props.src
  const sep = u.includes('?') ? '&' : '?'
  return /autoplay=1/.test(u) ? u : `${u}${sep}autoplay=1`
})

function close() { emit('update:modelValue', false) }

function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) close()
}

watch(() => props.modelValue, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => document.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  document.removeEventListener('keydown', onKey)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.modal {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(0,0,0,.94);
  display: grid; place-items: center;
  padding: 24px;
  backdrop-filter: blur(8px);
}
.modal-inner {
  position: relative;
  width: 100%; max-width: 1280px;
}
.close {
  position: absolute; top: -48px; right: 0;
  width: 40px; height: 40px; border-radius: 50%;
  background: rgba(255,255,255,.08);
  border: 1px solid rgba(255,255,255,.18);
  color: var(--bone); font-size: 22px; line-height: 1;
}
.close:hover { background: var(--amber); color: var(--ink-0); border-color: var(--amber); }

.player {
  width: 100%; aspect-ratio: 16/9;
  border-radius: 6px; overflow: hidden;
  background: #000;
  border: 1px solid var(--line);
}
.player iframe, .player video { width: 100%; height: 100%; border: 0; display: block; object-fit: contain; background: #000; }

.meta {
  display: flex; align-items: center; gap: 16px;
  margin-top: 18px;
  font-family: var(--ff-mono); font-size: 11px;
  letter-spacing: .14em; text-transform: uppercase;
  color: var(--bone-3);
}
.meta .title { color: var(--bone); }
.meta .sub { color: var(--bone-2); }
.meta .hint { margin-left: auto; }
</style>
