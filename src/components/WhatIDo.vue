<template>
<section class="about">
  <div class="container">
    <div>
      <p class="what-i-do">What I Do</p>
      <h1 class="text-white mb-5 specializations">My Specializations</h1>
      <div class="boxes">
        <div class="box">
          <h3 class="text-white"> Direction
          </h3>
          <p class="text-white">
            With over a decade of experience in directing, I have honed my ability to tell compelling visual stories that engage and 
inspire. My work spans commercials, short films, and feature films, each project benefiting from my meticulous 
attention to detail and passion for storytelling. I excel in guiding actors and crew to bring out their best performances, 
ensuring that every scene aligns with the overarching narrative and aesthetic vision. My approach is collaborative, 
working closely with clients to ensure their vision is realized with precision and creativity.
          </p>
        </div>
        <div class="box">
          <h3 class="text-white">Production</h3>
          <p class="text-white"> In production, my role is to seamlessly orchestrate all elements of a project, from pre-production planning to post
production wrap-up. I pride myself on my ability to manage budgets, timelines, and resources effectively, ensuring 
that each project is delivered on time and within budget. My extensive network of industry professionals allows me to 
assemble the best teams for each project, ensuring high-quality output. I am adept at problem-solving and thrive in 
high-pressure environments, always maintaining a focus on delivering exceptional results.</p>
        </div>
        <div class="box">
          <h3 class="text-white">
            Creative
          </h3>
          <p class="text-white">Creativity is at the heart of everything I do. My ability to generate innovative ideas and transform them into 
captivating visual content sets me apart in the industry. Whether developing original concepts, crafting engaging 
scripts, or designing striking visuals, I bring a unique blend of artistic vision and practical expertise to every project. I 
stay ahead of industry trends and continuously seek new inspirations to ensure my work remains fresh and impactful. 
My creative process is highly collaborative, involving clients and teams to refine ideas and achieve the best possible 
outcome</p>
        </div>
        <div class="box-hire">
          <h1>
            Hire Me
          </h1>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.about {
  background-color: #484747;
  position: relative;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .container {
    padding: 50px;
    text-align: center;

    .what-i-do {
      color: #fefefe;
      font-size: 24px;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
    }

    h1.specializations {
      font-size: 90px;
      font-family: "Poppins", sans-serif;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 47%;
        bottom: 0;
        height: 2px;
        width: 60px;
        background-color: #fff;
      }
    }

    div.boxes {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      gap: 20px;

      .box {
        width: 500px;
        height: 300px;
        background: linear-gradient(108.44deg, rgba(255, 255, 255, 0.1) 20.99%, rgba(255, 255, 255, 0.025) 84.05%);
        display: flex;
        box-shadow: none;
        border-radius: 20px;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .box-hire {
        height: 300px;
        background: linear-gradient(108.44deg, rgba(255, 255, 255, 0.1) 20.99%, rgba(255, 255, 255, 0.025) 84.05%);
        display: flex;
        box-shadow: none;
        border-radius: 20px;
        padding: 40px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 300px;

        h1 {
          font-family: "Poppins", sans-serif;
          text-transform: uppercase;
          font-size: 100px;
          color: #28e98c;
          position: absolute;
          right: -170px;
          text-decoration: underline;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .container {
      padding: 40px;

      h1.specializations {
        font-size: 70px;

        &::after {
          left: 45%;
          width: 50px;
        }
      }

      .boxes .box {
        width: 45% !important;
        height: auto !important;
        padding: 30px !important;
        h3{
          font-size: 32px;
        }
      }

      .boxes .box-hire {
        width: 45% !important;
        h1 {
          font-size: 80px !important;
          right: -140px !important;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      padding: 30px;

      h1.specializations {
        font-size: 50px;

        &::after {
          left: 44%;
          width: 40px;
        }
      }

      .boxes .box,
      .boxes .box-hire {
        width: 100% !important;
        padding: 20px !important;
        margin-bottom: 20px !important;
        h3{
          font-size: 32px;
        }
      }

      .boxes .box-hire h1 {
        font-size: 60px !important;
        right: 0 !important;
        position:  relative !important;

      }
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 20px;

      h1.specializations {
        font-size: 35px;

        &::after {
          left: 43%;
          width: 30px;
        }
      }

      .boxes .box,
      .boxes .box-hire {
        width: 100% !important;
        padding: 15px !important;
        margin-bottom: 15px;
        h3{
          font-size: 32px;
        }
      }

      .boxes .box-hire h1 {
        font-size: 40px !important;
        text-decoration: none !important;
        position:  relative !important;
        right: 0 !important;
      }
    }
  }
}
</style>
