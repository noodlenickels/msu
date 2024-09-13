<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/msu-russia/Header.vue';
import TopMenu from '@/components/msu-russia/TopMenu.vue';
import Selection from "@/components/msu-russia/Selection.vue";
import Card from "@/components/msu-russia/cards/Card.vue";
import Footer from "@/components/msu-russia/Footer.vue";
import AddsBlock from "@/components/msu-russia/AddsBlock.vue";
import useApiMain from '@/use/api/main';
import useApiNews from '@/use/api/news';
import useApiPeople from '@/use/api/person';
import useApiRegion from '@/use/api/region';
import { useRoute } from 'vue-router';

const props = defineProps({
  type: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: true
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const { getRegionById } = useApiRegion();
const { getPeopleById } = useApiPeople();
const { getNewsById } = useApiNews();
const { getPhotoUrl } = useApiMain();

const route = useRoute();
const dataLoaded = ref(false);
const photo = ref();
const topMenu = ref(false);
const bigScreen = ref(false);

const toggleMenu = () => {
  topMenu.value = !topMenu.value;
}

const cardData = ref({});
onMounted(async () => {
  if (props.type === 'region') {
    cardData.value = await getRegionById(route.params.id);
  }
  else if (props.type === 'person'){
    cardData.value = await getPeopleById(route.params.id);
  }
  else {
    cardData.value = await getNewsById(route.params.id);
  }
  photo.value = await getPhotoUrl(cardData.value.image);

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
  <div v-if="dataLoaded" class="flex flex-col gap-[75px]">
    <div class="flex flex-col md:gap-[125px] px-[10%] gap-[25px]">
      <div class="grid grid-cols-4 gap-[25px]">
        <div class="md:col-span-3 col-span-4 flex flex-col gap-[25px]">
          <div class="flex items-end mb-[5%] gap-[15px]">
            <div class="w-auto md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">{{ props.caption }}</div>
            <div class="md:flex-grow border-b-[2px] border-primary"></div>
          </div>
          <div class="flex flex-col items-center">
            <img :src="cardData.image" class="aspect-square max-w-[400px]"/>
          </div>
          <div class="text-[30px] font-somic text-black font-bold">
            {{ cardData.title }}
          </div>
          <div class="text-[14px] font-somic text-gray-500 leading-7">
            {{ cardData.text }}
          </div>
        </div>
        <AddsBlock class="col-span-1 md:flex hidden"/>
      </div>
    </div>
<!--    <div class="flex flex-col px-[10%] gap-[30px]">-->
<!--      <div class="flex items-end gap-[15px] w100">-->
<!--        <div v-if="props.type === 'region'" class="text-[18px] font-somic text-black font-semibold">Еще регионы</div>-->
<!--        <div v-if="props.type === 'person'" class="text-[18px] font-somic text-black font-semibold">Еще персоны</div>-->
<!--        <div v-if="props.type === 'news'" class="text-[18px] font-somic text-black font-semibold">Еще новости</div>-->
<!--        <div class="flex-grow border-b-[2px] border-gray"></div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <div v-if="props.type !== 'news'" class="grid grid-cols-4 gap-[25px]">-->
<!--&lt;!&ndash;          <Card :data="opinionObject" />&ndash;&gt;-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
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