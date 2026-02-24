<template>
  <section class="hero-slider">
    <Splide
      ref="splideRef"
      :options="options"
      aria-label="Featured Works"
      @splide:moved="onSlideChanged"
    >
      <SplideSlide v-for="(slide, index) in slides" :key="index">
        <div class="slide-wrap" @click="openModal(slide.vimeo)">
          <video
            :ref="el => { if (el) videoRefs[index] = el }"
            preload="none"
            muted
            playsinline
            loop
            :poster="slide.poster || ''"
          >
            <source :src="slide.src" type="video/mp4" />
          </video>
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <div class="slide-meta">
              <span class="slide-num">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="slide-divider"></span>
              <span class="slide-tag">Featured</span>
            </div>
            <h2 class="slide-title">{{ slide.title }}</h2>
            <p class="slide-desc">{{ slide.desc }}</p>
            <div class="slide-play">
              <span class="play-circle">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
              <span class="play-label">Watch Film</span>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>

    <!-- Progress bar -->
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progressWidth + '%' }"></div>
    </div>

    <!-- Modal -->
    <Transition name="modal-fade">
      <div v-if="modalVisible" class="video-modal" @click="closeModal">
        <div class="modal-inner" @click.stop>
          <button class="modal-close" @click="closeModal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <iframe
            :src="modalSrc"
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
import { ref, onMounted, onUnmounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

const slides = [
  {
    src: new URL('../assets/slider-videos/EasyPaisa.mp4', import.meta.url).href,
    title: 'EasyPaisa',
    desc: 'Making financial transactions effortless and accessible for everyone.',
    vimeo: 'https://player.vimeo.com/video/954954489?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/netflix.mp4', import.meta.url).href,
    title: 'The Greatest Rivalry',
    desc: 'The first Netflix Original to be shot in Pakistan.',
    vimeo: 'https://player.vimeo.com/video/954994541?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/mobilysequence.mp4', import.meta.url).href,
    title: 'Mobily',
    desc: 'Connecting You to Unforgettable Moments.',
    vimeo: 'https://www.youtube.com/embed/cGYQimv2NUI?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/peugeot.mp4', import.meta.url).href,
    title: 'Peugeot',
    desc: 'Where Modern Elegance Meets Performance.',
    vimeo: 'https://player.vimeo.com/video/954995426?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/kia-picanto.mp4', import.meta.url).href,
    title: 'Kia Picanto',
    desc: 'The Compact and Stylish City Companion.',
    vimeo: 'https://player.vimeo.com/video/954996067?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/panther-tyre-king.mp4', import.meta.url).href,
    title: 'Panther Tyre',
    desc: 'Grip the Road with Unmatched Quality.',
    vimeo: 'https://player.vimeo.com/video/952827765?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/mcDonald.mp4', import.meta.url).href,
    title: "McDonald's",
    desc: 'Delicious fast food for everyone.',
    vimeo: 'https://player.vimeo.com/video/952827227?autoplay=1',
  },
  {
    src: new URL('../assets/slider-videos/Teefa in Trouble - Teaser.mp4', import.meta.url).href,
    title: 'Teefa in Trouble',
    desc: 'An Action-Packed Cinematic Adventure.',
    vimeo: 'https://player.vimeo.com/video/952829678?autoplay=1',
  },
];

const splideRef = ref(null);
const videoRefs = ref({});
const activeIndex = ref(0);
const modalVisible = ref(false);
const modalSrc = ref('');
const progressWidth = ref(0);

let progressTimer = null;
const INTERVAL = 5000;

const playSlide = (index) => {
  Object.entries(videoRefs.value).forEach(([i, video]) => {
    if (!video) return;
    const idx = Number(i);
    if (idx === index) {
      video.currentTime = 0;
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
  activeIndex.value = index;
  startProgress();
};

const startProgress = () => {
  clearInterval(progressTimer);
  progressWidth.value = 0;
  const steps = 100;
  const stepMs = INTERVAL / steps;
  let current = 0;
  progressTimer = setInterval(() => {
    current++;
    progressWidth.value = current;
    if (current >= steps) clearInterval(progressTimer);
  }, stepMs);
};

const onSlideChanged = (splide, newIndex) => {
  playSlide(newIndex);
};

const openModal = (src) => {
  modalSrc.value = src;
  modalVisible.value = true;
  document.body.style.overflow = 'hidden';
  // Pause active video
  const activeVideo = videoRefs.value[activeIndex.value];
  if (activeVideo) activeVideo.pause();
};

const closeModal = () => {
  modalVisible.value = false;
  modalSrc.value = '';
  document.body.style.overflow = '';
  // Resume video
  const activeVideo = videoRefs.value[activeIndex.value];
  if (activeVideo) activeVideo.play().catch(() => {});
};

const handleKey = (e) => {
  if (e.key === 'Escape' && modalVisible.value) closeModal();
};

const options = {
  type: 'loop',
  autoplay: true,
  interval: INTERVAL,
  pauseOnHover: false,
  perPage: 1,
  perMove: 1,
  pagination: false,
  arrows: false,
  speed: 800,
};

onMounted(() => {
  document.addEventListener('keydown', handleKey);
  // Play first video after a short delay
  setTimeout(() => {
    playSlide(0);
  }, 300);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKey);
  clearInterval(progressTimer);
});
</script>

<style lang="scss" scoped>
.hero-slider {
  position: relative;
  background: #000;
  overflow: hidden;
}

.slide-wrap {
  position: relative;
  width: 100vw;
  height: 100vh;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100svh;
    min-height: 500px;
  }
  @media (max-width: 480px) {
    min-height: 460px;
  }
}

video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 0.0) 40%,
    rgba(0, 0, 0, 0.55) 75%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 60px 80px;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 40px 28px;
  }
  @media (max-width: 480px) {
    padding: 32px 20px;
  }
}

.slide-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}

.slide-num {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent, #1ca973);
  letter-spacing: 2px;
}

.slide-divider {
  display: block;
  width: 32px;
  height: 1px;
  background: rgba(255, 255, 255, 0.4);
}

.slide-tag {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.slide-title {
  font-size: clamp(28px, 5vw, 58px);
  font-weight: 700;
  color: #fff;
  line-height: 1.1;
  margin: 0 0 10px;
  letter-spacing: -0.5px;
  max-width: 700px;
}

.slide-desc {
  font-size: clamp(13px, 1.5vw, 16px);
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 28px;
  font-weight: 300;
  max-width: 500px;
}

.slide-play {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  padding: 10px 22px 10px 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(8px);
  transition: background 0.3s ease, border-color 0.3s ease;

  &:hover {
    background: rgba(28, 169, 115, 0.2);
    border-color: rgba(28, 169, 115, 0.5);
  }
}

.play-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--accent, #1ca973);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.play-label {
  font-size: 13px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 0.5px;
}

/* Progress bar */
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.12);
  z-index: 10;
}
.progress-fill {
  height: 100%;
  background: var(--accent, #1ca973);
  transition: width 0.1s linear;
}

/* Modal */
.video-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.modal-inner {
  position: relative;
  width: 100%;
  max-width: 1100px;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border: none;
  }
}
.modal-close {
  position: absolute;
  top: -48px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
  .modal-inner { transition: transform 0.3s ease; }
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  .modal-inner { transform: scale(0.96); }
}
</style>
