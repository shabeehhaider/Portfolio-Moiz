<template>
  <section class="work">
    <h1>Work</h1>
    <div class="btns">
      <button @click="showAll" :class="{ active: activeCategory === 'all' }">All</button>
      <button @click="showcommercials" :class="{ active: activeCategory === 'commercials' }">TV Commercials</button>
      <router-link to="/my-work">
        <button class="explore-btn">Explore More</button>
      </router-link>
    </div>
    <div v-if="activeCategory === 'all'" class="work-images">
      <div v-for="(item, index) in allVideos" :key="index" class="work-link">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
    </div>
    <div v-if="activeCategory === 'commercials'" class="work-images">
      <div v-for="(item, index) in commercialsVideos" :key="index" class="work-link">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
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
import { ref } from 'vue';

// Importing images with shorthand references
import img1 from '../assets/my-work/kia.png';
import img2 from '../assets/my-work/peugeot.jpeg';
import img3 from '../assets/my-work/netflix.jpeg';
import img4 from '../assets/my-work/revo.jpeg';
import img5 from '../assets/my-work/toyota-yaris-entertainment.jpeg';
import img6 from '../assets/my-work/yaris.jpeg';
import img7 from '../assets/my-work/mg-anthem.jpeg';
import img8 from '../assets/my-work/panther-tyres-king56.jpeg';
import img9 from '../assets/my-work/coca-cola-hum-aik-hain.jpeg';
import img10 from '../assets/my-work/jazz-cash-debit-card.jpeg';
import img11 from '../assets/my-work/sprite–wooo-sahhh-2.jpeg';
import img12 from '../assets/my-work/mobily-sequence-1.png';
import img13 from '../assets/my-work/mobily-sequence-2.png';
import img14 from '../assets/my-work/mobily-sequence-3.png';
import img15 from '../assets/my-work/mobily-sequence-4.png';

const activeCategory = ref('all');

const allVideos = ref([
  { image: img1, video: 'https://player.vimeo.com/video/954996067' },
  { image: img2, video: 'https://player.vimeo.com/video/954995426' },
  { image: img3, video: 'https://player.vimeo.com/video/954994541' },
  { image: img4, video: 'https://player.vimeo.com/video/954992368' },
  { image: img5, video: 'https://player.vimeo.com/video/954986732' },
  { image: img6, video: 'https://player.vimeo.com/video/954985999' },
  { image: img7, video: 'https://player.vimeo.com/video/954972354' },
  { image: img8, video: 'https://player.vimeo.com/video/952827765' },
  { image: img9, video: 'https://player.vimeo.com/video/952819684' },
  { image: img10, video: 'https://player.vimeo.com/video/952824687' },
  { image: img11, video: 'https://player.vimeo.com/video/952829011' },
  { image: img12, video: 'https://www.youtube.com/embed/P2mWFCLSoEI?si=viCRo72rXQowfFUp' },
  { image: img13, video: 'https://www.youtube.com/embed/hRF0YapBVoA?si=PaGnY6zdUAlQPhgz' },
  { image: img14, video: 'https://www.youtube.com/embed/_WXC_BCwPwk?si=ijSZOm0qywHcZz51' },
  { image: img15, video: 'https://www.youtube.com/embed/cGYQimv2NUI?si=m3-TLcBtD6f564lE' },
]);

const commercialsVideos = ref([
  { image: img12, video: 'https://www.youtube.com/embed/P2mWFCLSoEI?si=viCRo72rXQowfFUp' },
  { image: img13, video: 'https://www.youtube.com/embed/hRF0YapBVoA?si=PaGnY6zdUAlQPhgz' },
  { image: img14, video: 'https://www.youtube.com/embed/_WXC_BCwPwk?si=ijSZOm0qywHcZz51' },
  { image: img15, video: 'https://www.youtube.com/embed/cGYQimv2NUI?si=m3-TLcBtD6f564lE' },
  { image: img1, video: 'https://player.vimeo.com/video/954996067' },
  { image: img2, video: 'https://player.vimeo.com/video/954995426' },
  { image: img4, video: 'https://player.vimeo.com/video/954992368' },
  { image: img5, video: 'https://player.vimeo.com/video/954986732' },
  { image: img6, video: 'https://player.vimeo.com/video/954985999' },
  { image: img7, video: 'https://player.vimeo.com/video/954972354' },
  { image: img8, video: 'https://player.vimeo.com/video/952827765' },
  { image: img9, video: 'https://player.vimeo.com/video/952819684' },
  { image: img10, video: 'https://player.vimeo.com/video/952824687' },
  { image: img11, video: 'https://player.vimeo.com/video/952829011' },
]);

const showAll = () => {
  activeCategory.value = 'all';
};

const showcommercials = () => {
  activeCategory.value = 'commercials';
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
  padding: 60px 0px;
  position: relative;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 100vh;

  h1 {
    color: #fefefe;
    font-size: 24px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }

  .btns {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;

    .explore-btn {
      background: transparent;
      color: #fff;
      border: 1px solid;
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: transparent;
      }
    }
  }

  button {
    background: transparent;
    color: #fff;
    border: 0;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;

    &.active {
      border-bottom: 1px solid;
    }
  }

  .work-images {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;

    .work-link {
      width: 25%;
      border-radius: 20px;
      height: 360px;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      background: #0e0e0e;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 40px 0px;

    h1 {
      font-size: 22px;
    }

    .btns {
      .explore-btn {
        font-size: 16px;
        padding: 8px 16px;
      }

      button {
        font-size: 16px;
        padding: 8px;
      }
    }

    .work-images {
      .work-link {
        width: 25%;
        height: 340px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px 0px;

    h1 {
      font-size: 20px;
    }

    .btns {
      .explore-btn {
        font-size: 14px;
        padding: 6px 12px;
      }

      button {
        font-size: 14px;
        padding: 6px;
      }
    }

    .work-images {
      .work-link {
        width: 40%;
        height: 320px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 20px 0px;

    h1 {
      font-size: 18px;
    }

    .btns {
      gap: 5px;

      .explore-btn {
        font-size: 12px;
        padding: 5px 10px;
      }

      button {
        font-size: 12px;
        padding: 5px;
      }
    }

    .work-images {
      .work-link {
        width: 90%;
        height: 300px;
        &:hover {
          transform: scale(1);
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }
      }
    }
  }
}

.iframe-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .iframe-container {
    position: relative;
    width: 50%;
    height: 50%;

    iframe {
      width: 100%;
      height: 100%;
    }

    .close-btn {
      position: absolute;
      top: -100px;
      right: -100px;
      background: #fff;
      border: none;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.3s ease;
      color: #000;
      z-index: 10000;

    }
  }

  @media (max-width: 768px) {
    .iframe-container {
      width: 90%;
      height: 50%;
      .close-btn {
        position: absolute;
        top: -100px;
        right: -30px;
      }
    }
  }

  @media (max-width: 480px) {
    .iframe-container {
      width: 95%;
      height: 30%;
      .close-btn {
        position: absolute;
        top: -100px;
        right: 0px;
      }
    }
  }
}
</style>



