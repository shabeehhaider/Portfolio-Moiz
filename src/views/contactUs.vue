<script setup>
import NavBar from '../components/NavBar.vue';
import ContactUs from '../components/Contact-us.vue';
import Footer from '../components/Footer.vue';
</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H7NB61PJV2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H7NB61PJV2');
</script>

<template>
    <NavBar />
    <ContactUs />
    <Footer />
</template>

<style>
#app{
  background: #0e0e0e;
}

</style>
