<template>
  <section class="hero-intro" ref="sectionRef">
    <div class="hero-inner">
      <!-- Text -->
      <div class="hero-text" :class="{ 'is-visible': isVisible }">
        <span class="eyebrow">Director · Producer · Creative</span>
        <h1>
          Hey <img class="wave" src="../assets/hand.png" alt="" aria-hidden="true" /><br />
          I'm Moiz<br />
          <span class="name-muted">Zaidi</span>
        </h1>
        <p class="hero-bio">
          A filmmaker with over a decade crafting cinematic stories for some of the world's most iconic brands.
        </p>
        <div class="hero-ctas">
          <router-link to="/my-work" class="btn-primary">View My Work</router-link>
          <router-link to="/contact-us" class="btn-ghost">Get In Touch</router-link>
        </div>
      </div>

      <!-- Image -->
      <div class="hero-visual" :class="{ 'is-visible': isVisible }">
        <div class="profile-ring">
          <img src="../assets/profile.jpeg" alt="Moiz Zaidi" class="profile-img" />
        </div>
        <div class="stat-badge">
          <span class="stat-num">10+</span>
          <span class="stat-label">Years of<br/>Experience</span>
        </div>
      </div>
    </div>

    <!-- Decorative gradient orb -->
    <div class="hero-orb" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sectionRef = ref(null);
const isVisible = ref(false);

onMounted(() => {
  // Slight delay so transition is visible on first load
  setTimeout(() => { isVisible.value = true; }, 150);
});
</script>

<style lang="scss" scoped>
.hero-intro {
  background: #080808;
  padding: 130px 80px 80px;
  position: relative;
  overflow: hidden;
  border-radius: 28px 28px 0 0;
  margin-top: -28px;
  z-index: 2;

  @media (max-width: 1024px) { padding: 80px 48px 60px; }
  @media (max-width: 768px)  { padding: 60px 28px 50px; margin-top: -16px; }
  @media (max-width: 480px)  { padding: 50px 20px 40px; }
}

.hero-orb {
  position: absolute;
  top: -100px;
  right: -150px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(28,169,115,0.08) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

.hero-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 52px; /* extra gap to account for badge overhanging below ring */
  }
}

/* ─ Text ─────────────────────────────────────────────────── */
.hero-text {
  flex: 1;
  opacity: 0;
  transform: translateX(-24px);
  transition: opacity 0.8s ease, transform 0.8s ease;

  &.is-visible {
    opacity: 1;
    transform: translateX(0);
  }
}

.eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #1ca973;
  margin-bottom: 22px;
}

h1 {
  font-size: clamp(40px, 6vw, 78px);
  font-weight: 800;
  color: #fff;
  line-height: 1.04;
  margin: 0 0 22px;
  letter-spacing: -2px;

  .name-muted {
    color: rgba(255,255,255,0.22);
  }
}

.wave {
  width: clamp(36px, 5vw, 52px);
  height: clamp(36px, 5vw, 52px);
  display: inline-block;
  vertical-align: middle;
  animation: wave-hand 2.2s ease-in-out infinite;
  transform-origin: 70% 80%;
}

.hero-bio {
  font-size: 16px;
  font-weight: 300;
  color: rgba(255,255,255,0.48);
  max-width: 400px;
  line-height: 1.75;
  margin: 0 0 38px;

  @media (max-width: 480px) { font-size: 14px; }
}

.hero-ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  padding: 13px 28px;
  background: #1ca973;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 0.3px;
  transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    background: #28e98c;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(28,169,115,0.3);
  }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  padding: 13px 28px;
  background: transparent;
  color: rgba(255,255,255,0.65);
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 50px;
  text-decoration: none;
  transition: border-color 0.25s ease, color 0.25s ease;

  &:hover {
    color: #fff;
    border-color: rgba(255,255,255,0.3);
  }
}

/* ─ Visual ───────────────────────────────────────────────── */
.hero-visual {
  position: relative;
  flex-shrink: 0;
  opacity: 0;
  transform: translateX(24px);
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;

  &.is-visible {
    opacity: 1;
    transform: translateX(0);
  }
}

.profile-ring {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 3px;
  background: conic-gradient(
    #1ca973 0deg,
    rgba(28,169,115,0.1) 200deg,
    #1ca973 360deg
  );

  @media (max-width: 768px) { width: 220px; height: 220px; }
  @media (max-width: 480px) { width: 170px; height: 170px; }
}

.profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #080808;
  display: block;
}

.stat-badge {
  position: absolute;
  bottom: -12px;
  left: -28px;
  background: #0f0f0f;
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 14px;
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  backdrop-filter: blur(10px);
  white-space: nowrap;

  @media (max-width: 900px) { left: 0; bottom: -20px; }
  @media (max-width: 480px) {
    /* Move badge inside the ring area so it doesn't clip */
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.stat-num {
  font-size: 26px;
  font-weight: 800;
  color: #1ca973;
  line-height: 1;
  letter-spacing: -1px;
}

.stat-label {
  font-size: 11px;
  color: rgba(255,255,255,0.38);
  line-height: 1.4;
  letter-spacing: 0.3px;
}

@keyframes wave-hand {
  0%, 100% { transform: rotate(-8deg); }
  50% { transform: rotate(18deg); }
}
</style>
