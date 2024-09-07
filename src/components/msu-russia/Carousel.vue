<script setup>
import {computed, ref, onMounted} from 'vue';
import SideCarouselNewsBlock from '@/components/msu-russia/SideCarouselNewsBlock.vue';
import Loader from '@/views/msu-russia/Loader.vue';
import useApiMain from '@/use/api/main';
import { storage } from '@/firebase';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

const props = defineProps({
  carouselData: {
    type: Object,
    required: false,
  }
});

async function getPhotoUrl(imagePath) {
  try {
    const imageRef = storageRef(storage, 'root_files' + imagePath);  // Создаем ссылку на файл в Firebase Storage
    const url = await getDownloadURL(imageRef);  // Получаем URL для изображения
    console.log(url)
    return url;
  } catch (error) {
    console.error("Ошибка при получении URL изображения:", error);
    return '/images/photo.jpg';  // Возвращаем дефолтное изображение в случае ошибки
  }
}

const carouselList = ref(props.carouselData);
const carousel = ref({});
const dataLoaded = ref(false);



onMounted(async () => {
  if (carouselList.value && carouselList.value.length > 0) {
    carousel.value = carouselList.value[0];
    carousel.value.photo = await getPhotoUrl(carousel.value.image);  // Получаем URL изображения при загрузке
    dataLoaded.value = true;
  }
});
const changeCarousel = async (i) => {
  carousel.value = carouselList.value.find(card => card.id === i);
  carousel.value.photo = await getPhotoUrl(carousel.value.image);  // Получаем URL изображения из Firebase Storage
};

</script>

<template>
  <div v-if="dataLoaded" class="w100">
    <div class="flex items-end mb-[30px] gap-[15px]">
      <div class="w-auto md:text-[18px] text-[26px] font-somic text-black font-semibold">Главные новости</div>
      <div class="flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="md:col-span-3 col-span-4 flex flex-col gap-[15px]">
        <img :src="carousel.photo || '/images/photo.jpg'" class="carouselImg"/>
        <div class="md:text-[30px] text-[26px] font-somic text-black font-bold carouselTitle">
          {{ carousel.title }}
        </div>
        <div id="carouselText"
             class="text-[16px] leading-[25px] font-somic text-gray-500 truncate-carousel">
          {{ carousel.text }}
        </div>
      </div>
      <SideCarouselNewsBlock :data="carouselList" class="md:flex hidden" @chosen="changeCarousel"/>
    </div>
  </div>
  <Loader v-else />
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