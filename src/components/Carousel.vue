<script setup>
import {computed, ref, onMounted} from 'vue';
import SideCarouselNewsBlock from '@/components/SideCarouselNewsBlock.vue';
import useApiNews from '@/use/api/news';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const {getGrandNews} = useApiNews();

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const carouselList = ref([]);
const carousel = ref({});

onMounted(async()=>{
  carouselList.value = await getGrandNews();
  carousel.value = carouselList.value[0];
  carouselList.value[0].image = 'azarov-talking.png';
  carouselList.value[1].image = 'azarov-man.png';
  carouselList.value[2].image = 'azarov-red.png';
  carouselList.value[3].image = 'azarov-table.png';
})

const dataLoaded = ref(false);


const changeCarousel = (i) => {
  carousel.value = carouselList.value.find(card => card.id === i);
};

</script>

<template>
  <div class="w100">
    <div class="flex items-end mb-[30px] gap-[15px]">
      <div class="w-auto md:text-[18px] text-[26px] font-somic text-black font-semibold">Главные новости</div>
      <div class="flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="md:col-span-3 col-span-4 flex flex-col gap-[15px]">
        <img :src="'/images/'+carousel.image" class="carouselImg"/>
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
</template>

<style>
.truncate-carousel {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

</style>

<script>
setTimeout(() => compare(), 500);

function compare() {
  const panels = document.getElementsByClassName('classNews');
  let panelHeight = -20;
  for (let i = 0; i<panels.length; i++){
    panelHeight += panels[i].offsetHeight + 20;
  }
  let textHeight, textCount;
  const carouselHeight = document.getElementsByClassName('carouselImg')[0].height;
  const titleHeight = document.getElementsByClassName('carouselTitle')[0].offsetHeight;
  if (panelHeight - carouselHeight - titleHeight >= 0) {
    textHeight = (panelHeight - carouselHeight - titleHeight) - ((panelHeight - carouselHeight - titleHeight)%25);
    textCount = Math.floor(textHeight / 25);
  }
  else {
    textHeight = 100;
    textCount = 4;
  }
  document.getElementsByClassName('truncate-carousel')[0].style.setProperty('-webkit-line-clamp', textCount);
  document.getElementsByClassName('truncate-carousel')[0].style.setProperty('height', `${textHeight}px`);
  document.getElementsByClassName('truncate-carousel')[0].height = `${textHeight}px`;
}

window.onresize = function () {
  compare();
};
</script>