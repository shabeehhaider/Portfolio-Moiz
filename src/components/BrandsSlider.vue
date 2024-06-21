<template>
  <section class="brands">
    <h1>
      Clients & Agencies
    </h1>
    <div>
      <Splide :options="options" aria-label="Brand Images">
        <SplideSlide v-for="(image, index) in images" :key="index">
          <div class="image-container">
            <img :src="image" />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';
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

// Define the options for Splide
const options = {
  rewind: true,
  autoWidth: true,
  type: 'loop',
  autoplay: true,
  interval: 1000,
  perPage: 5,
  perMove: 1,
  gap: '4rem',
  padding: '1.5rem',
  arrows : true,
  pagination : false,
};

// Define the images array
const images = ref([
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
  img35,
  img36,
  img37,
  img38,
  img39,
  img40,
  img41,
  img42,
  img43,
  img44,
]);
</script>

<style lang="scss" scoped>
.brands {
  background: #0e0e0e;
  padding: 150px 0px;
  position: relative;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  h1 {
    color: #fefefe; 
    font-size: 24px;
    font-weight: 600; 
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 40px;
  }

  .image-container {
    width: 150px;
    height: 150px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto; // Center images horizontally
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    padding: 40px 0px;

    h1 {
      font-size: 20px;
      margin-bottom: 30px;
    }

    .image-container {
      width: 120px;
      height: 120px;
      padding: 15px;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 0px;

    h1 {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .image-container {
      width: 100px;
      height: 100px;
      padding: 10px;
    }
  }
}
</style>

