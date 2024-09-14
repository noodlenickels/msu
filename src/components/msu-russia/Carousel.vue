<script setup>
import {computed, ref, onMounted} from 'vue';
import SideCarouselNewsBlock from '@/components/msu-russia/SideCarouselNewsBlock.vue';
import Loader from '@/views/msu-russia/Loader.vue';
import usePhoto from '@/use/images';
import useApiRegion from "@/use/api/region";

const props = defineProps({
  carouselData: {
    type: Object,
    required: false,
  }
});

const carouselList = ref(props.carouselData);
const carousel = ref({});
const dataLoaded = ref(false);
const { getPhotoUrl } = usePhoto();

const link = computed(() => {
  return '/news/' + carousel.value.id;
});

onMounted(async () => {
  if (carouselList.value && carouselList.value.length > 0) {
    carousel.value = carouselList.value[0];
    carousel.value.photo = await getPhotoUrl(carousel.value.image);  // Получаем URL изображения при загрузке
    dataLoaded.value = true;
  }
});
const changeCarousel = async (i) => {
  carousel.value = carouselList.value.find(card => card.id === i);
};

</script>

<template>
  <div v-if="dataLoaded" class="w100">
    <div class="flex items-end mb-[5%] gap-[15px]">
      <div class="md:w-auto w-full text-center md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">Главные новости</div>
      <div class="md:flex-grow border-b-[2px] border-primary"></div>
    </div>
    <div class="grid grid-cols-4 gap-[50px]">
      <div class="md:col-span-3 col-span-4 flex flex-col gap-[15px]">
        <img :src="carousel.image || '/images/photo.jpg'" class="carouselImg h-[80%] w-[100%]"/>
      </div>
      <SideCarouselNewsBlock :data="carouselList" class="md:flex mb-10 w-[100%] h-[125%]  hidden" @chosen="changeCarousel"/>
    </div>
    <RouterLink :to="link">
    <div class="md:col-span-3 col-span-4">
      <div class="md:text-[22px] pt-12 md:w-[75%] text-[20px]  py-4 font-somic mt-[-75px] text-black font-bold carouselTitle">
        {{ carousel.title }}
      </div>
      <div id="carouselText"
           class="text-[16px] leading-[25px] md:w-[75%] font-somic text-gray-500 truncate-carousel">
        {{ carousel.text }}
      </div>
    </div>
    </RouterLink>
  </div>
  <Loader v-else/>
</template>

<style>
.truncate-carousel {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  height: 100px;
}

</style>

<script>
// setTimeout(() => compare(), 500);
//
// function compare() {
//   const panels = document.getElementsByClassName('classNews');
//   let panelHeight = -20;
//   for (let i = 0; i<panels.length; i++){
//     panelHeight += panels[i].offsetHeight + 20;
//   }
//   let textHeight, textCount;
//   const carouselHeight = document.getElementsByClassName('carouselImg')[0]?.height;
//   const titleHeight = document.getElementsByClassName('carouselTitle')[0]?.offsetHeight;
//   if (panelHeight - carouselHeight - titleHeight >= 0) {
//     textHeight = (panelHeight - carouselHeight - titleHeight) - ((panelHeight - carouselHeight - titleHeight)%25);
//     textCount = Math.floor(textHeight / 25);
//   }
//   else {
//     textHeight = 100;
//     textCount = 4;
//   }
//   document.getElementsByClassName('truncate-carousel')[0]?.style.setProperty('-webkit-line-clamp', textCount);
//   document.getElementsByClassName('truncate-carousel')[0]?.style.setProperty('height', `${textHeight}px`);
//   // document.getElementsByClassName('truncate-carousel')[0].height = `${textHeight}px`;
// }
//
// window.onresize = function () {
//   compare();
// };
</script>