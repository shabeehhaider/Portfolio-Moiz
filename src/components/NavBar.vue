<template>
  <nav id="topNav" class="navbar navbar-expand-lg top-bar">
    <div class="container">
      <div class="logo-img">
        <a href="/">
          <img src="../assets/logorm.png" alt="logo"/>
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" target="_blank" href="mailto:moix.xaidi@gmail.com">
              <q-icon name="mail" />
            </a>  
          </li>
          <li class="nav-item">
            <a class="nav-link" href="tel:+923334454814">
              <q-icon name="phone" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://wa.me/923334454814" target="_blank">
              <img src="../assets/whatsapp-icon.svg" width="28px" height="28px" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.youtube.com/@moizzaidi7068" target="_blank">
              <img src="../assets/youtube.svg" width="28px" height="28px" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://vimeo.com/user98514964" target="_blank">
              <img src="../assets/vimeo.svg" width="28px" height="28px" style="filter: invert(1);" />
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="menuIcon" @click.prevent="toggleDropdown">
              <q-icon name="menu" />
            </a>
            <div class="sidebar-menu" :class="{ show: isDropdownOpen }" aria-labelledby="menuIcon">
              <q-icon class="sidebar-item" name="close" @click="toggleDropdown"/>
              <a class="sidebar-item" href="/">Home</a>
              <a class="sidebar-item" href="/about">About</a>
              <a class="sidebar-item" href="/my-work">My Work</a>
              <a class="sidebar-item" href="/contact-us">Contact us</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isDropdownOpen = ref(false);

const handleScroll = () => {
  const nav = document.getElementById('topNav');
  const threshold = route.path.includes('my-work') || route.path.includes('about') || route.path.includes('contact-us') ? 60 : 700;

  if (window.scrollY > threshold) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutside = (event) => {
  const dropdownMenu = document.querySelector('.sidebar-menu');
  const menuIcon = document.getElementById('menuIcon');
  if (dropdownMenu && !dropdownMenu.contains(event.target) && !menuIcon.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('click', handleClickOutside);
});
</script>




<style lang="scss">
.navbar-nav {
  margin-left: auto;
}

.top-bar {
  height: 160px;
  display: flex !important;
  align-items: center !important;
  background: transparent;
  justify-content: center !important;
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;

  .logo-img {
    width: 230px;
    height: 230px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  li {
    padding: 0 5px;
  }

  .nav-link {
    font-family: "Poppins", sans-serif;
    color: #fff;
    i {
      font-size: 28px;
    }
    &:hover {
      color: #fff;
      text-decoration: none;
    }
    &:focus {
      color: #fff;
      text-decoration: none;
    }
  }
}

.top-bar.scrolled {
  background-color: #0c0e0e;
}

.sidebar-menu {
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  padding: 100px 20px;
  background-color: #17241e;
  height: 100vh;
  box-shadow: -8px 0 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.sidebar-menu.show {
  transform: translateX(0);
}

.sidebar-item {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: #fff;
  font-size: 32px;
}

i.sidebar-item{
  position: absolute;
  top: 0;
  right: 0;
  font-size: 32px;
  cursor: pointer;
}

</style>



