<template>
  <section class="work">
    <h1>Work</h1>
    
    <div v-if="loading" class="loading">Loading videos...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading && latestVideos.length > 0" class="work-slider">
      <Splide :options="splideOptions">
        <SplideSlide v-for="(item, index) in latestVideos" :key="index">
          <div class="work-link">
            <img :src="item.image" @click="openIframe(item.video)" alt="Work Thumbnail" />
            <div class="overlay" @click="openIframe(item.video)">
              <span class="play-icon">▶</span>
              <p class="video-title">{{ item.title }}</p>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>

    <div class="btns">
      <router-link to="/my-work">
        <button class="explore-btn">Explore More</button>
      </router-link>
    </div>

    <div v-if="iframeVisible" class="iframe-modal" @click="closeIframe">
      <div class="iframe-container" @click.stop>
        <button class="close-btn" @click="closeIframe"><q-icon name="close"/></button>
        <iframe :src="iframeSrc" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { getVideos } from '../services/vimeoService';

const allVideos = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    // Fetch a bit more to ensure we have latest, but 6 is likely enough if sorted by date
    const videos = await getVideos(1, 10); 
    allVideos.value = videos;
  } catch (err) {
    error.value = 'Failed to load videos.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});

const latestVideos = computed(() => {
  return allVideos.value.slice(0, 6);
});

const splideOptions = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  pagination: true,
  arrows: true,
  breakpoints: {
    1024: {
      perPage: 2,
      gap: '1.5rem',
    },
    640: {
      perPage: 1,
      gap: '1rem',
      padding: '2rem',
    },
  },
};

const iframeVisible = ref(false);
const iframeSrc = ref('');

const openIframe = (src) => {
  iframeSrc.value = src;
  iframeVisible.value = true;
};

const closeIframe = () => {
  iframeVisible.value = false;
  iframeSrc.value = '';
};
</script>

<style lang="scss" scoped>
.work {
  background: #0e0e0e;
  padding: 80px 0;
  position: relative;
  /* margin-top: -20px; */ /* Removed dependent margin */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* min-height: 100vh; */

  h1 {
    color: #fefefe;
    font-size: 36px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 50px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .loading, .error {
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    padding: 2rem;
  }

  .work-slider {
    width: 90%;
    margin: 0 auto 50px auto;
  }

  .work-link {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
    aspect-ratio: 16/9;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(28, 169, 115, 0.2);

      .overlay {
        opacity: 1;
      }
      
      img {
        transform: scale(1.05);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      color: white;
      
      .play-icon {
        font-size: 3rem;
        margin-bottom: 10px;
        text-shadow: 0 2px 5px rgba(0,0,0,0.5);
      }

      .video-title {
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
        padding: 0 10px;
        text-shadow: 0 2px 5px rgba(0,0,0,0.8);
      }
    }
  }

  .btns {
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .explore-btn {
      background: transparent;
      color: #1ca973;
      border: 2px solid #1ca973;
      font-size: 18px;
      padding: 12px 30px;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      letter-spacing: 0.5px;

      &:hover {
        background: #1ca973;
        color: #fff;
        transform: scale(1.05);
      }
    }
  }

  .iframe-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(5px);

    .iframe-container {
      position: relative;
      width: 80%;
      aspect-ratio: 16/9;
      max-width: 1200px;
      background: #000;
      box-shadow: 0 0 30px rgba(0,0,0,0.8);
      border-radius: 8px;

      iframe {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }

      .close-btn {
        position: absolute;
        top: -50px;
        right: 0;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 30px;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.3s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }
    .iframe-container {
      width: 95%;
    }
  }
}
</style>
