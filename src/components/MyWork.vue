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
const activeCategory = ref('all');
import kiaImage from '/src/assets/my-work/kia.png';
import peugeotImage from '/src/assets/my-work/peugeot.jpeg';
import netflixImage from '/src/assets/my-work/netflix.jpeg';
import revoImage from '/src/assets/my-work/revo.jpeg';
import toyotaYarisEntertainmentImage from '/src/assets/my-work/toyota-yaris-entertainment.jpeg';
import yarisImage from '/src/assets/my-work/yaris.jpeg';
import rawalpindiImage from '/src/assets/my-work/rawalpindi.png';
import mobilySequence1Image from '/src/assets/my-work/mobily-sequence-1.png';
import mobilySequence2Image from '/src/assets/my-work/mobily-sequence-2.png';
import mobilySequence3Image from '/src/assets/my-work/mobily-sequence-3.png';
import mobilySequence4Image from '/src/assets/my-work/mobily-sequence-4.png';
import toyotaYarisFuelEfficientImage from '/src/assets/my-work/toyota-yaris-is-fuel-efficient.jpeg';
import customerExperienceAtHyundaiImage from '/src/assets/my-work/customer-experience-at-hyundai.jpeg';
import hyundaiAfterSalesExperienceCustomerStoriesImage from '/src/assets/my-work/hyundai-after-sales-experience-customer-stories.jpeg';
import hyundaiCentralAftersalesImage from '/src/assets/my-work/hyundai-central-aftersales.jpeg';
import MG1Image from '/src/assets/my-work/MG.jpeg';
import MG2Image from '/src/assets/my-work/MG.jpeg';
import mgAnthemImage from '/src/assets/my-work/mg-anthem.jpeg';
import KIAPowerToSurpriseImage from '/src/assets/my-work/KIA-power-to-surprise.jpeg';
import KIAMotorsImage from '/src/assets/my-work/KIA-motors.jpeg';
import samsungZFoldImage from '/src/assets/my-work/samsung-Z-fold.jpeg';
import samsungS24Image from '/src/assets/my-work/samsungS24.jpeg';
import spriteApniPyasImage from '/src/assets/my-work/sprite-apni-pyaas.jpeg';
import easyPaisaFilm4Of7Image from '/src/assets/my-work/easy-paisa-film4-of-7.jpeg';
import easyPaisaFilm3Of7Image from '/src/assets/my-work/easy-paisa-film3-of-7.jpeg';
import KnorrFuzonImage from '/src/assets/my-work/knorr-fuzon.jpeg';
import spriteTrafficImage from '/src/assets/my-work/sprite-traffic.jpeg';
import PSOQuaidDayImage from '/src/assets/my-work/PSO-quaid-day.jpeg';
import NestleMilkpakRamzanImage from '/src/assets/my-work/nestle-milkpak-ramzan.jpeg';
import NestleMilkpakImage from '/src/assets/my-work/nestle-milkpak.jpeg';
import UfoneDataBohhaaatHaiImage from '/src/assets/my-work/ufone-data-bohhaaat-hai.jpeg';
import UfoneUpaisaFaidaBohhaaatHaiImage from '/src/assets/my-work/ufone-upaisa-faida-bohhaaat-hai.jpeg';
import zindagiFinancialImage from '/src/assets/my-work/zindagi-financial.jpeg';
import zameenDotComImage from '/src/assets/my-work/zameen-dot-com.jpeg';
import xcellMobileImage from '/src/assets/my-work/xcell-mobile.jpeg';
import tuxTakeImage from '/src/assets/my-work/tux-take.jpeg';
import toyotaCorollaImage from '/src/assets/my-work/toyota-corolla.jpeg';
import telenorEasyPaisaImage from '/src/assets/my-work/telenor-easy-paisa.jpeg';
import telenorEasyPaisa0Image from '/src/assets/my-work/telenor-easy-paisa0.jpeg';
import telenor4GshaadiImage from '/src/assets/my-work/telenor-4Gshaadi.jpeg';
import telenor4GcafeImage from '/src/assets/my-work/telenor-4Gcafe.jpeg';
import teefaInTroubleTrailerImage from '/src/assets/my-work/teefa-in-trouble-trailer.jpeg';
import teefaTroubleTeaserImage from '/src/assets/my-work/teefa-trouble-teaser.jpeg';
import tapalDanedar0Image from '/src/assets/my-work/tapal-danedar0.jpeg';
import tangGirlImage from '/src/assets/my-work/tang-girl.jpeg';
import tangBoyImage from '/src/assets/my-work/tang-boy.jpeg';
import suzukiAltoImage from '/src/assets/my-work/suzuki-alto.jpeg';
import surfExcelCricketImage from '/src/assets/my-work/surf-excel-cricket.jpeg';
import spriteWoooSahhhImage from '/src/assets/my-work/sprite-wooo-sahhh.jpeg';
import spriteWoooSahhh3Image from '/src/assets/my-work/sprite–wooo-sahhh-3.jpeg';
import spriteWoooSahhh1Image from '/src/assets/my-work/sprite–wooo-sahhh-1.jpeg';
import spriteWoooSahhh2Image from '/src/assets/my-work/sprite–wooo-sahhh-2.jpeg';
import spriteRamadanImage from '/src/assets/my-work/sprite-ramadan.jpeg';
import spriteKarahiImage from '/src/assets/my-work/sprite-karahi.jpeg';
import spriteApniPyasKoSpriteKrImage from '/src/assets/my-work/sprite-apni-pyas-ko-sprite-kr.jpeg';
import sooperHameshaWalaPyarImage from '/src/assets/my-work/sooper-hamesha-wala-pyar.jpeg';
import shoopTrustTouMustHaiImage from '/src/assets/my-work/shoop-trust-tou-must-hai.jpeg';
import shoopImprovedFlavorsImage from '/src/assets/my-work/shoop-improved-flavors.jpeg';
import shoopChotooPackImage from '/src/assets/my-work/shoop-chotoo-pack.jpeg';
import safeguardSoapImage from '/src/assets/my-work/safeguard-soap.jpeg';
import PTCLTrulyUnlimitedImage from '/src/assets/my-work/PTCL-truly-unlimited.jpeg';
import PTCLFlashFiberImage from '/src/assets/my-work/PTCL-flash-fiber.jpeg';
import pelWeddingJackpotImage from '/src/assets/my-work/pel-wedding-jackpot.jpeg';
import PantherTyresKing56Image from '/src/assets/my-work/panther-tyres-king56.jpeg';
import nationalFoodsSisterImage from '/src/assets/my-work/national-foods-sister.jpeg';
import nationalFoodsOfficeImage from '/src/assets/my-work/national-foods-office.jpeg';
import nationalFoodsKetchup1Image from '/src/assets/my-work/national-foods-ketchup.jpeg';
import nationalFoodsKetchup2Image from '/src/assets/my-work/national-foods-ketchup.jpeg';
import mcdonaldsYehSuchHaiImage from '/src/assets/my-work/mcdonalds-yeh-such-hai.jpeg';
import maxLemonMaxBarImage from '/src/assets/my-work/max-lemon-max-bar.jpeg';
import lifebuoyNeemAurHaldiImage from '/src/assets/my-work/lifebuoy-neem-aur-haldi.jpeg';
import lemonMaxLongBarImage from '/src/assets/my-work/lemon-max-long-bar.jpeg';
import lemonMaxKarahiImage from '/src/assets/my-work/lemon-max-karahi.jpeg';
import laysUniversityImage from '/src/assets/my-work/lays-university.jpeg';
import laysSmileImage from '/src/assets/my-work/lays-smile.jpeg';
import laysFriendsImage from '/src/assets/my-work/lays-friends.jpeg';
import kiaStonicPlayItYoung0Image from '/src/assets/my-work/kia-stonic-play-it-young0.jpeg';
import kiaStonicPlayItYoungImage from '/src/assets/my-work/kia-stonic-play-it-young.jpeg';
import kiaPicantoImage from '/src/assets/my-work/kia-picanto.jpeg';
import kashmirOilHeritageImage from '/src/assets/my-work/kashmir-oil-heritage.jpeg';
import kashmirOilGuestsImage from '/src/assets/my-work/kashmir-oil-guests.jpeg';
import kAndNsParchamImage from '/src/assets/my-work/kAndNs-parcham.jpeg';
import jazzCashPaymentGateway0Image from '/src/assets/my-work/jazz-cash-payment-gateway0.jpeg';
import jazzCashPaymentGatewayImage from '/src/assets/my-work/jazz-cash-payment-gateway.jpeg';
import jazzCashOnlinePaymentsImage from '/src/assets/my-work/jazz-cash-online-payments.jpeg';
import jazzCashMoneyTransferImage from '/src/assets/my-work/jazz-cash-money-transfer.jpeg';
import jazzCashDebitCardImage from '/src/assets/my-work/jazz-cash-debit-card.jpeg';
import inovativeButterCrunchImage from '/src/assets/my-work/inovative-butter-crunch.jpeg';
import hilalCupKakeSuperhero1Image from '/src/assets/my-work/hilal-cup-kake-superhero.jpeg';
import hilalCupKakeSuperhero2Image from '/src/assets/my-work/hilal-cup-kake-superhero.jpeg';
import hilalCupKakeSuperhero3Image from '/src/assets/my-work/hilal-cup-kake-superhero.jpeg';
import glucoJuniorsImage from '/src/assets/my-work/gluco-juniors.jpeg';
import foodPandaBoysImage from '/src/assets/my-work/food-panda-boys.jpeg';
import embraceWomanhoodImage from '/src/assets/my-work/embrace-womanhood.jpeg';
import ebmTempleRunImage from '/src/assets/my-work/ebm-temple-run.jpeg';
import easyPaisaPinChorImage from '/src/assets/my-work/easy-paisa-pin-chor.jpeg';
import duluxICIMileageImage from '/src/assets/my-work/dulux-ICI-mileage.jpeg';
import diamondSupremeFoamGuaranteeImage from '/src/assets/my-work/diamond-supreme-foam-guarantee.jpeg';
import cocaColaHumAikHainImage from '/src/assets/my-work/coca-cola-hum-aik-hain.jpeg';
import candylandNovellaImage from '/src/assets/my-work/candyland-novella.jpeg';
import cadburyMoroImage from '/src/assets/my-work/cadbury-moro.jpeg';
import cadburyDairyMilkImage from '/src/assets/my-work/cadbury-dairy-milk.jpeg';
import bonusZiadaImage from '/src/assets/my-work/bonus-ziada.jpeg';
import bataSurprisinglyBataImage from '/src/assets/my-work/bata-surprisingly-bata.jpeg';
import bankAlfalahOrbitsImage from '/src/assets/my-work/bank-alfalah-orbits.jpeg';
import shehzadRoySongBalochistanTadpolefilmsImage from '/src/assets/my-work/shehzad-roy-song-balochistan-tadpolefilms.jpeg';




const allVideos = ref([
  { image: kiaImage, video: 'https://player.vimeo.com/video/954996067' },
  { image: peugeotImage, video: 'https://player.vimeo.com/video/954995426' },
  { image: netflixImage, video: 'https://player.vimeo.com/video/954994541' },
  { image: revoImage, video: 'https://player.vimeo.com/video/954992368' },
  { image: toyotaYarisEntertainmentImage, video: 'https://player.vimeo.com/video/954986732' },
  { image: yarisImage, video: 'https://player.vimeo.com/video/954985999' },
  { image: rawalpindiImage, video: 'https://www.youtube.com/embed/cTul7pWWNXM?si=GhOT7Dz_vRjTkn3g' },
  { image: mobilySequence1Image, video: 'https://www.youtube.com/embed/P2mWFCLSoEI?si=viCRo72rXQowfFUp' },
  { image: mobilySequence2Image, video: 'https://www.youtube.com/embed/hRF0YapBVoA?si=PaGnY6zdUAlQPhgz' },
  { image: mobilySequence3Image, video: 'https://www.youtube.com/embed/_WXC_BCwPwk?si=ijSZOm0qywHcZz51' },
  { image: mobilySequence4Image, video: 'https://www.youtube.com/embed/cGYQimv2NUI?si=m3-TLcBtD6f564lE' },
  { image: toyotaYarisFuelEfficientImage, video: 'https://player.vimeo.com/video/954983038' },
  { image: customerExperienceAtHyundaiImage, video: 'https://player.vimeo.com/video/954981783' },
  { image: hyundaiAfterSalesExperienceCustomerStoriesImage, video: 'https://player.vimeo.com/video/954980403' },
  { image: hyundaiCentralAftersalesImage, video: 'https://player.vimeo.com/video/954979807' },
  { image: MG1Image, video: 'https://player.vimeo.com/video/954977536' },
  { image: MG2Image, video: 'https://player.vimeo.com/video/954976224' },
  { image: mgAnthemImage, video: 'https://player.vimeo.com/video/954972354' },
  { image: KIAPowerToSurpriseImage, video: 'https://player.vimeo.com/video/954970987' },
  { image: KIAMotorsImage, video: 'https://player.vimeo.com/video/954967139' },
  { image: samsungZFoldImage, video: 'https://player.vimeo.com/video/954961656' },
  { image: samsungS24Image, video: 'https://player.vimeo.com/video/954959656' },
  { image: spriteApniPyasImage, video: 'https://player.vimeo.com/video/954958154' },
  { image: easyPaisaFilm4Of7Image, video: 'https://player.vimeo.com/video/954956461' },
  { image: easyPaisaFilm3Of7Image, video: 'https://player.vimeo.com/video/954954489' },
  { image: KnorrFuzonImage, video: 'https://player.vimeo.com/video/954389710' },
  { image: spriteTrafficImage, video: 'https://player.vimeo.com/video/954388970' },
  { image: PSOQuaidDayImage, video: 'https://player.vimeo.com/video/954386031' },
  { image: NestleMilkpakRamzanImage, video: 'https://player.vimeo.com/video/954383015' },
  { image: NestleMilkpakImage, video: 'https://player.vimeo.com/video/954382012' },
  { image: UfoneDataBohhaaatHaiImage, video: 'https://player.vimeo.com/video/954377608' },
  { image: UfoneUpaisaFaidaBohhaaatHaiImage, video: 'https://player.vimeo.com/video/954376971' },
  { image: zindagiFinancialImage, video: 'https://player.vimeo.com/video/952830327' },
  { image: zameenDotComImage, video: 'https://player.vimeo.com/video/952830229' },
  { image: xcellMobileImage, video: 'https://player.vimeo.com/video/952830127' },
  { image: tuxTakeImage, video: 'https://player.vimeo.com/video/952830071' },
  { image: toyotaCorollaImage, video: 'https://player.vimeo.com/video/952830024' },
  { image: telenorEasyPaisaImage, video: 'https://player.vimeo.com/video/952829983' },
  { image: telenorEasyPaisa0Image, video: 'https://player.vimeo.com/video/952829929' },
  { image: telenorEasyPaisa0Image, video: 'https://player.vimeo.com/video/952829900' },
  { image: telenor4GshaadiImage, video: 'https://player.vimeo.com/video/952829862' },
  { image: telenor4GcafeImage, video: 'https://player.vimeo.com/video/952829814' },
  { image: teefaInTroubleTrailerImage, video: 'https://player.vimeo.com/video/952829718' },
  { image: teefaTroubleTeaserImage, video: 'https://player.vimeo.com/video/952829678' },
  { image: tapalDanedar0Image, video: 'https://player.vimeo.com/video/952829530' },
  { image: tangGirlImage, video: 'https://player.vimeo.com/video/952829493' },
  { image: tangBoyImage, video: 'https://player.vimeo.com/video/952829473' },
  { image: suzukiAltoImage, video: 'https://player.vimeo.com/video/952829422' },
  { image: surfExcelCricketImage, video: 'https://player.vimeo.com/video/952829380' },
  { image: spriteWoooSahhhImage, video: 'https://player.vimeo.com/video/952829081' },
  { image: spriteWoooSahhh3Image, video: 'https://player.vimeo.com/video/952829065' },
  { image: spriteWoooSahhh1Image, video: 'https://player.vimeo.com/video/952829033' },
  { image: spriteWoooSahhh2Image, video: 'https://player.vimeo.com/video/952829011' },
  { image: spriteRamadanImage, video: 'https://player.vimeo.com/video/952828519' },
  { image: spriteKarahiImage, video: 'https://player.vimeo.com/video/952828443' },
  { image: spriteApniPyasKoSpriteKrImage, video: 'https://player.vimeo.com/video/952828399' },
  { image: sooperHameshaWalaPyarImage, video: 'https://player.vimeo.com/video/952828315' },
  { image: shoopTrustTouMustHaiImage, video: 'https://player.vimeo.com/video/952828134' },
  { image: shoopImprovedFlavorsImage, video: 'https://player.vimeo.com/video/952828096' },
  { image: shoopChotooPackImage, video: 'https://player.vimeo.com/video/952828057' },
  { image: safeguardSoapImage, video: 'https://player.vimeo.com/video/952828022' },
  { image: PTCLTrulyUnlimitedImage, video: 'https://player.vimeo.com/video/952827950' },
  { image: PTCLFlashFiberImage, video: 'https://player.vimeo.com/video/952827905' },
  { image: pelWeddingJackpotImage, video: 'https://player.vimeo.com/video/952827821' },
  { image: PantherTyresKing56Image, video: 'https://player.vimeo.com/video/952827765' },
  { image: nationalFoodsSisterImage, video: 'https://player.vimeo.com/video/952827523' },
  { image: nationalFoodsOfficeImage, video: 'https://player.vimeo.com/video/952827433' },
  { image: nationalFoodsKetchup1Image, video: 'https://player.vimeo.com/video/952827341' },
  { image: nationalFoodsKetchup2Image, video: 'https://player.vimeo.com/video/952827290' },
  { image: mcdonaldsYehSuchHaiImage, video: 'https://player.vimeo.com/video/952827227' },
  { image: maxLemonMaxBarImage, video: 'https://player.vimeo.com/video/952827197' },
  { image: lifebuoyNeemAurHaldiImage, video: 'https://player.vimeo.com/video/952827178' },
  { image: lemonMaxLongBarImage, video: 'https://player.vimeo.com/video/952826192' },
  { image: lemonMaxKarahiImage, video: 'https://player.vimeo.com/video/952826047' },
  { image: laysUniversityImage, video: 'https://player.vimeo.com/video/952825999' },
  { image: laysSmileImage, video: 'https://player.vimeo.com/video/952825837' },
  { image: laysFriendsImage, video: 'https://player.vimeo.com/video/952825790' },
  { image: kiaStonicPlayItYoung0Image, video: 'https://player.vimeo.com/video/952825710' },
  { image: kiaStonicPlayItYoungImage, video: 'https://player.vimeo.com/video/952825400' },
  { image: kiaPicantoImage, video: 'https://player.vimeo.com/video/952825358' },
  { image: kashmirOilHeritageImage, video: 'https://player.vimeo.com/video/952825285' },
  { image: kashmirOilGuestsImage, video: 'https://player.vimeo.com/video/952825231' },
  { image: kAndNsParchamImage, video: 'https://player.vimeo.com/video/952825103' },
  { image: jazzCashPaymentGateway0Image, video: 'https://player.vimeo.com/video/952824893' },
  { image: jazzCashPaymentGatewayImage, video: 'https://player.vimeo.com/video/952824873' },
  { image: jazzCashOnlinePaymentsImage, video: 'https://player.vimeo.com/video/952824848' },
  { image: jazzCashMoneyTransferImage, video: 'https://player.vimeo.com/video/952824797' },
  { image: jazzCashDebitCardImage, video: 'https://player.vimeo.com/video/952824687' },
  { image: inovativeButterCrunchImage, video: 'https://player.vimeo.com/video/952824484' },
  { image: hilalCupKakeSuperhero1Image, video: 'https://player.vimeo.com/video/952824385' },
  { image: hilalCupKakeSuperhero2Image, video: 'https://player.vimeo.com/video/952824356' },
  { image: hilalCupKakeSuperhero3Image, video: 'https://player.vimeo.com/video/952824308' },
  { image: glucoJuniorsImage, video: 'https://player.vimeo.com/video/952824280' },
  { image: foodPandaBoysImage, video: 'https://player.vimeo.com/video/952824252' },
  { image: embraceWomanhoodImage, video: 'https://player.vimeo.com/video/952824218' },
  { image: ebmTempleRunImage, video: 'https://player.vimeo.com/video/952824005' },
  { image: easyPaisaPinChorImage, video: 'https://player.vimeo.com/video/952823956' },
  { image: duluxICIMileageImage, video: 'https://player.vimeo.com/video/952820223' },
  { image: diamondSupremeFoamGuaranteeImage, video: 'https://player.vimeo.com/video/952820022' },
  { image: cocaColaHumAikHainImage, video: 'https://player.vimeo.com/video/952819684' },
  { image: candylandNovellaImage, video: 'https://player.vimeo.com/video/952819634' },
  { image: cadburyMoroImage, video: 'https://player.vimeo.com/video/952819498' },
  { image: cadburyDairyMilkImage, video: 'https://player.vimeo.com/video/952819479' },
  { image: bonusZiadaImage, video: 'https://player.vimeo.com/video/952819381' },
  { image: bataSurprisinglyBataImage, video: 'https://player.vimeo.com/video/952819301' },
  { image: bankAlfalahOrbitsImage, video: 'https://player.vimeo.com/video/952819198' },
  { image: shehzadRoySongBalochistanTadpolefilmsImage, video: 'https://player.vimeo.com/video/952818362' },
]);

const commercialsVideos = ref([
  { image: kiaImage, video: 'https://player.vimeo.com/video/954996067' },
  { image: peugeotImage, video: 'https://player.vimeo.com/video/954995426' },
  { image: revoImage, video: 'https://player.vimeo.com/video/954992368' },
  { image: toyotaYarisEntertainmentImage, video: 'https://player.vimeo.com/video/954986732' },
  { image: yarisImage, video: 'https://player.vimeo.com/video/954985999' },
  { image: mobilySequence1Image, video: 'https://www.youtube.com/embed/P2mWFCLSoEI?si=viCRo72rXQowfFUp' },
  { image: mobilySequence2Image, video: 'https://www.youtube.com/embed/hRF0YapBVoA?si=PaGnY6zdUAlQPhgz' },
  { image: mobilySequence3Image, video: 'https://www.youtube.com/embed/_WXC_BCwPwk?si=ijSZOm0qywHcZz51' },
  { image: mobilySequence4Image, video: 'https://www.youtube.com/embed/cGYQimv2NUI?si=m3-TLcBtD6f564lE' },
  { image: toyotaYarisFuelEfficientImage, video: 'https://player.vimeo.com/video/954983038' },
  { image: customerExperienceAtHyundaiImage, video: 'https://player.vimeo.com/video/954981783' },
  { image: hyundaiAfterSalesExperienceCustomerStoriesImage, video: 'https://player.vimeo.com/video/954980403' },
  { image: hyundaiCentralAftersalesImage, video: 'https://player.vimeo.com/video/954979807' },
  { image: MG1Image, video: 'https://player.vimeo.com/video/954977536' },
  { image: MG2Image, video: 'https://player.vimeo.com/video/954976224' },
  { image: mgAnthemImage, video: 'https://player.vimeo.com/video/954972354' },
  { image: KIAPowerToSurpriseImage, video: 'https://player.vimeo.com/video/954970987' },
  { image: KIAMotorsImage, video: 'https://player.vimeo.com/video/954967139' },
  { image: samsungZFoldImage, video: 'https://player.vimeo.com/video/954961656' },
  { image: samsungS24Image, video: 'https://player.vimeo.com/video/954959656' },
  { image: spriteApniPyasImage, video: 'https://player.vimeo.com/video/954958154' },
  { image: easyPaisaFilm4Of7Image, video: 'https://player.vimeo.com/video/954956461' },
  { image: easyPaisaFilm3Of7Image, video: 'https://player.vimeo.com/video/954954489' },
  { image: KnorrFuzonImage, video: 'https://player.vimeo.com/video/954389710' },
  { image: spriteTrafficImage, video: 'https://player.vimeo.com/video/954388970' },
  { image: PSOQuaidDayImage, video: 'https://player.vimeo.com/video/954386031' },
  { image: NestleMilkpakRamzanImage, video: 'https://player.vimeo.com/video/954383015' },
  { image: NestleMilkpakImage, video: 'https://player.vimeo.com/video/954382012' },
  { image: UfoneDataBohhaaatHaiImage, video: 'https://player.vimeo.com/video/954377608' },
  { image: UfoneUpaisaFaidaBohhaaatHaiImage, video: 'https://player.vimeo.com/video/954376971' },
  { image: zindagiFinancialImage, video: 'https://player.vimeo.com/video/952830327' },
  { image: zameenDotComImage, video: 'https://player.vimeo.com/video/952830229' },
  { image: xcellMobileImage, video: 'https://player.vimeo.com/video/952830127' },
  { image: tuxTakeImage, video: 'https://player.vimeo.com/video/952830071' },
  { image: toyotaCorollaImage, video: 'https://player.vimeo.com/video/952830024' },
  { image: telenorEasyPaisaImage, video: 'https://player.vimeo.com/video/952829983' },
  { image: telenorEasyPaisa0Image, video: 'https://player.vimeo.com/video/952829929' },
  { image: telenorEasyPaisa0Image, video: 'https://player.vimeo.com/video/952829900' },
  { image: telenor4GshaadiImage, video: 'https://player.vimeo.com/video/952829862' },
  { image: telenor4GcafeImage, video: 'https://player.vimeo.com/video/952829814' },
  { image: tapalDanedar0Image, video: 'https://player.vimeo.com/video/952829530' },
  { image: tangGirlImage, video: 'https://player.vimeo.com/video/952829493' },
  { image: tangBoyImage, video: 'https://player.vimeo.com/video/952829473' },
  { image: suzukiAltoImage, video: 'https://player.vimeo.com/video/952829422' },
  { image: surfExcelCricketImage, video: 'https://player.vimeo.com/video/952829380' },
  { image: spriteWoooSahhhImage, video: 'https://player.vimeo.com/video/952829081' },
  { image: spriteWoooSahhh3Image, video: 'https://player.vimeo.com/video/952829065' },
  { image: spriteWoooSahhh1Image, video: 'https://player.vimeo.com/video/952829033' },
  { image: spriteWoooSahhh2Image, video: 'https://player.vimeo.com/video/952829011' },
  { image: spriteRamadanImage, video: 'https://player.vimeo.com/video/952828519' },
  { image: spriteKarahiImage, video: 'https://player.vimeo.com/video/952828443' },
  { image: spriteApniPyasKoSpriteKrImage, video: 'https://player.vimeo.com/video/952828399' },
  { image: sooperHameshaWalaPyarImage, video: 'https://player.vimeo.com/video/952828315' },
  { image: shoopTrustTouMustHaiImage, video: 'https://player.vimeo.com/video/952828134' },
  { image: shoopImprovedFlavorsImage, video: 'https://player.vimeo.com/video/952828096' },
  { image: shoopChotooPackImage, video: 'https://player.vimeo.com/video/952828057' },
  { image: safeguardSoapImage, video: 'https://player.vimeo.com/video/952828022' },
  { image: PTCLTrulyUnlimitedImage, video: 'https://player.vimeo.com/video/952827950' },
  { image: PTCLFlashFiberImage, video: 'https://player.vimeo.com/video/952827905' },
  { image: pelWeddingJackpotImage, video: 'https://player.vimeo.com/video/952827821' },
  { image: PantherTyresKing56Image, video: 'https://player.vimeo.com/video/952827765' },
  { image: nationalFoodsSisterImage, video: 'https://player.vimeo.com/video/952827523' },
  { image: nationalFoodsOfficeImage, video: 'https://player.vimeo.com/video/952827433' },
  { image: nationalFoodsKetchup1Image, video: 'https://player.vimeo.com/video/952827341' },
  { image: nationalFoodsKetchup2Image, video: 'https://player.vimeo.com/video/952827290' },
  { image: mcdonaldsYehSuchHaiImage, video: 'https://player.vimeo.com/video/952827227' },
  { image: maxLemonMaxBarImage, video: 'https://player.vimeo.com/video/952827197' },
  { image: lifebuoyNeemAurHaldiImage, video: 'https://player.vimeo.com/video/952827178' },
  { image: lemonMaxLongBarImage, video: 'https://player.vimeo.com/video/952826192' },
  { image: lemonMaxKarahiImage, video: 'https://player.vimeo.com/video/952826047' },
  { image: laysUniversityImage, video: 'https://player.vimeo.com/video/952825999' },
  { image: laysSmileImage, video: 'https://player.vimeo.com/video/952825837' },
  { image: laysFriendsImage, video: 'https://player.vimeo.com/video/952825790' },
  { image: kiaStonicPlayItYoung0Image, video: 'https://player.vimeo.com/video/952825710' },
  { image: kiaStonicPlayItYoungImage, video: 'https://player.vimeo.com/video/952825400' },
  { image: kiaPicantoImage, video: 'https://player.vimeo.com/video/952825358' },
  { image: kashmirOilHeritageImage, video: 'https://player.vimeo.com/video/952825285' },
  { image: kashmirOilGuestsImage, video: 'https://player.vimeo.com/video/952825231' },
  { image: kAndNsParchamImage, video: 'https://player.vimeo.com/video/952825103' },
  { image: jazzCashPaymentGateway0Image, video: 'https://player.vimeo.com/video/952824893' },
  { image: jazzCashPaymentGatewayImage, video: 'https://player.vimeo.com/video/952824873' },
  { image: jazzCashOnlinePaymentsImage, video: 'https://player.vimeo.com/video/952824848' },
  { image: jazzCashMoneyTransferImage, video: 'https://player.vimeo.com/video/952824797' },
  { image: jazzCashDebitCardImage, video: 'https://player.vimeo.com/video/952824687' },
  { image: inovativeButterCrunchImage, video: 'https://player.vimeo.com/video/952824484' },
  { image: hilalCupKakeSuperhero1Image, video: 'https://player.vimeo.com/video/952824385' },
  { image: hilalCupKakeSuperhero2Image, video: 'https://player.vimeo.com/video/952824356' },
  { image: hilalCupKakeSuperhero3Image, video: 'https://player.vimeo.com/video/952824308' },
  { image: glucoJuniorsImage, video: 'https://player.vimeo.com/video/952824280' },
  { image: foodPandaBoysImage, video: 'https://player.vimeo.com/video/952824252' },
  { image: embraceWomanhoodImage, video: 'https://player.vimeo.com/video/952824218' },
  { image: ebmTempleRunImage, video: 'https://player.vimeo.com/video/952824005' },
  { image: easyPaisaPinChorImage, video: 'https://player.vimeo.com/video/952823956' },
  { image: duluxICIMileageImage, video: 'https://player.vimeo.com/video/952820223' },
  { image: diamondSupremeFoamGuaranteeImage, video: 'https://player.vimeo.com/video/952820022' },
  { image: cocaColaHumAikHainImage, video: 'https://player.vimeo.com/video/952819684' },
  { image: candylandNovellaImage, video: 'https://player.vimeo.com/video/952819634' },
  { image: cadburyMoroImage, video: 'https://player.vimeo.com/video/952819498' },
  { image: cadburyDairyMilkImage, video: 'https://player.vimeo.com/video/952819479' },
  { image: bonusZiadaImage, video: 'https://player.vimeo.com/video/952819381' },
  { image: bataSurprisinglyBataImage, video: 'https://player.vimeo.com/video/952819301' },
  { image: bankAlfalahOrbitsImage, video: 'https://player.vimeo.com/video/952819198' },
  { image: shehzadRoySongBalochistanTadpolefilmsImage, video: 'https://player.vimeo.com/video/952818362' },
  
]);

const documentaryVideos = ref([
  { image: hyundaiAfterSalesExperienceCustomerStoriesImage, video: 'https://player.vimeo.com/video/954980403' },
  { image: hyundaiCentralAftersalesImage, video: 'https://player.vimeo.com/video/954979807' },
  { image: MG1Image, video: 'https://player.vimeo.com/video/954977536' },
  { image: MG2Image, video: 'https://player.vimeo.com/video/954976224' },
]);

const musicVideos = ref([
{ image: cocaColaHumAikHainImage, video: 'https://player.vimeo.com/video/952819684' },
{ image: shehzadRoySongBalochistanTadpolefilmsImage, video: 'https://player.vimeo.com/video/952818362' },

]);

const featureFilmVideos = ref([
  { image: rawalpindiImage, video: 'https://www.youtube.com/embed/cTul7pWWNXM?si=GhOT7Dz_vRjTkn3g' },
  { image: teefaInTroubleTrailerImage, video: 'https://player.vimeo.com/video/952829718' },
  { image: teefaTroubleTeaserImage, video: 'https://player.vimeo.com/video/952829678' },

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
  background: #0e0e0e;
  padding: 100px 0; /* Adjust padding for smaller screens */
  position: relative;
  margin-top: -20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 100vh;

  h1 {
    color: #fefefe;
    font-size: 24px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 30px; /* Add margin for spacing */
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
      font-size: 16px; /* Adjust font size for smaller screens */
      padding: 8px 16px; /* Adjust padding for smaller screens */
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
    font-size: 16px; /* Adjust font size for smaller screens */
    padding: 8px; /* Adjust padding for smaller screens */
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
    margin-top: 30px; /* Adjust margin for smaller screens */

    .work-link {
      border-radius: 20px;
      overflow: hidden;
      height: 150px; /* Adjust height for smaller screens */

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
    width: 90%; /* Adjust width for smaller screens */
    height: 90%; /* Adjust height for smaller screens */

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: 768px) {
  .work {
    padding: 80px 0; /* Example: Adjust padding for smaller devices */
    .btns {
      gap: 5px;
      flex-wrap: wrap;
      button{
        font-size: 14px;
        padding: 4px;
      }
    }
  }

  h1 {
    font-size: 20px; /* Example: Reduce font size for smaller devices */
  }

  .work-images {
    .work-link {
      height: 120px; /* Example: Adjust image height for smaller devices */
    }
  }

  .iframe-modal {
    .iframe-container {
      width: 100%; /* Example: Adjust modal width for smaller devices */
      height: 30%; /* Example: Adjust modal height for smaller devices */
    }
  }
}

@media (max-width: 480px) {
  .work {
    padding: 60px 0; /* Further adjustments for smaller screens */
  }

  h1 {
    font-size: 18px; /* Further reduce font size for smaller screens */
  }

  .btns {
      flex-wrap: wrap;
      gap: 5px;
      button{
        font-size: 14px;
        padding: 4px;
        gap: 4px;
      }
    }

  
  .work{
    .work-images {
      gap: 10px; /* Adjust gap between images for smaller screens */
      .work-link {
        height: 100px; /* Further adjust image height for smaller screens */
      }
    }
  }
  

  .iframe-modal {
    .iframe-container {
      width: 100%; /* Further adjust modal width for smaller screens */
      height: 30%; /* Further adjust modal height for smaller screens */
    }
  }
}
</style>

