<template>
  <nav id="topNav" class="top-bar">
    <div class="nav-inner">
      <div class="logo-wrap">
        <a href="/">
          <img src="../assets/logorm.png" alt="Moiz Zaidi" />
        </a>
      </div>

      <div class="nav-actions">
        <a class="nav-icon" target="_blank" href="mailto:moix.xaidi@gmail.com" title="Email">
          <q-icon name="mail" />
        </a>
        <a class="nav-icon" href="tel:+923334454814" title="Call">
          <q-icon name="phone" />
        </a>
        <a class="nav-icon" href="https://wa.me/923334454814" target="_blank" title="WhatsApp">
          <img src="../assets/whatsapp-icon.svg" width="20" height="20" />
        </a>
        <a class="nav-icon" href="https://www.youtube.com/@moizzaidi7068" target="_blank" title="YouTube">
          <img src="../assets/youtube.svg" width="20" height="20" />
        </a>
        <a class="nav-icon" href="https://vimeo.com/user98514964" target="_blank" title="Vimeo">
          <img src="../assets/vimeo.svg" width="20" height="20" style="filter: invert(1);" />
        </a>
        <button class="menu-btn" @click.stop="toggleDropdown" :class="{ open: isDropdownOpen }" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <!-- Overlay -->
    <div class="sidebar-overlay" :class="{ visible: isDropdownOpen }" @click="toggleDropdown"></div>

    <!-- Sidebar -->
    <div class="sidebar" :class="{ open: isDropdownOpen }">
      <button class="sidebar-close" @click="toggleDropdown" aria-label="Close menu">
        <q-icon name="close" />
      </button>
      <nav class="sidebar-nav">
        <a href="/" @click="toggleDropdown">Home</a>
        <a href="/my-work" @click="toggleDropdown">My Work</a>
        <a href="/about" @click="toggleDropdown">About</a>
        <a href="/contact-us" @click="toggleDropdown">Contact</a>
      </nav>
      <div class="sidebar-footer">
        <p>Director · Producer · Creative</p>
        <p class="sidebar-email">moix.xaidi@gmail.com</p>
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
  const threshold = route.path === '/' ? 100 : 50;
  nav.classList.toggle('scrolled', window.scrollY > threshold);
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
  document.body.style.overflow = isDropdownOpen.value ? 'hidden' : '';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  document.body.style.overflow = '';
});
</script>

<style lang="scss">
.top-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background: transparent;
  transition: background 0.4s ease, backdrop-filter 0.4s ease;

  &.scrolled {
    background: rgba(8, 8, 8, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  padding: 0 48px;
  transition: height 0.35s ease;

  .scrolled & {
    height: 80px;
  }
}

.logo-wrap {
  img {
    height: 120px;
    width: auto;
    display: block;
    object-fit: contain;
    transition: height 0.35s ease;

    .scrolled & {
      height: 94px;
    }
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.25s ease, background 0.25s ease;

  i {
    font-size: 20px;
  }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
  }
}

/* Hamburger button */
.menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 38px;
  height: 38px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: 8px;

  span {
    display: block;
    width: 100%;
    height: 1.5px;
    background: #fff;
    border-radius: 2px;
    transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
    transform-origin: center;
  }

  &.open {
    span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; transform: scaleX(0); }
    span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
  }
}

/* Overlay */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 980;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
  backdrop-filter: blur(2px);

  &.visible {
    opacity: 1;
    pointer-events: all;
  }
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 340px;
  background: #0a0a0a;
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 990;
  display: flex;
  flex-direction: column;
  padding: 80px 48px 60px;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &.open {
    transform: translateX(0);
  }
}

.sidebar-close {
  position: absolute;
  top: 24px;
  right: 24px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 6px;
  transition: color 0.2s ease, background 0.2s ease;

  i { font-size: 22px; }

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.07);
  }
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 0;
  flex: 1;
  justify-content: center;

  a {
    display: flex;
    align-items: baseline;
    gap: 16px;
    font-size: 28px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: color 0.25s ease;
    letter-spacing: -0.5px;

    &:hover {
      color: #fff;
    }

    &:last-child { border-bottom: none; }
  }
}


.sidebar-footer {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 24px;

  p {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.35);
    margin: 0 0 4px;
    letter-spacing: 0.5px;
  }

  .sidebar-email {
    color: rgba(28, 169, 115, 0.8);
    font-size: 11px;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .nav-inner {
    height: 80px;
    padding: 0 24px;
  }

  .logo-wrap img {
    height: 94px;
  }

  .nav-icon {
    width: 34px;
    height: 34px;
    i { font-size: 18px; }
  }

  .sidebar {
    width: 100%;
    padding: 90px 32px 50px;
  }

  .sidebar-nav a {
    font-size: 26px;
  }
}

@media (max-width: 480px) {
  .nav-inner {
    height: 70px;
    padding: 0 16px;
  }

  .logo-wrap img {
    height: 70px;
  }

  /* Hide email/phone on very small screens */
  .nav-actions > a:nth-child(1),
  .nav-actions > a:nth-child(2) {
    display: none;
  }
}
</style>
