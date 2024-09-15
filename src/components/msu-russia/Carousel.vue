<script setup>
import {computed, ref, onMounted, onUpdated} from 'vue';
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

onUpdated(()=>{
  compare();
});
const changeCarousel = async (i) => {
  carousel.value = carouselList.value.find(card => card.id === i);
};

</script>

<template>
  <div v-if="dataLoaded" class="w100">
    <div class="flex items-end mb-[5%] gap-[15px]">
      <div class="md:w-auto w-full text-center md:text-[18px] m-auto mt-2 text-[18px] font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">Главные новости</div>
      <div class="md:flex-grow border-b-[2px] border-primary"></div>
    </div>
    <div class="grid grid-cols-4 gap-[50px]">
      <div class="md:col-span-3 col-span-4 flex flex-col gap-[15px]">
        <img :src="carousel.image || '/images/photo.jpg'" class="carouselImg h-[80%] w-[100%]"/>
        <RouterLink :to="link">
            <div class="md:text-[22px] text-[20px] font-somic text-black font-bold carouselTitle">
              {{ carousel.title }}
            </div>
            <div id="carouselText"
                 class="text-[16px] leading-[25px] font-somic text-gray-500 truncate-carousel">
              {{ carousel.text }}
            </div>
        </RouterLink>
      </div>
      <SideCarouselNewsBlock :data="carouselList" class="md:flex w-[100%] hidden" @chosen="changeCarousel"/>
    </div>
  </div>
  <Loader v-else/>
</template>

<style>
.truncate-carousel {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
  height: auto;
}

</style>

<script>
// setTimeout(() => compare(), 1000);

function compare() {
  const panels = document.getElementsByClassName('sidePanel')[0].offsetHeight;
  let panelHeight = panels;
  // for (let i = 0; i<panels.length; i++){
  //   panelHeight += panels[i].offsetHeight;
  // }
  let textHeight, textCount;
  const carouselHeight = document.getElementsByClassName('carouselImg')[0]?.height;
  const titleHeight = document.getElementsByClassName('carouselTitle')[0]?.offsetHeight;
  console.log(panelHeight - carouselHeight - titleHeight)

  if (panelHeight - carouselHeight - titleHeight >= 0) {
    textHeight = (panelHeight - carouselHeight - titleHeight) - ((panelHeight - carouselHeight - titleHeight)%25);
    textCount = Math.floor(textHeight / 25);
  }
  else {
    console.log('tut')
    textHeight = 110;
    textCount = 5;
  }
  document.getElementsByClassName('truncate-carousel')[0]?.style.setProperty('-webkit-line-clamp', textCount);
  document.getElementsByClassName('truncate-carousel')[0]?.style.setProperty('height', `${textHeight}px`);
  document.getElementsByClassName('sidePanel')[0]?.style.setProperty('height', `${textHeight+titleHeight+carouselHeight}px`);
  // document.getElementsByClassName('truncate-carousel')[0].height = `${textHeight}px`;
}

window.onresize = function() {
  compare();
};
</script>