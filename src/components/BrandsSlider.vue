<template>
  <section class="brands-section" ref="sectionRef">
    <div class="section-label reveal" :class="{ visible: isVisible }">
      <span class="eyebrow">Trusted By</span>
      <span class="divider-h"></span>
      <span class="eyebrow">Clients &amp; Agencies</span>
    </div>

    <div class="slider-wrap reveal" :class="{ visible: isVisible, 'reveal-delay-2': true }">
      <Splide :options="options" aria-label="Clients and Agencies">
        <SplideSlide v-for="(image, index) in images" :key="index">
          <div class="logo-cell">
            <img :src="image" :alt="'Brand ' + (index + 1)" loading="lazy" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

import img1 from '../assets/brands/bank-alflah.png';
import img2 from '../assets/brands/bata.png';
import img3 from '../assets/brands/bisconni.jpg';
import img4 from '../assets/brands/cadbury.png';
import img5 from '../assets/brands/coca-cola.png';
import img6 from '../assets/brands/diamond-supreme-foam.jpg';
import img7 from '../assets/brands/dulux.jpeg';
import img8 from '../assets/brands/easypaisa.png';
import img9 from '../assets/brands/foodpanda.png';
import img10 from '../assets/brands/hilal-foods-logo.png';
import img11 from '../assets/brands/hyundai.png';
import img12 from '../assets/brands/jazz-cash.png';
import img13 from '../assets/brands/jsbank.png';
import img14 from '../assets/brands/kashmir-oil.jpg';
import img15 from '../assets/brands/kia.png';
import img16 from '../assets/brands/lays.png';
import img17 from '../assets/brands/lemon-max.png';
import img18 from '../assets/brands/macD.png';
import img19 from '../assets/brands/national-foods-logo.png';
import img20 from '../assets/brands/nescafe.png';
import img21 from '../assets/brands/netflix.png';
import img22 from '../assets/brands/peugeot.jpeg';
import img23 from '../assets/brands/safeguard.png';
import img24 from '../assets/brands/shoop.png';
import img25 from '../assets/brands/sooper.jpg';
import img26 from '../assets/brands/sprite.png';
import img27 from '../assets/brands/surf-excel.png';
import img28 from '../assets/brands/suzuki.png';
import img29 from '../assets/brands/tang.png';
import img30 from '../assets/brands/tapal.png';
import img31 from '../assets/brands/telenor.png';
import img32 from '../assets/brands/toyota.png';
import img33 from '../assets/brands/ufone.png';
import img34 from '../assets/brands/xcell-mobile.jpg';
import img35 from '../assets/brands/zameen.jpg';
import img36 from '../assets/brands/gluco.jpg';
import img37 from '../assets/brands/kns.jpg';
import img38 from '../assets/brands/oglivi.jpeg';
import img39 from '../assets/brands/sachi.jpeg';
import img40 from '../assets/brands/manhatten.png';
import img41 from '../assets/brands/bbdo.jpeg';
import img42 from '../assets/brands/adcomleo.jpg';
import img43 from '../assets/brands/wrt.jpeg';
import img44 from '../assets/brands/mobily.jpeg';

const sectionRef = ref(null);
const isVisible = ref(false);

const options = {
  type: 'loop',
  autoplay: true,
  interval: 1200,
  perPage: 6,
  perMove: 1,
  gap: '40px',
  padding: '2rem',
  arrows: false,
  pagination: false,
  drag: false,
  breakpoints: {
    1024: { perPage: 5, gap: '28px' },
    768: { perPage: 4, gap: '20px' },
    480: { perPage: 3, gap: '16px' },
  },
};

const images = ref([
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
  img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
  img41, img42, img43, img44,
]);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.15 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
</script>

<style lang="scss" scoped>
.brands-section {
  background: #080808;
  padding: 80px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

.section-label {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 80px 48px;

  @media (max-width: 768px) {
    padding: 0 28px 32px;
  }
  @media (max-width: 480px) {
    padding: 0 20px 24px;
  }
}

.eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.3);
  white-space: nowrap;
}

.divider-h {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
}

.slider-wrap {
  position: relative;

  /* Fade edges */
  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    z-index: 2;
    pointer-events: none;
  }
  &::before {
    left: 0;
    background: linear-gradient(to right, #080808, transparent);
  }
  &::after {
    right: 0;
    background: linear-gradient(to left, #080808, transparent);
  }
}

.logo-cell {
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 44px;
  }
}
</style>
