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
  '../assets/brands/bank-alflah.png',
  '../assets/brands/bata.png',
  '../assets/brands/bisconni.jpg',
  '../assets/brands/cadbury.png',
  '../assets/brands/coca-cola.png',
  '../assets/brands/diamond-supreme-foam.jpg',
  '../assets/brands/dulux.jpeg',
  '../assets/brands/easypaisa.png',
  '../assets/brands/foodpanda.png',
  '../assets/brands/hilal-foods-logo.png',
  '../assets/brands/hyundai.png',
  '../assets/brands/jazz-cash.png',
  '../assets/brands/jsbank.png',
  '../assets/brands/kashmir-oil.jpg',
  '../assets/brands/kia.png',
  '../assets/brands/lays.png',
  '../assets/brands/lemon-max.png',
  '../assets/brands/macD.png',
  '../assets/brands/national-foods-logo.png',
  '../assets/brands/nescafe.png',
  '../assets/brands/netflix.png',
  '../assets/brands/peugeot.jpeg',
  '../assets/brands/safeguard.png',
  '../assets/brands/shoop.png',
  '../assets/brands/sooper.jpg',
  '../assets/brands/sprite.png',
  '../assets/brands/surf-excel.png',
  '../assets/brands/suzuki.png',
  '../assets/brands/tang.png',
  '../assets/brands/tapal.png',
  '../assets/brands/telenor.png',
  '../assets/brands/toyota.png',
  '../assets/brands/ufone.png',
  '../assets/brands/xcell-mobile.jpg',
  '../assets/brands/zameen.jpg',
  '../assets/brands/gluco.jpg',
  '../assets/brands/kns.jpg',
  '../assets/brands/oglivi.jpeg',
  '../assets/brands/sachi.jpeg',
  '../assets/brands/manhatten.png',
  '../assets/brands/bbdo.jpeg',
  '../assets/brands/adcomleo.jpg',
  '../assets/brands/wrt.jpeg',
  '../assets/brands/mobily.jpeg',

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

