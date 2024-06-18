<script setup>
import HeroSection from '../components/HeroSection.vue';
import NavBar from '../components/NavBar.vue';
import About from '../components/WhatIDo.vue';
import ProjectsVideos from '../components/ProjectsVideos.vue';
import BrandsSlider from '../components/BrandsSlider.vue';
import MyWorkHome from '../components/MyWorkHome.vue';
import Introduction from '../components/Introduction.vue';
import Footer from '../components/Footer.vue';
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
  background: #484747;
}

</style>
