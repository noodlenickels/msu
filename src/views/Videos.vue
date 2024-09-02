<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import Selection from "@/components/Selection.vue";
import Card from "@/components/cards/Card.vue";
import Footer from "@/components/Footer.vue";
import AddsBlock from "@/components/AddsBlock.vue";

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

const videoList = [
  {
    title: 'Рейд по неблагополучным семьям представителей администрации города Саратова',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video1.png'
  },
  {
    title: 'Саратов: готовность городских спортсооружений к работе в зимний период',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video2.png'
  },
  {
    title: 'Открытый городской турнир по кикбоксингу "Спорт - против наркотиков и детской проституции"',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video3.png'
  },
  {
    title: 'Публичные слушания по бюджету Саратова на 2009г',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video4.png'
  },
  {
    title: 'Принятие городской Думой новой системы оплаты труда работников бюджетных учреждений',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video5.png'
  },
  {
    title: 'Начало отопительного сезона в Саратове',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video6.png'
  },
  {
    title: 'Установка проборов учёта в Саратове',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video7.png'
  },
  {
    title: 'Встреча Губернатора Челябинской области Петра Сумина с главой Озерского городского округа Сергеем Чернышевым',
    source: 'Пресс-агенство "Информцентр"',
    image: 'videos/video8.png'
  }
];

onMounted(() => {
  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

const topMenu = ref(true);
const changeTopMenu = (val) => {
  topMenu.value = val;
}

</script>

<template>
<!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header @active="changeTopMenu"/>
  <TopMenu />
  <div class="flex flex-col px-[10%] gap-[25px] l:mb-[125px] mb-[75px]">
    <div class="flex gap-[15px]">
      <div class="w-auto text-[18px] font-somic text-black font-semibold">Видео</div>
      <div class="flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="l:col-span-3 col-span-4 grid grid-cols-12 gap-x-[25px] gap-y-[40px]">
        <Card v-for="video in videoList" class="md:col-span-6 col-span-12" :data="video" />
      </div>
      <AddsBlock class="l:col-span-1 l:flex hidden" />
    </div>
  </div>
  <Selection class="mb-[200px]"/>
  <Footer />
</template>

<!--<script>-->
<!--setTimeout(()=>{-->
<!--  const menu = document.getElementsByClassName('topMenuClass')[0];-->

<!--  if (window.innerWidth > 640) {-->
<!--    menu.classList.remove('hidden');-->
<!--  }-->

<!--  window.onresize = function() {-->
<!--    if (window.innerWidth > 640) {-->
<!--      menu.classList.remove('hidden');-->
<!--    }-->
<!--  }-->
<!--}, 1000);-->

<!--</script>-->