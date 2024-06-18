<template>
  <section class="work">
    <h1>Work</h1>
    <div class="btns">
      <button @click="showAll" :class="{ active: activeCategory === 'all' }">All</button>
      <button @click="showcommercials" :class="{ active: activeCategory === 'commercials' }">TV Commercials</button>
      <button @click="showDocumentary" :class="{ active: activeCategory === 'documentary' }">Documentary</button>
      <button @click="showMusic" :class="{ active: activeCategory === 'music' }">Music Video</button>
      <button @click="showFeatureFilm" :class="{ active: activeCategory === 'featureFilm' }">Feature Film</button>
    </div>
    <div v-if="activeCategory === 'all'" class="work-images">
      <div v-for="(item, index) in allVideos" :key="index" class="work-link col-3">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
    </div>
    <div v-if="activeCategory === 'commercials'" class="work-images">
      <div v-for="(item, index) in commercialsVideos" :key="index" class="work-link col-3">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
    </div>
    <div v-if="activeCategory === 'documentary'" class="work-images">
      <div v-for="(item, index) in documentaryVideos" :key="index" class="work-link col-3">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
    </div>
    <div v-if="activeCategory === 'music'" class="work-images">
      <div v-for="(item, index) in musicVideos" :key="index" class="work-link col-3">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
    </div>
    <div v-if="activeCategory === 'featureFilm'" class="work-images">
      <div v-for="(item, index) in featureFilmVideos" :key="index" class="work-link col-3">
        <img :src="item.image" @click="openIframe(item.video)" />
      </div>
    </div>
    <div v-if="iframeVisible" class="iframe-modal" @click="closeIframe">
      <div class="iframe-container" @click.stop>
        <iframe :src="iframeSrc" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue';

// Initialize active category to 'all'
const activeCategory = ref('all');

// Define the array of image paths
// Define the array of videos with image paths and video links
const allVideos = ref([
  { image: '/src/assets/my-work/kia.png', video: 'https://player.vimeo.com/video/954996067' },
  { image: '/src/assets/my-work/peugeot.jpeg', video: 'https://player.vimeo.com/video/954995426' },
  { image: '/src/assets/my-work/netflix.jpeg', video: 'https://player.vimeo.com/video/954994541' },
  { image: '/src/assets/my-work/revo.jpeg', video: 'https://player.vimeo.com/video/954992368' },
  { image: '/src/assets/my-work/toyota-yaris-entertainment.jpeg', video: 'https://player.vimeo.com/video/954986732' },
  { image: '/src/assets/my-work/yaris.jpeg', video: 'https://player.vimeo.com/video/954985999' },
  { image: '/src/assets/my-work/rawalpindi.png', video: 'https://www.youtube.com/embed/cTul7pWWNXM?si=GhOT7Dz_vRjTkn3g' },
  { image: '/src/assets/my-work/mobily-sequence-1.png', video: 'https://www.youtube.com/embed/P2mWFCLSoEI?si=viCRo72rXQowfFUp' },
  { image: '/src/assets/my-work/mobily-sequence-2.png', video: 'https://www.youtube.com/embed/hRF0YapBVoA?si=PaGnY6zdUAlQPhgz' },
  { image: '/src/assets/my-work/mobily-sequence-3.png', video: 'https://www.youtube.com/embed/_WXC_BCwPwk?si=ijSZOm0qywHcZz51' },
  { image: '/src/assets/my-work/mobily-sequence-4.png', video: 'https://www.youtube.com/embed/cGYQimv2NUI?si=m3-TLcBtD6f564lE' },
  { image: '/src/assets/my-work/toyota-yaris-is-fuel-efficient.jpeg', video: 'https://player.vimeo.com/video/954983038' },
  { image: '/src/assets/my-work/customer-experience-at-hyundai.jpeg', video: 'https://player.vimeo.com/video/954981783' },
  { image: '/src/assets/my-work/hyundai-after-sales-experience-customer-stories.jpeg', video: 'https://player.vimeo.com/video/954980403' },
  { image: '/src/assets/my-work/hyundai-central-aftersales.jpeg', video: 'https://player.vimeo.com/video/954979807' },
  { image: '/src/assets/my-work/MG.jpeg', video: 'https://player.vimeo.com/video/954977536' },
  { image: '/src/assets/my-work/MG.jpeg', video: 'https://player.vimeo.com/video/954976224' },
  { image: '/src/assets/my-work/mg-anthem.jpeg', video: 'https://player.vimeo.com/video/954972354' },
  { image: '/src/assets/my-work/KIA-power-to-surprise.jpeg', video: 'https://player.vimeo.com/video/954970987' },
  { image: '/src/assets/my-work/KIA-motors.jpeg', video: 'https://player.vimeo.com/video/954967139' },
  { image: '/src/assets/my-work/samsung-Z-fold.jpeg', video: 'https://player.vimeo.com/video/954961656' },
  { image: '/src/assets/my-work/samsungS24.jpeg', video: 'https://player.vimeo.com/video/954959656' },
  { image: '/src/assets/my-work/sprite-apni-pyaas.jpeg', video: 'https://player.vimeo.com/video/954958154' },
  { image: '/src/assets/my-work/jab-sab-kuch-easy-paisa-se-hojaye-toh-karo-kuchbhi.jpeg', video: 'https://player.vimeo.com/video/954957138' },
  { image: '/src/assets/my-work/easy-paisa-film4-of-7.jpeg', video: 'https://player.vimeo.com/video/954956461' },
  { image: '/src/assets/my-work/easy-paisa-film3-of-7.jpeg', video: 'https://player.vimeo.com/video/954954489' },
  { image: '/src/assets/my-work/Knorr - Fuzon.jpeg', video: 'https://player.vimeo.com/video/954389710' },
  { image: '/src/assets/my-work/Sprite - Traffic.jpeg', video: 'https://player.vimeo.com/video/954388970' },
  { image: '/src/assets/my-work/PSO - Quaid Day.jpeg', video: 'https://player.vimeo.com/video/954386031' },
  { image: '/src/assets/my-work/Nestle - Milkpak Ramzan.jpeg', video: 'https://player.vimeo.com/video/954383015' },
  { image: '/src/assets/my-work/Nestle - Milkpak.jpeg', video: 'https://player.vimeo.com/video/954382012' },
  { image: '/src/assets/my-work/Ufone - Data Bohhaaat Hai.jpeg', video: 'https://player.vimeo.com/video/954377608' },
  { image: '/src/assets/my-work/Ufone - Upaisa Faida Bohhaaat Hai.jpeg', video: 'https://player.vimeo.com/video/954376971' },
  { image: '/src/assets/my-work/zindagi-financial.jpeg', video: 'https://player.vimeo.com/video/952830327' },
  { image: '/src/assets/my-work/Zameen.com.jpeg', video: 'https://player.vimeo.com/video/952830229' },
  { image: '/src/assets/my-work/xcell-mobile.jpeg', video: 'https://player.vimeo.com/video/952830127' },
  { image: '/src/assets/my-work/tux-take.jpeg', video: 'https://player.vimeo.com/video/952830071' },
  { image: '/src/assets/my-work/toyota-corolla.jpeg', video: 'https://player.vimeo.com/video/952830024' },
  { image: '/src/assets/my-work/telenor-easy-paisa.jpeg', video: 'https://player.vimeo.com/video/952829983' },
  { image: '/src/assets/my-work/telenor-easy-paisa-0.jpeg', video: 'https://player.vimeo.com/video/952829929' },
  { image: '/src/assets/my-work/telenor-easy-paisa0.jpeg', video: 'https://player.vimeo.com/video/952829900' },
  { image: '/src/assets/my-work/telenor-4Gshaadi.jpeg', video: 'https://player.vimeo.com/video/952829862' },
  { image: '/src/assets/my-work/telenor-4Gcafe.jpeg', video: 'https://player.vimeo.com/video/952829814' },
  { image: '/src/assets/my-work/teefa-in-trouble-trailer.jpeg', video: 'https://player.vimeo.com/video/952829718' },
  { image: '/src/assets/my-work/teefa-trouble-teaser.jpeg', video: 'https://player.vimeo.com/video/952829678' },
  { image: '/src/assets/my-work/tapal-danedar-0.jpeg', video: 'https://player.vimeo.com/video/952829530' },
  { image: '/src/assets/my-work/tang-girl.jpeg', video: 'https://player.vimeo.com/video/952829493' },
  { image: '/src/assets/my-work/tang-boy.jpeg', video: 'https://player.vimeo.com/video/952829473' },
  { image: '/src/assets/my-work/suzuki-alto.jpeg', video: 'https://player.vimeo.com/video/952829422' },
  { image: '/src/assets/my-work/surf-excel-cricket.jpeg', video: 'https://player.vimeo.com/video/952829380' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh.jpeg', video: 'https://player.vimeo.com/video/952829081' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh-3.jpeg', video: 'https://player.vimeo.com/video/952829065' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh-1.jpeg', video: 'https://player.vimeo.com/video/952829033' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh-2.jpeg', video: 'https://player.vimeo.com/video/952829011' },
  { image: '/src/assets/my-work/sprite-ramadan.jpeg', video: 'https://player.vimeo.com/video/952828519' },
  { image: '/src/assets/my-work/sprite-karahi.jpeg', video: 'https://player.vimeo.com/video/952828443' },
  { image: '/src/assets/my-work/sprite-apni-pyas-ko-sprite-kr.jpeg', video: 'https://player.vimeo.com/video/952828399' },
  { image: '/src/assets/my-work/sooper-hamesha-wala-pyar.jpeg', video: 'https://player.vimeo.com/video/952828315' },
  { image: '/src/assets/my-work/shoop-trust-tou-must-hai.jpeg', video: 'https://player.vimeo.com/video/952828134' },
  { image: '/src/assets/my-work/shoop-improved-flavors.jpeg', video: 'https://player.vimeo.com/video/952828096' },
  { image: '/src/assets/my-work/shoop-chotoo-pack.jpeg', video: 'https://player.vimeo.com/video/952828057' },
  { image: '/src/assets/my-work/safeguard-soap.jpeg', video: 'https://player.vimeo.com/video/952828022' },
  { image: '/src/assets/my-work/PTCL-truly-unlimited.jpeg', video: 'https://player.vimeo.com/video/952827950' },
  { image: '/src/assets/my-work/PTCL-flash-fiber.jpeg', video: 'https://player.vimeo.com/video/952827905' },
  { image: '/src/assets/my-work/pel-wedding-jackpot.jpeg', video: 'https://player.vimeo.com/video/952827821' },
  { image: '/src/assets/my-work/Panther Tyres - King 56.jpeg', video: 'https://player.vimeo.com/video/952827765' },
  { image: '/src/assets/my-work/National Foods - Sister.jpeg', video: 'https://player.vimeo.com/video/952827523' },
  { image: '/src/assets/my-work/National Foods - Office.jpeg', video: 'https://player.vimeo.com/video/952827433' },
  { image: '/src/assets/my-work/National Foods - Ketchup.jpeg', video: 'https://player.vimeo.com/video/952827341' },
  { image: '/src/assets/my-work/National Foods - Ketchup.jpeg', video: 'https://player.vimeo.com/video/952827290' },
  { image: '/src/assets/my-work/McDonald’s - Yeh Such Hai.jpeg', video: 'https://player.vimeo.com/video/952827227' },
  { image: '/src/assets/my-work/Max - Lemon Max Bar.jpeg', video: 'https://player.vimeo.com/video/952827197' },
  { image: '/src/assets/my-work/Lifebuoy - Neem aur Haldi.jpeg', video: 'https://player.vimeo.com/video/952827178' },
  { image: '/src/assets/my-work/Lemon Max - Long Bar.jpeg', video: 'https://player.vimeo.com/video/952826192' },
  { image: '/src/assets/my-work/Lemon Max - Karahi.jpeg', video: 'https://player.vimeo.com/video/952826047' },
  { image: '/src/assets/my-work/Lays University.jpeg', video: 'https://player.vimeo.com/video/952825999' },
  { image: '/src/assets/my-work/Lays - Smile.jpeg', video: 'https://player.vimeo.com/video/952825837' },
  { image: '/src/assets/my-work/Lays - Friends.jpeg', video: 'https://player.vimeo.com/video/952825790' },
  { image: '/src/assets/my-work/Kia - Stonic Play It Young(0).jpeg', video: 'https://player.vimeo.com/video/952825710' },
  { image: '/src/assets/my-work/Kia - Stonic Play It Young.jpeg', video: 'https://player.vimeo.com/video/952825400' },
  { image: '/src/assets/my-work/kia-picanto.jpeg', video: 'https://player.vimeo.com/video/952825358' },
  { image: '/src/assets/my-work/Kashmir Oil - Heritage.jpeg', video: 'https://player.vimeo.com/video/952825285' },
  { image: '/src/assets/my-work/Kashmir Oil - Guests.jpeg', video: 'https://player.vimeo.com/video/952825231' },
  { image: '/src/assets/my-work/K&Ns-Parcham.jpeg', video: 'https://player.vimeo.com/video/952825103' },
  { image: '/src/assets/my-work/Jazz Cash - Payment Gateway(0).jpeg', video: 'https://player.vimeo.com/video/952824893' },
  { image: '/src/assets/my-work/Jazz Cash - Payment Gateway.jpeg', video: 'https://player.vimeo.com/video/952824873' },
  { image: '/src/assets/my-work/Jazz Cash - Online Payments.jpeg', video: 'https://player.vimeo.com/video/952824848' },
  { image: '/src/assets/my-work/Jazz Cash - Money Transfer.jpeg', video: 'https://player.vimeo.com/video/952824797' },
  { image: '/src/assets/my-work/Jazz Cash - Debit Card.jpeg', video: 'https://player.vimeo.com/video/952824687' },
  { image: '/src/assets/my-work/Inovative - Butter Crunch.jpeg', video: 'https://player.vimeo.com/video/952824484' },
  { image: '/src/assets/my-work/Hilal Cup Kake - Superhero.jpeg', video: 'https://player.vimeo.com/video/952824385' },
  { image: '/src/assets/my-work/Hilal Cup Kake - Superhero.jpeg', video: 'https://player.vimeo.com/video/952824356' },
  { image: '/src/assets/my-work/Hilal Cup Kake - Superhero.jpeg', video: 'https://player.vimeo.com/video/952824308' },
  { image: '/src/assets/my-work/Gluco - Juniors.jpeg', video: 'https://player.vimeo.com/video/952824280' },
  { image: '/src/assets/my-work/Food Panda Boys.jpeg', video: 'https://player.vimeo.com/video/952824252' },
  { image: '/src/assets/my-work/Embrace - Womanhood.jpeg', video: 'https://player.vimeo.com/video/952824218' },
  { image: '/src/assets/my-work/EBM - Temple Run.jpeg', video: 'https://player.vimeo.com/video/952824005' },
  { image: '/src/assets/my-work/Easy Paisa - Pin Chor.jpeg', video: 'https://player.vimeo.com/video/952823956' },
  { image: '/src/assets/my-work/Dulux ICI - Mileage.jpeg', video: 'https://player.vimeo.com/video/952820223' },
  { image: '/src/assets/my-work/Diamond Supreme Foam - Guarantee.jpeg', video: 'https://player.vimeo.com/video/952820022' },
  { image: '/src/assets/my-work/Coca Cola - Hum Aik Hain.jpeg', video: 'https://player.vimeo.com/video/952819684' },
  { image: '/src/assets/my-work/Candyland - Novella.jpeg', video: 'https://player.vimeo.com/video/952819634' },
  { image: '/src/assets/my-work/Cadbury - Moro.jpeg', video: 'https://player.vimeo.com/video/952819498' },
  { image: '/src/assets/my-work/Cadbury - Dairy Milk.jpeg', video: 'https://player.vimeo.com/video/952819479' },
  { image: '/src/assets/my-work/Bonus - Ziada.jpeg', video: 'https://player.vimeo.com/video/952819381' },
  { image: '/src/assets/my-work/Bata - Surprisingly Bata.jpeg', video: 'https://player.vimeo.com/video/952819301' },
  { image: '/src/assets/my-work/Bank Alfalah - Orbits.jpeg', video: 'https://player.vimeo.com/video/952819198' },
  { image: '/src/assets/my-work/Shehzad Roy Song Balochistan tadpolefilms.jpeg', video: 'https://player.vimeo.com/video/952818362' },
  
]);

const commercialsVideos = ref([
  { image: '/src/assets/my-work/mobily-sequence-1.png', video: 'https://www.youtube.com/embed/P2mWFCLSoEI?si=viCRo72rXQowfFUp' },
  { image: '/src/assets/my-work/mobily-sequence-2.png', video: 'https://www.youtube.com/embed/hRF0YapBVoA?si=PaGnY6zdUAlQPhgz' },
  { image: '/src/assets/my-work/mobily-sequence-3.png', video: 'https://www.youtube.com/embed/_WXC_BCwPwk?si=ijSZOm0qywHcZz51' },
  { image: '/src/assets/my-work/mobily-sequence-4.png', video: 'https://www.youtube.com/embed/cGYQimv2NUI?si=m3-TLcBtD6f564lE' },
  { image: '/src/assets/my-work/kia.png', video: 'https://player.vimeo.com/video/954996067' },
  { image: '/src/assets/my-work/peugeot.jpeg', video: 'https://player.vimeo.com/video/954995426' },
  { image: '/src/assets/my-work/revo.jpeg', video: 'https://player.vimeo.com/video/954992368' },
  { image: '/src/assets/my-work/toyota-yaris-entertainment.jpeg', video: 'https://player.vimeo.com/video/954986732' },
  { image: '/src/assets/my-work/yaris.jpeg', video: 'https://player.vimeo.com/video/954985999' },
  { image: '/src/assets/my-work/MG.jpeg', video: 'https://player.vimeo.com/video/954977536' },
  { image: '/src/assets/my-work/MG.jpeg', video: 'https://player.vimeo.com/video/954976224' },
  { image: '/src/assets/my-work/mg-anthem.jpeg', video: 'https://player.vimeo.com/video/954972354' },
  { image: '/src/assets/my-work/KIA-power-to-surprise.jpeg', video: 'https://player.vimeo.com/video/954970987' },
  { image: '/src/assets/my-work/KIA-motors.jpeg', video: 'https://player.vimeo.com/video/954967139' },
  { image: '/src/assets/my-work/samsung-Z-fold.jpeg', video: 'https://player.vimeo.com/video/954961656' },
  { image: '/src/assets/my-work/samsungS24.jpeg', video: 'https://player.vimeo.com/video/954959656' },
  { image: '/src/assets/my-work/sprite-apni-pyaas.jpeg', video: 'https://player.vimeo.com/video/954958154' },
  { image: '/src/assets/my-work/jab-sab-kuch-easy-paisa-se-hojaye-toh-karo-kuchbhi.jpeg', video: 'https://player.vimeo.com/video/954957138' },
  { image: '/src/assets/my-work/easy-paisa-film4-of-7.jpeg', video: 'https://player.vimeo.com/video/954956461' },
  { image: '/src/assets/my-work/easy-paisa-film3-of-7.jpeg', video: 'https://player.vimeo.com/video/954954489' },
  { image: '/src/assets/my-work/Knorr - Fuzon.jpeg', video: 'https://player.vimeo.com/video/954389710' },
  { image: '/src/assets/my-work/Sprite - Traffic.jpeg', video: 'https://player.vimeo.com/video/954388970' },
  { image: '/src/assets/my-work/PSO - Quaid Day.jpeg', video: 'https://player.vimeo.com/video/954386031' },
  { image: '/src/assets/my-work/Nestle - Milkpak Ramzan.jpeg', video: 'https://player.vimeo.com/video/954383015' },
  { image: '/src/assets/my-work/Nestle - Milkpak.jpeg', video: 'https://player.vimeo.com/video/954382012' },
  { image: '/src/assets/my-work/Ufone - Data Bohhaaat Hai.jpeg', video: 'https://player.vimeo.com/video/954377608' },
  { image: '/src/assets/my-work/Ufone - Upaisa Faida Bohhaaat Hai.jpeg', video: 'https://player.vimeo.com/video/954376971' },
  { image: '/src/assets/my-work/zindagi-financial.jpeg', video: 'https://player.vimeo.com/video/952830327' },
  { image: '/src/assets/my-work/Zameen.com.jpeg', video: 'https://player.vimeo.com/video/952830229' },
  { image: '/src/assets/my-work/xcell-mobile.jpeg', video: 'https://player.vimeo.com/video/952830127' },
  { image: '/src/assets/my-work/tux-take.jpeg', video: 'https://player.vimeo.com/video/952830071' },
  { image: '/src/assets/my-work/toyota-corolla.jpeg', video: 'https://player.vimeo.com/video/952830024' },
  { image: '/src/assets/my-work/telenor-easy-paisa.jpeg', video: 'https://player.vimeo.com/video/952829983' },
  { image: '/src/assets/my-work/telenor-easy-paisa-0.jpeg', video: 'https://player.vimeo.com/video/952829929' },
  { image: '/src/assets/my-work/telenor-easy-paisa0.jpeg', video: 'https://player.vimeo.com/video/952829900' },
  { image: '/src/assets/my-work/telenor-4Gshaadi.jpeg', video: 'https://player.vimeo.com/video/952829862' },
  { image: '/src/assets/my-work/telenor-4Gcafe.jpeg', video: 'https://player.vimeo.com/video/952829814' },
  { image: '/src/assets/my-work/tapal-danedar-0.jpeg', video: 'https://player.vimeo.com/video/952829530' },
  { image: '/src/assets/my-work/tang-girl.jpeg', video: 'https://player.vimeo.com/video/952829493' },
  { image: '/src/assets/my-work/tang-boy.jpeg', video: 'https://player.vimeo.com/video/952829473' },
  { image: '/src/assets/my-work/suzuki-alto.jpeg', video: 'https://player.vimeo.com/video/952829422' },
  { image: '/src/assets/my-work/surf-excel-cricket.jpeg', video: 'https://player.vimeo.com/video/952829380' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh.jpeg', video: 'https://player.vimeo.com/video/952829081' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh-3.jpeg', video: 'https://player.vimeo.com/video/952829065' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh-1.jpeg', video: 'https://player.vimeo.com/video/952829033' },
  { image: '/src/assets/my-work/sprite–wooo-sahhh-2.jpeg', video: 'https://player.vimeo.com/video/952829011' },
  { image: '/src/assets/my-work/sprite-ramadan.jpeg', video: 'https://player.vimeo.com/video/952828519' },
  { image: '/src/assets/my-work/sprite-karahi.jpeg', video: 'https://player.vimeo.com/video/952828443' },
  { image: '/src/assets/my-work/sprite-apni-pyas-ko-sprite-kr.jpeg', video: 'https://player.vimeo.com/video/952828399' },
  { image: '/src/assets/my-work/sooper-hamesha-wala-pyar.jpeg', video: 'https://player.vimeo.com/video/952828315' },
  { image: '/src/assets/my-work/shoop-trust-tou-must-hai.jpeg', video: 'https://player.vimeo.com/video/952828134' },
  { image: '/src/assets/my-work/shoop-improved-flavors.jpeg', video: 'https://player.vimeo.com/video/952828096' },
  { image: '/src/assets/my-work/shoop-chotoo-pack.jpeg', video: 'https://player.vimeo.com/video/952828057' },
  { image: '/src/assets/my-work/safeguard-soap.jpeg', video: 'https://player.vimeo.com/video/952828022' },
  { image: '/src/assets/my-work/PTCL-truly-unlimited.jpeg', video: 'https://player.vimeo.com/video/952827950' },
  { image: '/src/assets/my-work/PTCL-flash-fiber.jpeg', video: 'https://player.vimeo.com/video/952827905' },
  { image: '/src/assets/my-work/pel-wedding-jackpot.jpeg', video: 'https://player.vimeo.com/video/952827821' },
  { image: '/src/assets/my-work/Panther Tyres - King 56.jpeg', video: 'https://player.vimeo.com/video/952827765' },
  { image: '/src/assets/my-work/National Foods - Sister.jpeg', video: 'https://player.vimeo.com/video/952827523' },
  { image: '/src/assets/my-work/National Foods - Office.jpeg', video: 'https://player.vimeo.com/video/952827433' },
  { image: '/src/assets/my-work/National Foods - Ketchup.jpeg', video: 'https://player.vimeo.com/video/952827341' },
  { image: '/src/assets/my-work/National Foods - Ketchup.jpeg', video: 'https://player.vimeo.com/video/952827290' },
  { image: '/src/assets/my-work/McDonald’s - Yeh Such Hai.jpeg', video: 'https://player.vimeo.com/video/952827227' },
  { image: '/src/assets/my-work/Max - Lemon Max Bar.jpeg', video: 'https://player.vimeo.com/video/952827197' },
  { image: '/src/assets/my-work/Lifebuoy - Neem aur Haldi.jpeg', video: 'https://player.vimeo.com/video/952827178' },
  { image: '/src/assets/my-work/Lemon Max - Long Bar.jpeg', video: 'https://player.vimeo.com/video/952826192' },
  { image: '/src/assets/my-work/Lemon Max - Karahi.jpeg', video: 'https://player.vimeo.com/video/952826047' },
  { image: '/src/assets/my-work/Lays University.jpeg', video: 'https://player.vimeo.com/video/952825999' },
  { image: '/src/assets/my-work/Lays - Smile.jpeg', video: 'https://player.vimeo.com/video/952825837' },
  { image: '/src/assets/my-work/Lays - Friends.jpeg', video: 'https://player.vimeo.com/video/952825790' },
  { image: '/src/assets/my-work/Kia - Stonic Play It Young(0).jpeg', video: 'https://player.vimeo.com/video/952825710' },
  { image: '/src/assets/my-work/Kia - Stonic Play It Young.jpeg', video: 'https://player.vimeo.com/video/952825400' },
  { image: '/src/assets/my-work/kia-picanto.jpeg', video: 'https://player.vimeo.com/video/952825358' },
  { image: '/src/assets/my-work/Kashmir Oil - Heritage.jpeg', video: 'https://player.vimeo.com/video/952825285' },
  { image: '/src/assets/my-work/Kashmir Oil - Guests.jpeg', video: 'https://player.vimeo.com/video/952825231' },
  { image: '/src/assets/my-work/K&Ns-Parcham.jpeg', video: 'https://player.vimeo.com/video/952825103' },
  { image: '/src/assets/my-work/Jazz Cash - Payment Gateway(0).jpeg', video: 'https://player.vimeo.com/video/952824893' },
  { image: '/src/assets/my-work/Jazz Cash - Payment Gateway.jpeg', video: 'https://player.vimeo.com/video/952824873' },
  { image: '/src/assets/my-work/Jazz Cash - Online Payments.jpeg', video: 'https://player.vimeo.com/video/952824848' },
  { image: '/src/assets/my-work/Jazz Cash - Money Transfer.jpeg', video: 'https://player.vimeo.com/video/952824797' },
  { image: '/src/assets/my-work/Jazz Cash - Debit Card.jpeg', video: 'https://player.vimeo.com/video/952824687' },
  { image: '/src/assets/my-work/Inovative - Butter Crunch.jpeg', video: 'https://player.vimeo.com/video/952824484' },
  { image: '/src/assets/my-work/Hilal Cup Kake - Superhero.jpeg', video: 'https://player.vimeo.com/video/952824385' },
  { image: '/src/assets/my-work/Hilal Cup Kake - Superhero.jpeg', video: 'https://player.vimeo.com/video/952824356' },
  { image: '/src/assets/my-work/Hilal Cup Kake - Superhero.jpeg', video: 'https://player.vimeo.com/video/952824308' },
  { image: '/src/assets/my-work/Gluco - Juniors.jpeg', video: 'https://player.vimeo.com/video/952824280' },
  { image: '/src/assets/my-work/Food Panda Boys.jpeg', video: 'https://player.vimeo.com/video/952824252' },
  { image: '/src/assets/my-work/Embrace - Womanhood.jpeg', video: 'https://player.vimeo.com/video/952824218' },
  { image: '/src/assets/my-work/EBM - Temple Run.jpeg', video: 'https://player.vimeo.com/video/952824005' },
  { image: '/src/assets/my-work/Easy Paisa - Pin Chor.jpeg', video: 'https://player.vimeo.com/video/952823956' },
  { image: '/src/assets/my-work/Dulux ICI - Mileage.jpeg', video: 'https://player.vimeo.com/video/952820223' },
  { image: '/src/assets/my-work/Diamond Supreme Foam - Guarantee.jpeg', video: 'https://player.vimeo.com/video/952820022' },
  { image: '/src/assets/my-work/Coca Cola - Hum Aik Hain.jpeg', video: 'https://player.vimeo.com/video/952819684' },
  { image: '/src/assets/my-work/Candyland - Novella.jpeg', video: 'https://player.vimeo.com/video/952819634' },
  { image: '/src/assets/my-work/Cadbury - Moro.jpeg', video: 'https://player.vimeo.com/video/952819498' },
  { image: '/src/assets/my-work/Cadbury - Dairy Milk.jpeg', video: 'https://player.vimeo.com/video/952819479' },
  { image: '/src/assets/my-work/Bonus - Ziada.jpeg', video: 'https://player.vimeo.com/video/952819381' },
  { image: '/src/assets/my-work/Bata - Surprisingly Bata.jpeg', video: 'https://player.vimeo.com/video/952819301' },
  { image: '/src/assets/my-work/Bank Alfalah - Orbits.jpeg', video: 'https://player.vimeo.com/video/952819198' },
  
]);

const documentaryVideos = ref([
  { image: '/src/assets/my-work/hyundai-after-sales-experience-customer-stories.jpeg', video: 'https://player.vimeo.com/video/954980403' },
  { image: '/src/assets/my-work/hyundai-central-aftersales.jpeg', video: 'https://player.vimeo.com/video/954979807' },
  { image: '/src/assets/my-work/MG.jpeg', video: 'https://player.vimeo.com/video/954977536' },
  { image: '/src/assets/my-work/MG.jpeg', video: 'https://player.vimeo.com/video/954976224' },
]);

const musicVideos = ref([
{ image: '/src/assets/my-work/Coca Cola - Hum Aik Hain.jpeg', video: 'https://player.vimeo.com/video/952819684' },
{ image: '/src/assets/my-work/Shehzad Roy Song Balochistan tadpolefilms.jpeg', video: 'https://player.vimeo.com/video/952818362' },

]);

const featureFilmVideos = ref([
  { image: '/src/assets/my-work/teefa-in-trouble-trailer.jpeg', video: 'https://player.vimeo.com/video/952829718' },
  { image: '/src/assets/my-work/teefa-trouble-teaser.jpeg', video: 'https://player.vimeo.com/video/952829678' },
  { image: '/src/assets/my-work/rawalpindi.png', video: 'https://www.youtube.com/embed/cTul7pWWNXM?si=GhOT7Dz_vRjTkn3g' },

]);

// Functions to set active category
const showAll = () => {
  activeCategory.value = 'all';
};

const showcommercials = () => {
  activeCategory.value = 'commercials';
};

const showDocumentary = () => {
  activeCategory.value = 'documentary';
};


const showMusic = () => {
  activeCategory.value = 'music';
};

const showFeatureFilm = () => {
  activeCategory.value = 'featureFilm';
};

const iframeVisible = ref(false);
const iframeSrc = ref('');

const openIframe = (src) => {
  iframeSrc.value = src;
  iframeVisible.value = true;
};

const closeIframe = () => {
  iframeVisible.value = false;
  iframeSrc.value = '';
};
</script>

<style lang="scss" scoped>
.work {
  background: #17241e;
  padding: 200px 0px;
  position: relative;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  h1 {
    color: #fefefe;
    font-size: 24px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    text-align: center;
  }

  .btns {
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 10px;

    .explore-btn {
      background: #28e98c;
      color: #fff;
      border: 0;
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #1ca973;
      }
    }
  }

  button {
    background: transparent;
    color: #fff;
    border: 0;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;

    &.active {
      border-bottom: 1px solid;
    }
  }

  .work-images {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 50px;

    .work-link {
      border-radius: 20px;
      overflow: hidden;
      height: 200px;


      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.iframe-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .iframe-container {
    position: relative;
    width: 80%;
    height: 80%;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
