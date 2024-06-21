<template>
<section class="container-fluid intro">
  <div class="intro-body">
    <h1>
      The Art of Cinematic Storytelling
    </h1>
    <p>
      With a decade of experience in filmmaking and commercial directing, I bring a wealth of expertise in creating captivating 
      narratives. Holding a master's degree in filmmaking from Punjab 
      University, Lahore, my journey is driven by passion and dedication.
      I specialize in the automobile industry, having directed and 
      conceptualized campaigns for brands like Hyundai, Toyota, Peugeot, 
      Kia, MG, and Suzuki. Beyond this, I have collaborated with industry 
      giants such as Coca-Cola, Unilever, and Procter & Gamble, along 
      with many other international brands, weaving stories that reflect the 
      human experience.
      My commitment to authenticity and innovation ensures each project 
      is a true reflection of my vision. From concept to screen, my work 
      speaks volumes, leaving a lasting impact on those who experience it.
    </p>
  </div>
</section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.intro {
  padding: 60px;
  background: #0e0e0e;
  text-align: center;

  .intro-body{
    width: 70%;
    margin: 90px auto;
  }

  @media (max-width: 1024px) {
    padding: 50px;
    width: 80%;
    margin: 70px auto;
  }

  @media (max-width: 768px) {
    padding: 40px;
    width: 90%;
    margin: 50px auto;
  }

  @media (max-width: 480px) {
    padding: 30px;
    width: 95%;
    margin: 30px auto;
    .intro-body{
      width: 100%;
      margin: 0;
    }
  }
}

h1 {
  font-size: 28px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  color: #fefefe;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
}

p {
  font-size: 18px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  white-space: pre-line;
  text-align: center;
  color: #fefefe;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
}
</style>
