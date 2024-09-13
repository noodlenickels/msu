<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/msu-russia/Header.vue';
import TopMenu from '@/components/msu-russia/TopMenu.vue';
import Selection from "@/components/msu-russia/Selection.vue";
import Card from "@/components/msu-russia/cards/Card.vue";
import Footer from "@/components/msu-russia/Footer.vue";
import AddsBlock from "@/components/msu-russia/AddsBlock.vue";
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
  },
  caption: {
    type: String,
    required: true
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const pageData = ref({});
const personData = ref({});
const topFour = ref([]);
const photo = ref();

const dataLoaded = ref(false);

const id = route.params.id;
const topMenu = ref(false);
const bigScreen = ref(false);
const link = ref('person');
const toggleMenu = () => {
  topMenu.value = !topMenu.value;
}

onMounted(async () => {
  switch (props.type) {
    case 'interview': {
      pageData.value = await getInterviewById(id);
      personData.value = pageData.value?.person;
      link.value = personData.value.type === 'Region' ? '/region/' + personData.value.id : '/person/' + personData.value.id;
      photo.value = await getPhotoUrl(pageData.value?.image);
      topFour.value = await getInterviewTopFour();
      break;
    }
    case 'point_of_view': {
      pageData.value = await getPointOfViewById(id);
      personData.value = pageData.value?.person;
      link.value = personData.value.type === 'Region' ? '/region/' + personData.value.id : '/person/' + personData.value.id;
      photo.value = await getPhotoUrl(pageData.value?.image);
      topFour.value = await getPointOfViewTopFour();
      break;
    }
    case 'opinion': {
      pageData.value = await getOpinionById(id);
      personData.value = pageData.value?.person;
      link.value = personData.value.type === 'Region' ? '/region/' + personData.value.id : '/person/' + personData.value.id;
      photo.value = await getPhotoUrl(pageData.value?.image);
      topFour.value = await getOpinionTopFour();
      break;
    }
  }

  if (document.documentElement.clientWidth > 640) bigScreen.value = true;
  else bigScreen.value = false;

  window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth > 640) bigScreen.value = true;
    else bigScreen.value = false;
  })

  dataLoaded.value = true;
});

</script>

<template>
<!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header @active="toggleMenu"/>
  <TopMenu @toggle="toggleMenu" v-if="topMenu || bigScreen" />
  <div v-if="dataLoaded" class="flex flex-col md:gap-[45px] gap-[25px]">
    <div class="flex flex-col md:gap-[75px] px-[10%] gap-[25px]">
      <div class="grid grid-cols-4 gap-[25px]">
        <div class="md:col-span-2 col-span-4 flex flex-col gap-[15px]">
          <div class="flex items-end mb-[5%] gap-[15px]">
            <div class="w-auto md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">{{ props.caption }}</div>
            <div class="md:flex-grow border-b-[2px] border-primary"></div>
          </div>
          <img :src="pageData.image" class="aspect-square"/>
          <div class="text-[30px] font-somic text-black font-bold">
            {{ pageData.title }}
          </div>
          <div class="text-[14px] font-somic text-gray-500">
            {{ pageData.text }}
          </div>
        </div>
        <RouterLink class="md:col-span-1 sm:col-span-2 col-span-4" :to="link">
          <Card :data="personData"/>
        </RouterLink>
        <AddsBlock class="sm:col-span-2 md:col-span-1 hidden sm:flex"/>
      </div>
    </div>
    <div class="flex flex-col px-[10%] gap-[5px]">
      <div class="flex items-end mb-[5%] gap-[15px]">
        <div v-if="props.type === 'opinion'" class="w-auto md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">Еще мнения</div>
        <div v-if="props.type === 'interview'" class="w-auto md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">Еще интервью
        </div>
        <div v-if="props.type === 'point_of_view'" class="w-auto md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">Еще точки
          зрения
        </div>
        <div class="md:flex-grow border-b-[2px] border-primary"></div>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-[55px]">
          <Card class="md:col-span-1 col-span-4" v-for="top in topFour" :key="top.id" :data="top"/>
        </div>
      </div>
    </div>
    <Selection class="mb-[25px]"/>
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