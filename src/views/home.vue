<script setup>
import { onMounted } from 'vue';

import HeroSection from '../components/HeroSection.vue';
import NavBar from '../components/NavBar.vue';
import About from '../components/WhatIDo.vue';
import ProjectsVideos from '../components/ProjectsVideos.vue';
import BrandsSlider from '../components/BrandsSlider.vue';
import MyWorkHome from '../components/MyWorkHome.vue';
import Introduction from '../components/Introduction.vue';
import Footer from '../components/Footer.vue';

onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-H7NB61PJV2";
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-H7NB61PJV2');
  };
});
</script>

<template>
    <NavBar />
    <ProjectsVideos />
    <HeroSection  />
    <Introduction />
    <MyWorkHome />
    <BrandsSlider />
    <About />
    <Footer />
</template>

<style>
#app{
  background: #0e0e0e;
}

</style>
