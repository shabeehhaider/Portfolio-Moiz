<script setup>
</script>

<template>
  <section class="hero">
    <div class="hero-content col-6">
        <h1>Hey <img class="hand" src="../assets/hand.png" alt="hand" /> <br>I'm Moiz Zaidi</h1>
    </div>
    <div class="profile-img col-6">
        <img class="profile" src="../assets/moiz.jpeg" alt="Moiz Zaidi" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: #0e0e0e;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  gap: 100px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -20px;
  z-index: 4;
  position: relative;

  .hero-content {
    margin-top: 140px;
    
    .hand {
      width: 50px;
      animation: wave-hand 2s ease-in-out infinite;
    }

    h1 {
      color: #ffffff;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      letter-spacing: 0px;
      line-height: 60px;
      font-size: 35px;
    }

    p {
      font-family: "Poppins", sans-serif;
      color: #fefefe7a;
      width: 70%;
      font-size: 16px;
    }
  }

  div {
    &.profile-img {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      margin-top: 140px;
    }

    .profile {
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
      object-fit: contain;
    }
  }

  @keyframes wave-hand {
    0%, 100% {
      transform: rotate(-10deg);
    }
    50% {
      transform: rotate(20deg); // Small rotation degree to mimic a waving motion
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    padding: 30px;
    gap: 50px;

    .hero-content {
      margin-top: 0;

      h1 {
        font-size: 30px;
        line-height: 50px;
      }

      p {
        width: 80%;
        font-size: 14px;
      }
    }

    .profile-img {
      width: 250px;
      height: 250px;
      margin-top: 0;
    }
  }

  @media (max-width: 768px) {
    .hero-content {
      h1 {
        font-size: 25px;
        line-height: 40px;
      }

      p {
        width: 90%;
        font-size: 12px;
      }
    }

    .profile-img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    gap: 30px;

    .hero-content {
      h1 {
        font-size: 20px;
        line-height: 30px;
      }

      p {
        width: 100%;
        font-size: 10px;
      }
    }

    .profile-img {
     margin-top: 0 !important;
    }
  }
}
</style>

