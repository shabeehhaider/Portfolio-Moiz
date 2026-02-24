<template>
  <!-- Bio section -->
  <section class="bts-bio">
    <div class="bio-inner">
      <div class="bio-image reveal-left" :class="{ visible: bioVisible }">
        <div class="img-frame">
          <img src="../assets/profile.jpeg" alt="Moiz Zaidi" class="profile" />
        </div>
      </div>
      <div class="bio-text reveal-right" :class="{ visible: bioVisible }">
        <span class="eyebrow">The Filmmaker</span>
        <h1>Behind the Lens</h1>
        <h3>Director · Producer · Creative</h3>
        <p>
          Moiz Zaidi is a visionary filmmaker and commercial director with over a decade of
          experience, celebrated for his unparalleled talent in crafting visually captivating
          narratives. With a master's degree in filmmaking from Punjab University, Lahore,
          his mastery of visual storytelling knows no bounds.
        </p>
        <p>
          Renowned for his ability to breathe life into concepts, Moiz has collaborated with
          industry giants like Hyundai, Toyota, Peugeot, Kia, MG, Suzuki, Coca-Cola, Unilever,
          and Procter &amp; Gamble, consistently delivering exceptional results tailored to
          their unique brand identities.
        </p>
        <p>
          His global footprint and innate adaptability enable him to seamlessly navigate
          international projects, infusing his work with a cosmopolitan flair. Driven by an
          unyielding passion for innovation, Moiz remains at the forefront of industry trends,
          consistently exceeding expectations with flawless productions.
        </p>
      </div>
    </div>
    <div ref="bioRef" class="bio-observer"></div>
  </section>

  <!-- Gallery section -->
  <section class="bts-gallery" ref="galleryRef">
    <div class="gallery-header reveal" :class="{ visible: galleryVisible }">
      <span class="eyebrow">Behind The Scenes</span>
      <h2>On Set</h2>
    </div>
    <div class="masonry">
      <div
        v-for="(img, idx) in btsImages"
        :key="idx"
        class="masonry-item"
        :class="{ visible: galleryVisible }"
        :style="{ transitionDelay: `${(idx % 6) * 0.06}s` }"
      >
        <img
          :src="img"
          :alt="`Behind the scenes ${idx + 1}`"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Load all BTS images via glob and sort numerically
const btsModules = import.meta.glob('../assets/bts/*.jpeg', { eager: true });
const btsImages = Object.entries(btsModules)
  .sort(([a], [b]) => {
    const nA = parseInt(a.match(/bts-(\d+)/)?.[1] || '0');
    const nB = parseInt(b.match(/bts-(\d+)/)?.[1] || '0');
    return nA - nB;
  })
  .map(([, mod]) => mod.default);

const bioRef = ref(null);
const galleryRef = ref(null);
const bioVisible = ref(false);
const galleryVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        bioVisible.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  const observer2 = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        galleryVisible.value = true;
        observer2.disconnect();
      }
    },
    { threshold: 0.05 }
  );

  if (bioRef.value) observer.observe(bioRef.value);
  if (galleryRef.value) observer2.observe(galleryRef.value);
});
</script>

<style lang="scss" scoped>
/* Bio */
.bts-bio {
  background: #080808;
  padding: 140px 80px 80px;
  position: relative;

  @media (max-width: 1024px) {
    padding: 120px 48px 60px;
  }
  @media (max-width: 768px) {
    padding: 100px 28px 50px;
  }
  @media (max-width: 480px) {
    padding: 90px 20px 40px;
  }
}

.bio-observer {
  position: absolute;
  top: 50%;
  left: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.bio-inner {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 80px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

.bio-image {
  .img-frame {
    border-radius: 20px;
    overflow: hidden;
    aspect-ratio: 3 / 4;
    background: #111;
  }

  .profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;

    &:hover { transform: scale(1.02); }
  }

  @media (max-width: 900px) {
    max-width: 360px;
  }
}

.bio-text {
  .eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent, #1ca973);
    margin-bottom: 16px;
  }

  h1 {
    font-size: clamp(32px, 5vw, 54px);
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
    line-height: 1.1;
    margin: 0 0 8px;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 1px;
    margin: 0 0 32px;
  }

  p {
    font-size: 15px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.55);
    line-height: 1.8;
    margin: 0 0 18px;

    &:last-child { margin-bottom: 0; }
  }
}

/* Gallery */
.bts-gallery {
  background: #080808;
  padding: 60px 80px 100px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 50px 28px 80px;
  }
  @media (max-width: 480px) {
    padding: 40px 16px 60px;
  }
}

.gallery-header {
  margin-bottom: 48px;

  .eyebrow {
    display: block;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--accent, #1ca973);
    margin-bottom: 12px;
  }

  h2 {
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
    margin: 0;
  }
}

.masonry {
  columns: 3;
  column-gap: 12px;

  @media (max-width: 768px) { columns: 2; }
  @media (max-width: 480px) { columns: 1; }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    width: 100%;
    display: block;
    transition: transform 0.4s ease;

    &:hover { transform: scale(1.02); }
  }
}
</style>
