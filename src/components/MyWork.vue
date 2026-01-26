<template>
  <section class="work">
    <h1>My Work</h1>
    
    <div v-if="loading" class="loading">Loading videos...</div>
    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="!loading" class="work-grid">
      <div v-for="(item, index) in allVideos" :key="index" class="work-card">
        <div class="image-wrapper" @click="openIframe(item.video)">
          <img :src="item.image" loading="lazy" alt="Work Thumbnail" />
          <div class="overlay">
            <span class="play-icon">▶</span>
            <p class="video-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- If no videos found -->
    <div v-if="!loading && allVideos.length === 0" class="no-videos">
      No videos found.
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
import { ref, onMounted } from 'vue';
import { getVideos } from '../services/vimeoService';

const allVideos = ref([]);
const loading = ref(true);
const error = ref(null);

onMounted(async () => {
  try {
    loading.value = true;
    const videos = await getVideos(1, 100); // Fetch up to 100
    allVideos.value = videos;
  } catch (err) {
    error.value = 'Failed to load videos.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});

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
  padding: 100px 0;
  min-height: 100vh;
  position: relative;

  h1 {
    color: #fefefe;
    font-size: 42px;
    font-weight: 700;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 60px;
    letter-spacing: 2px;
    text-transform: uppercase;
    position: relative;
    
    &::after {
      content: '';
      display: block;
      width: 60px;
      height: 4px;
      background: #1ca973;
      margin: 15px auto 0;
      border-radius: 2px;
    }
  }
  
  .loading, .error, .no-videos {
    text-align: center;
    color: #fff;
    font-size: 1.2rem;
    padding: 3rem;
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    padding: 0 5%;
    max-width: 1400px;
    margin: 0 auto;
  }

  .work-card {
    background: #1a1a1a;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
    }

    .image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        cursor: pointer;
        overflow: hidden;

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
            background: rgba(0, 0, 0, 0.5); /* slightly darker default */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
            color: white;

            .play-icon {
                font-size: 3.5rem;
                margin-bottom: 15px;
                text-shadow: 0 2px 10px rgba(0,0,0,0.5);
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            }

            .video-title {
                font-size: 1.1rem;
                text-align: center;
                padding: 0 15px;
                font-weight: 500;
                transform: translateY(20px);
                transition: transform 0.3s ease;
            }
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
            .overlay {
                opacity: 1;
                .play-icon {
                    transform: scale(1.1);
                }
                .video-title {
                    transform: translateY(0);
                }
            }
        }
    }
  }

  /* Modal Styles */
  .iframe-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(8px);
    animation: fadeIn 0.3s ease;

    .iframe-container {
      position: relative;
      width: 80%;
      aspect-ratio: 16/9;
      max-width: 1200px;
      background: #000;
      box-shadow: 0 0 50px rgba(28, 169, 115, 0.1);
      border-radius: 12px;

      iframe {
        width: 100%;
        height: 100%;
        border-radius: 12px;
      }

      .close-btn {
        position: absolute;
        top: -60px;
        right: 0;
        background: transparent;
        border: none;
        color: #fff;
        font-size: 40px;
        cursor: pointer;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.3s;
        
        &:hover {
          color: #1ca973;
          transform: rotate(90deg);
        }
      }
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 1024px) {
    .work-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
    }
    .iframe-container {
      width: 95%;
    }
  }
}
</style>
