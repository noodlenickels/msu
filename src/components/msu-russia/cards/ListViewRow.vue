<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiMain from '@/use/api/main';
import {RouterLink} from "vue-router";
import usePhoto from "@/use/images";

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
const { getPhotoUrl } = usePhoto();
const photo = ref();
const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);
const dataLoaded = ref(false);

onMounted(async () => {
  photo.value = await getPhotoUrl(props.data.image);
  dataLoaded.value = true;
  compare();
});

</script>

<template>
  <RouterLink :to="`${props.data.link}`">
  <div class="">
    <div class="flex md:gap-[25px] gap-[10px] md:grid md:grid-cols-4 flex-col md:items-start items-center">
      <div class="relative floated" :class="props.data.role ? 'max-w-[200px]' : ''">
        <img :src="photo || '/images/photo.jpg'" class="object-cover viewCard max-h-[200px]"/>
        <div v-if="props.data.role" class="absolute w-auto l:text-[14px] l:h-[24px] md:h-[20px] md:text-[11px] h-[24px] text-[14px] font-somic bg-gray-100 rounded-[10px] text-black z-10	bottom-[7%] right-[5%] px-[7px]">{{ props.data.role }}</div>
      </div>
      <div class="flex flex-col gap-[10px] col-span-3">
<!--        border-b-[2px] border-gray-->
        <div class="l:text-[20px] md: text-[15px] font-somic text-black font-bold titleClass">
          {{ props.data.title }}
        </div>
        <div class="text-[14px] font-somic text-gray-400 leading-[20px] truncate-text ">
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
setTimeout(()=>{
  if (document.documentElement.clientWidth > 640) compare();
}, 1000);
function compare(){
  if (document.documentElement.clientWidth > 768) {
    const cards = document.getElementsByClassName('viewCard');
    for (let i = 0; i < cards.length; i++) {
      if (document.getElementsByClassName('titleClass')[i].offsetHeight) {
        const cardHeight = document.getElementsByClassName('viewCard')[i].height;
        const titleHeight = document.getElementsByClassName('titleClass')[i].offsetHeight;
        const textHeight = (cardHeight - titleHeight) - (cardHeight - titleHeight) % 20;
        const textCount = Math.floor(textHeight / 20);
        document.getElementsByClassName('truncate-text')[i].style.setProperty('-webkit-line-clamp', textCount);
        document.getElementsByClassName('truncate-text')[i].style.setProperty('height', `${textHeight}px`);
      }

      // document.getElementsByClassName('truncate-text')[i].height = `${textHeight}px`;
    }
  }
}
window.onresize = function(){
  compare();
};
</script>
