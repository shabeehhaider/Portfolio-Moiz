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
  '/src/assets/brands/bank-alflah.png',
  '/src/assets/brands/bata.png',
  '/src/assets/brands/bisconni.jpg',
  '/src/assets/brands/cadbury.png',
  '/src/assets/brands/coca-cola.png',
  '/src/assets/brands/diamond-supreme-foam.jpg',
  '/src/assets/brands/dulux.jpeg',
  '/src/assets/brands/easypaisa.png',
  '/src/assets/brands/foodpanda.png',
  '/src/assets/brands/hilal-foods-logo.png',
  '/src/assets/brands/hyundai.png',
  '/src/assets/brands/jazz-cash.png',
  '/src/assets/brands/jsbank.png',
  '/src/assets/brands/kashmir-oil.jpg',
  '/src/assets/brands/kia.png',
  '/src/assets/brands/lays.png',
  '/src/assets/brands/lemon-max.png',
  '/src/assets/brands/macD.png',
  '/src/assets/brands/national-foods-logo.png',
  '/src/assets/brands/nescafe.png',
  '/src/assets/brands/netflix.png',
  '/src/assets/brands/peugeot.jpeg',
  '/src/assets/brands/safeguard.png',
  '/src/assets/brands/shoop.png',
  '/src/assets/brands/sooper.jpg',
  '/src/assets/brands/sprite.png',
  '/src/assets/brands/surf-excel.png',
  '/src/assets/brands/suzuki.png',
  '/src/assets/brands/tang.png',
  '/src/assets/brands/tapal.png',
  '/src/assets/brands/telenor.png',
  '/src/assets/brands/toyota.png',
  '/src/assets/brands/ufone.png',
  '/src/assets/brands/xcell-mobile.jpg',
  '/src/assets/brands/zameen.jpg',
  '/src/assets/brands/gluco.jpg',
  '/src/assets/brands/kns.jpg',
  '/src/assets/brands/oglivi.jpeg',
  '/src/assets/brands/sachi.jpeg',
  '/src/assets/brands/manhatten.png',
  '/src/assets/brands/bbdo.jpeg',
  '/src/assets/brands/adcomleo.jpg',
  '/src/assets/brands/wrt.jpeg',
  '/src/assets/brands/mobily.jpeg',

]);
</script>

<style lang="scss" scoped>
.brands {
  background: #0e0e0e;
  padding: 60px 0px;
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
  }

  .image-container {
    width: 150px;
    height: 150px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
