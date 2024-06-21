<template>
  <section class="video-slider">
    <Splide :options="options" aria-label="My Favorite Videos">
      <SplideSlide @click="openIframe('https://player.vimeo.com/video/954994541')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/netflix.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>The Greatest Rivalry: India vs Pakistan</h3>
            <p>The first Netflix Original to be shot in Pakistan.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide @click="openIframe('https://www.youtube.com/embed/cGYQimv2NUI?si=vaxOfLk-n4yD2uAp')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/mobilysequence.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>Mobily</h3>
            <p>Connecting You to Unforgettable Moments.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide @click="openIframe('https://player.vimeo.com/video/954995426')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/peugeot.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>Peugeot</h3>
            <p>Where Modern Elegance Meets Performance.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide @click="openIframe('https://player.vimeo.com/video/954996067')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/kia-picanto.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>Kia Picanto</h3>
            <p>The Compact and Stylish City Companion.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide @click="openIframe('https://player.vimeo.com/video/952827765')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/panther-tyre-king.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>Panther Tyre</h3>
            <p>Grip the Road with Unmatched Quality.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide @click="openIframe('https://player.vimeo.com/video/952827227')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/mcDonald.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>McDonald's</h3>
            <p>Delicious fast food for everyone.</p>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide @click="openIframe('https://player.vimeo.com/video/952829678')">
        <div class="video-container">
          <video autoplay muted playsinline loop preload="auto">
            <source src="../assets/slider-videos/Teefa in Trouble - Teaser.mp4" type="video/mp4">
          </video>
          <div class="video-label">
            <h3>Teefa in Trouble</h3>
            <p>An Action-Packed Cinematic Adventure.</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
    <div v-if="iframeVisible" class="iframe-modal" @click="closeIframe">
      <div class="iframe-container" @click.stop>
        <iframe :src="iframeSrc" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref , onMounted } from 'vue';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
import '@splidejs/vue-splide/css/core';

const options = {
  rewind: true,
  autoWidth: true,
  type: 'loop',
  autoplay: true,
  interval: 10000, 
  pauseOnHover: false, 
  perPage: 1,
  perMove: 1,
  padding: '0rem',
  gap    : '2rem',
  pagination : false,
}

const iframeVisible = ref(false);
const iframeSrc = ref('');

const openIframe = (src) => {
  iframeSrc.value = src;
  iframeVisible.value = true;
}

const closeIframe = () => {
  iframeVisible.value = false;
  iframeSrc.value = '';
}

onMounted(() => {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.muted = true;
  });
});
</script>

<style lang="scss" scoped>
.video-slider {
  background: #0e0e0e;
  padding: 0px;
  position: relative;
}

.video-container {
  position: relative;
  width: 100vw;
  height: 100vh;

  @media (max-width: 768px) {
    height: 500px; 
  }

  @media (max-width: 480px) {
    height: 450px; 
  }
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-label {
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;

  @media (max-width: 768px) {
    bottom: 30px; 
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    bottom: 40px; 
    padding: 6px 12px;
    font-size: 0.8em;
    width: 70%; 
  }
}

h3 {
  margin: 0;
  font-size: 1.5em;

  @media (max-width: 768px) {
    font-size: 1.3em; // Adjust font size for tablets
  }

  @media (max-width: 480px) {
    font-size: 1.2em; // Adjust font size for mobile phones
  }
}

p {
  margin: 0;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.9em; // Adjust font size for tablets
  }

  @media (max-width: 480px) {
    font-size: 0.8em; // Adjust font size for mobile phones
  }
}

.iframe-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.iframe-container {
  position: relative;
  width: 80%;
  max-width: 800px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 90%; // Adjust width for tablets
    max-width: 600px;
  }

  @media (max-width: 480px) {
    width: 95%; // Adjust width for mobile phones
    max-width: 400px;
  }
}

iframe {
  width: 100%;
  height: 450px;
  border: none;

  @media (max-width: 768px) {
    height: 350px; // Adjust height for tablets
  }

  @media (max-width: 480px) {
    height: 250px; // Adjust height for mobile phones
  }
}

</style>

<style>
.splide {
  padding: 0;
}
</style>
