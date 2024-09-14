<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  titleCaption: {
    type: String,
    required: false
  },
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const dataLoaded = ref(false);

onMounted(() => {
  dataLoaded.value = true;
});
</script>

<template>
  <RouterLink :to="props.data.link">
    <div class="l:mt-0 pt-5 mb:pt-1 mb-3">
      <div class="flex items-end gap-[15px]">
        <div class="md:w-auto w-full m-auto text-center mt-2 l:text-[18px] text-[15px] font-somic bg-primary px-[12px] py-[8px] text-white rounded-xl font-semibold">{{ titleCaption }}</div>
        <div class="md:flex-grow border-b-[2px] border-primary"></div>
      </div>
      <div v-if="props.data.caption" class="flex mb-[30px] md:gap-[15px] gap-[7px]">
        <div class="w-[170%] h-[90%] pb-[5px] pt-[30px] flex items-center l:text-[18px] text-[15px] font-somic text-black font-semibold md:h-[110px]">{{ props.data.caption }}</div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <div class="m-auto max-w-[200px]">
          <img :src="props.data.image || '/images/photo.jpg'" class="aspect-square"/>
        </div>
        <div class="md:text-[17.4px] text-[15px] font-somic text-black">
          {{ props.data.name }}
        </div>
        <div class="md:text-[20px] text-[17px] font-somic text-black font-bold">
          {{ props.data.title }}
        </div>
        <div class="text-[14px] text-left px-1 font-somic text-gray-500 truncate-card">
          {{ props.data.text }}
        </div>
        <div v-if="props.data.source" class="w-[250px] text-[14px] font-somic bg-gray-200 text-black rounded-[10px] px-[10px] inline-block">
          {{ props.data.source }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style>
.truncate-card {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  height: 60px;
}
</style>

