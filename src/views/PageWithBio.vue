<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import Selection from "@/components/Selection.vue";
import Card from "@/components/cards/Card.vue";
import Footer from "@/components/Footer.vue";
import AddsBlock from "@/components/AddsBlock.vue";
import useApiMain from '@/use/api/main';
import useApiOpinion from '@/use/api/opinion';
import useApiPoint from '@/use/api/point';
import useApiInterview from '@/use/api/interview';
import {useRoute} from 'vue-router';


const {getOpinionById, getOpinionTopFour } = useApiOpinion();
const {getInterviewById, getInterviewTopFour} = useApiInterview();
const {getPointOfViewById, getPointOfViewTopFour} = useApiPoint();
const {getPhotoUrl} = useApiMain();

const route = useRoute();

const props = defineProps({
  type: {
    type: String,
    required: false,
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const pageData = ref({});
const personData = ref({});
const topFour = ref([]);
const photo = ref();

const dataLoaded = ref(false);

const id = route.params.id;
const topMenu = ref(true);
const changeTopMenu = (val) => {
  topMenu.value = val;
}

onMounted(async () => {
  switch (props.type) {
    case 'interview': {
      pageData.value = await getInterviewById(id);
      console.log(pageData.value)
      personData.value = pageData.value?.person;
      photo.value = await getPhotoUrl(pageData.value?.image);
      topFour.value = await getInterviewTopFour();
      break;
    }
    case 'point_of_view': {
      pageData.value = await getPointOfViewById(id);
      personData.value = pageData.value?.person;
      photo.value = await getPhotoUrl(pageData.value?.image);
      topFour.value = await getPointOfViewTopFour();
      break;
    }
    case 'opinion': {
      pageData.value = await getOpinionById(id);
      personData.value = pageData.value?.person;
      photo.value = await getPhotoUrl(pageData.value?.image);
      topFour.value = await getOpinionTopFour();
      break;
    }
  }
  dataLoaded.value = true;
});

</script>

<template>
<!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header @active="changeTopMenu"/>
  <TopMenu  />
  <div v-if="dataLoaded" class="flex flex-col md:gap-[125px] gap-[25px]">
    <div class="flex flex-col md:gap-[125px] px-[10%] gap-[25px]">
      <div class="grid grid-cols-4 gap-[25px]">
        <div class="md:col-span-2 sm:col-span-3 col-span-4 flex flex-col gap-[15px]">
          <div class="flex items-end mb-[15px] gap-[15px] w100">
            <div v-if="props.type === 'opinion'" class="h-[21px] text-[18px] font-somic text-black font-semibold">
              Мнение
            </div>
            <div v-if="props.type === 'interview'" class="h-[21px] text-[18px] font-somic text-black font-semibold">
              Интервью
            </div>
            <div v-if="props.type === 'point_of_view'" class="h-[21px] text-[18px] font-somic text-black font-semibold">
              Точка зрения
            </div>
            <div class="flex-grow border-b-[2px] border-gray"></div>
          </div>
          <img :src="photo" class=""/>
          <div class="text-[30px] font-somic text-black font-bold">
            {{ pageData.title }}
          </div>
          <div class="text-[14px] font-somic text-gray-500">
            {{ pageData.text }}
          </div>
        </div>
        <RouterLink class="md:col-span-1 col-span-4" :to="`/person/${personData.id}`">
          <Card :data="personData"/>
        </RouterLink>
        <AddsBlock class="col-span-1 hidden md:flex"/>
      </div>
    </div>
    <div class="flex flex-col px-[10%] gap-[30px]">
      <div class="flex items-end gap-[15px] w100">
        <div v-if="props.type === 'opinion'" class="text-[18px] font-somic text-black font-semibold">Еще мнения</div>
        <div v-if="props.type === 'interview'" class="text-[18px] font-somic text-black font-semibold">Еще интервью
        </div>
        <div v-if="props.type === 'point_of_view'" class="text-[18px] font-somic text-black font-semibold">Еще точки
          зрения
        </div>
        <div class="flex-grow border-b-[2px] border-gray"></div>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-[25px]">
          <Card class="md:col-span-1 col-span-4" v-for="top in topFour" :key="top.id" :data="top"/>
        </div>
      </div>
    </div>
    <Selection class="mb-[55px]"/>
    <Footer/>
  </div>
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