<script setup>
</script>

<template>
  <section class="hero">
    <div class="d-flex">
      <div class="profile-img col-6">
        <img class="profile" src="../assets/profile.jpeg" alt="Moiz Zaidi" />
      </div>
      <div class="hero-content col-6">
        <h1>Behind the Lens</h1>
        <h3>Director, Producer & Creative</h3>
        <p>
          Moiz Zaidi is a visionary filmmaker and commercial director with over a decade of
          experience, celebrated for his unparalleled talent in crafting visually captivating
          narratives. With a master's degree in filmmaking from the esteemed Punjab University,
          Lahore, Moiz Zaidi’s mastery of visual storytelling knows no bounds.
        </p>
        <p>
          Renowned for his ability to breathe life into concepts, Moiz has collaborated with
          industry giants like Hyundai, Toyota, Peugeot, Kia, MG, Suzuki, Coca-Cola, Unilever,
          and Procter & Gamble, along with many other international brands, consistently
          delivering exceptional results tailored to their unique brand identities.
        </p>
        <p>
          His global footprint and innate adaptability enable him to seamlessly navigate
          international projects, infusing his work with a cosmopolitan flair. Beyond TV
          commercials, Moiz Zaidi’s creative repertoire extends to narrative work and feature
          films, each bearing his distinctive touch.
        </p>
        <p>
          Driven by an unyielding passion for innovation, Moiz Zaidi remains at the forefront of
          industry trends, consistently exceeding expectations with flawless productions that leave
          an indelible mark on audiences worldwide.
        </p>
      </div>
    </div>
  </section>
  <section>
    <div class="behind-the-scene container">
      <h1>Behind The Scenes</h1>
      <div class="masonry">
        <img src="../assets/bts/bts-1.jpeg" />
        <img src="../assets/bts/bts-2.jpeg" />
        <img src="../assets/bts/bts-3.jpeg" />
        <img src="../assets/bts/bts-4.jpeg" />
        <img src="../assets/bts/bts-5.jpeg" />
        <img src="../assets/bts/bts-6.jpeg" />
        <img src="../assets/bts/bts-7.jpeg" />
        <img src="../assets/bts/bts-8.jpeg" />
        <img src="../assets/bts/bts-9.jpeg" />
        <img src="../assets/bts/bts-10.jpeg" />
        <img src="../assets/bts/bts-11.jpeg" />
        <img src="../assets/bts/bts-12.jpeg" />
        <img src="../assets/bts/bts-13.jpeg" />
        <img src="../assets/bts/bts-14.jpeg" />
        <img src="../assets/bts/bts-15.jpeg" />
        <img src="../assets/bts/bts-16.jpeg" />
        <img src="../assets/bts/bts-17.jpeg" />
        <img src="../assets/bts/bts-18.jpeg" />
        <img src="../assets/bts/bts-19.jpeg" />
        <img src="../assets/bts/bts-20.jpeg" />
        <img src="../assets/bts/bts-21.jpeg" />
        <img src="../assets/bts/bts-22.jpeg" />
        <img src="../assets/bts/bts-23.jpeg" />
        <img src="../assets/bts/bts-24.jpeg" />
        <img src="../assets/bts/bts-25.jpeg" />
        <img src="../assets/bts/bts-26.jpeg" />
        <img src="../assets/bts/bts-27.jpeg" />
        <img src="../assets/bts/bts-28.jpeg" />
        <img src="../assets/bts/bts-29.jpeg" />
        <img src="../assets/bts/bts-30.jpeg" />
        <img src="../assets/bts/bts-31.jpeg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: #484747;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;
  padding-top: 200px;

  .hero-content {
    h1 {
      color: #ffffff;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      letter-spacing: 0px;
      font-size: 35px;
      padding-left: 20px;
      line-height: 35px;
    }

    h3 {
      color: #ffffff;
      font-family: "Poppins", sans-serif;
      letter-spacing: 0px;
      font-size: 18px;
      padding-left: 20px;
      margin-bottom: 10px;
    }

    p {
      font-family: "Poppins", sans-serif;
      color: #fff;
      width: 70%;
      font-size: 16px;
      padding-left: 20px;
    }
  }

  .profile-img {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 500px;
    .profile {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }
}

.behind-the-scene {
    padding: 20px;
  h1 {
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    letter-spacing: 0px;
    font-size: 35px;
    line-height: 35px;
    text-align: center;
    margin-bottom: 50px;
  }

  .masonry {
    -moz-column-count:3;
    -moz-column-gap: 10px;
    -moz-column-width: 30%;
    -webkit-column-count:3;
    -webkit-column-gap: 10px;
    -webkit-column-width: 30%;
    column-count: 3;
    column-gap: 10px;
    column-width: 30%;

    img {
      width: 100%;
      display: block;
      margin: 10px;
    }
  }
}
</style>
