<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiMain from '@/use/api/main';
import {RouterLink} from "vue-router";

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});
const { getPhotoUrl } = useApiMain();
const photo = ref();
const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);
const dataLoaded = ref(false);

onMounted(async () => {
  // photo.value = await getPhotoUrl(props.data.image);
  dataLoaded.value = true;
  compare();
});

</script>

<template>
  <RouterLink :to="`${props.data.link}`">
  <div>
    <div class="grid grid-cols-12 flex gap-[25px] w-full">
      <div class="relative l:col-span-4 col-span-6 floated">
        <img :src="props.data.image || '/images/photo.jpg'" class="w-full viewCard"/>
        <div v-if="props.data.role" class="absolute w-auto l:text-[14px] l:h-[24px] md:h-[20px] md:text-[11px] h-[24px] text-[14px] font-somic bg-gray-100 rounded-[10px] text-black z-10	bottom-[7%] right-[5%] px-[7px]">{{ props.data.role }}</div>
      </div>
      <div class="nofloat l:col-span-8 col-span-6 flex flex-col gap-[10px]">
        <div class="l:text-[20px] md: text-[15px] font-somic text-black font-bold titleClass">
          {{ props.data.title }}
        </div>
        <div class="text-[14px] font-somic text-gray-400 leading-[20px] truncate-text">
          {{ props.data.text }}
        </div>
      </div>
    </div>
  </div>
  </RouterLink>
</template>

<style>
.truncate-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.floated{
  float: left;
}

.nofloat{
  float:none
}


</style>

<script>
function compare(){
  const cards = document.getElementsByClassName('viewCard');
  for (let i=0; i<cards.length; i++){
    const cardHeight = document.getElementsByClassName('viewCard')[i].height;
    const titleHeight = document.getElementsByClassName('titleClass')[i].offsetHeight;
    const textHeight = (cardHeight-titleHeight) - (cardHeight-titleHeight)%20;
    const textCount = Math.floor(textHeight/20);
    document.getElementsByClassName('truncate-text')[i].style.setProperty('-webkit-line-clamp', textCount);
    document.getElementsByClassName('truncate-text')[i].style.setProperty('height', `${textHeight}px`);
    document.getElementsByClassName('truncate-text')[i].height = `${textHeight}px`;
  }
}
window.onresize = function(){
  compare();
};
</script>
