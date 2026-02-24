<template>
  <section class="portfolio">
    <div class="page-header">
      <span class="eyebrow">Portfolio</span>
      <h1>My Work</h1>
      <p class="page-sub">A collection of commercial films, brand campaigns, and cinematic projects.</p>
    </div>

    <div v-if="loading" class="loading-state">
      <div class="loader"></div>
      <span>Loading films…</span>
    </div>

    <div v-if="error" class="error-state">{{ error }}</div>

    <div v-if="!loading && allVideos.length === 0" class="empty-state">No films found.</div>

    <div v-if="!loading && allVideos.length > 0" class="work-grid">
      <div
        v-for="(item, index) in allVideos"
        :key="index"
        class="work-card"
        @click="openIframe(item.video)"
      >
        <div class="card-media">
          <img :src="item.image" :alt="item.title" loading="lazy" />
          <div class="card-overlay">
            <div class="play-ring">
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <span class="overlay-title">{{ item.title }}</span>
          </div>
        </div>
        <div class="card-footer">
          <h3>{{ item.title }}</h3>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="iframeVisible" class="modal-backdrop" @click="closeIframe">
        <div class="modal-box" @click.stop>
          <button class="modal-close" @click="closeIframe" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <iframe
            :src="iframeSrc"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getVideos } from '../services/vimeoService';

const allVideos = ref([]);
const loading = ref(true);
const error = ref(null);
const iframeVisible = ref(false);
const iframeSrc = ref('');

const openIframe = (src) => {
  iframeSrc.value = src;
  iframeVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeIframe = () => {
  iframeVisible.value = false;
  iframeSrc.value = '';
  document.body.style.overflow = '';
};

onMounted(async () => {
  try {
    allVideos.value = await getVideos(1, 100);
  } catch {
    error.value = 'Unable to load films. Please try again later.';
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.portfolio {
  background: #080808;
  min-height: 100vh;
  padding: 140px 80px 100px;

  @media (max-width: 1024px) {
    padding: 120px 48px 80px;
  }
  @media (max-width: 768px) {
    padding: 100px 28px 60px;
  }
  @media (max-width: 480px) {
    padding: 90px 20px 50px;
  }
}

.page-header {
  margin-bottom: 60px;
  max-width: 600px;

  .eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent, #1ca973);
    margin-bottom: 14px;
  }

  h1 {
    font-size: clamp(36px, 6vw, 64px);
    font-weight: 800;
    color: #fff;
    letter-spacing: -1.5px;
    line-height: 1.05;
    margin: 0 0 16px;
  }

  .page-sub {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.4);
    font-weight: 300;
    line-height: 1.6;
    margin: 0;
  }
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

.work-card {
  background: #111;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(28, 169, 115, 0.15);

    .card-overlay { opacity: 1; }
    img { transform: scale(1.05); }
  }
}

.card-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #0a0a0a;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    display: block;
  }
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 16px;
}

.play-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--accent, #1ca973);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.overlay-title {
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 4px rgba(0,0,0,0.6);
}

.card-footer {
  padding: 12px 14px 14px;

  h3 {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 0;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
}

.loader {
  width: 30px;
  height: 30px;
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-top-color: var(--accent, #1ca973);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.error-state, .empty-state {
  text-align: center;
  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
  padding: 80px 0;
}

/* Modal */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.93);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(6px);
}

.modal-box {
  position: relative;
  width: 100%;
  max-width: 1100px;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
  }
}

.modal-close {
  position: absolute;
  top: -46px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover { background: rgba(255, 255, 255, 0.2); }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
