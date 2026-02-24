<template>
  <section class="work-section" ref="sectionRef">

    <!-- Header row with custom nav -->
    <div class="section-header" :class="{ 'is-visible': isVisible }">
      <div class="header-left">
        <span class="eyebrow">Portfolio</span>
        <h2>Featured Work</h2>
      </div>
      <div class="header-right">
        <router-link to="/my-work" class="view-all-link">
          View all films
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="15" height="15">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
        <div class="nav-controls">
          <button class="nav-btn prev-btn" @click="goPrev" aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <span class="slide-counter">
            {{ String(activeSlide + 1).padStart(2,'0') }}
            <span class="counter-sep">/</span>
            {{ String(latestVideos.length).padStart(2,'0') }}
          </span>
          <button class="nav-btn next-btn" @click="goNext" aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="loading-state">
      <div class="loader"></div>
      <span>Loading films…</span>
    </div>

    <!-- Slider -->
    <div
      v-if="!loading && latestVideos.length > 0"
      class="slider-wrap"
      :class="{ 'is-visible': isVisible }"
    >
      <Splide ref="splideRef" :options="splideOptions" @splide:moved="onMoved">
        <SplideSlide v-for="(item, index) in latestVideos" :key="index">
          <div class="work-card" @click="openIframe(item.video)">
            <div class="card-media">
              <img :src="item.image" :alt="item.title" loading="lazy" />
              <div class="card-overlay">
                <div class="card-bottom">
                  <h3 class="card-title">{{ item.title }}</h3>
                  <div class="play-pill">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <!-- CTA -->
    <div class="section-cta" :class="{ 'is-visible': isVisible }">
      <router-link to="/my-work" class="btn-cta">
        Explore Full Portfolio
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </router-link>
    </div>

    <!-- Video Modal -->
    <Transition name="fade">
      <div v-if="iframeVisible" class="modal-backdrop" @click="closeIframe">
        <div class="modal-box" @click.stop>
          <button class="modal-close" @click="closeIframe" aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
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
import { ref, onMounted, computed } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';
import { getVideos } from '../services/vimeoService';

const sectionRef = ref(null);
const splideRef  = ref(null);
const isVisible  = ref(false);
const allVideos  = ref([]);
const loading    = ref(true);
const activeSlide = ref(0);
const iframeVisible = ref(false);
const iframeSrc  = ref('');

const latestVideos = computed(() => allVideos.value.slice(0, 6));

const splideOptions = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: '20px',
  pagination: false,
  arrows: false,
  speed: 600,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  breakpoints: {
    1100: { perPage: 2, gap: '16px' },
    768:  { perPage: 2, gap: '14px' },
    540:  { perPage: 1, gap: '12px', padding: { left: '20px', right: '60px' } },
  },
};

const goPrev = () => splideRef.value?.splide.go('<');
const goNext = () => splideRef.value?.splide.go('>');
const onMoved = (splide, newIndex) => { activeSlide.value = newIndex; };

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
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) { isVisible.value = true; observer.disconnect(); } },
    { threshold: 0.08 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);

  try {
    allVideos.value = await getVideos(1, 10);
  } catch { /* silent */ } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
/* ─── Section wrapper ─────────────────────────────────────── */
.work-section {
  background: #080808;
  padding: 100px 0 90px;
  border-top: 1px solid rgba(255,255,255,0.05);

  @media (max-width: 768px) { padding: 70px 0 60px; }
  @media (max-width: 480px) { padding: 56px 0 48px; }
}

/* ─── Header ──────────────────────────────────────────────── */
.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  padding: 0 80px 48px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  margin-bottom: 52px;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;

  &.is-visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 768px) {
    padding: 0 28px 28px;
    margin-bottom: 36px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 0 20px 24px;
    margin-bottom: 28px;
  }
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #1ca973;
}

h2 {
  font-size: clamp(24px, 4vw, 46px);
  font-weight: 700;
  color: #fff;
  margin: 0;
  letter-spacing: -1px;
  line-height: 1;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
}

.view-all-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  transition: color 0.25s ease;
  white-space: nowrap;

  &:hover { color: #1ca973; }

  @media (max-width: 640px) { display: none; }
}

/* ─── Custom nav controls ─────────────────────────────────── */
.nav-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;

  &:hover {
    background: #1ca973;
    border-color: #1ca973;
    color: #fff;
    transform: scale(1.06);
  }

  &:active { transform: scale(0.96); }
}

.slide-counter {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255,255,255,0.55);
  letter-spacing: 1px;
  min-width: 48px;
  text-align: center;
  font-variant-numeric: tabular-nums;
}

.counter-sep {
  color: rgba(255,255,255,0.2);
  margin: 0 2px;
}

/* ─── Slider ──────────────────────────────────────────────── */
.slider-wrap {
  padding: 0 80px;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;

  &.is-visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 1024px) { padding: 0 48px; }
  @media (max-width: 768px)  { padding: 0 28px; }
  /* On small mobile, zero padding so Splide's own right-padding shows peek */
  @media (max-width: 540px)  { padding: 0; }
}

/* ─── Cards ───────────────────────────────────────────────── */
.work-card {
  cursor: pointer;
  border-radius: 14px;
  overflow: hidden;
  position: relative;

  &:hover {
    .card-overlay { opacity: 1; }
    img { transform: scale(1.05); }
    .play-pill { transform: translateY(0); opacity: 1; }
  }
}

.card-media {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #111;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 30%,
    rgba(0,0,0,0.75) 100%
  );
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.card-bottom {
  padding: 16px 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  letter-spacing: 0.2px;
  line-height: 1.3;
}

.play-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #1ca973;
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 50px;
  letter-spacing: 0.5px;
  white-space: nowrap;
  flex-shrink: 0;
  transform: translateY(6px);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* ─── CTA ─────────────────────────────────────────────────── */
.section-cta {
  text-align: center;
  margin-top: 52px;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s;

  &.is-visible { opacity: 1; transform: translateY(0); }
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: 1px solid rgba(28,169,115,0.35);
  color: #1ca973;
  font-size: 14px;
  font-weight: 500;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.3px;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;

  &:hover {
    background: #1ca973;
    border-color: #1ca973;
    color: #fff;
    transform: translateY(-2px);
  }
}

/* ─── Loading ─────────────────────────────────────────────── */
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 70px;
  color: rgba(255,255,255,0.35);
  font-size: 13px;
}

.loader {
  width: 26px;
  height: 26px;
  border: 2px solid rgba(255,255,255,0.08);
  border-top-color: #1ca973;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Modal ───────────────────────────────────────────────── */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
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
  top: -48px;
  right: 0;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;

  &:hover { background: rgba(255,255,255,0.18); }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
