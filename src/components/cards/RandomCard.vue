<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const dataLoaded = ref(false);

onMounted(() => {
  dataLoaded.value = true;
});
</script>

<template>
  <RouterLink :to="props.data.link">
    <div>
      <div v-if="props.data.caption" class="flex mb-[30px] md:gap-[15px] gap-[7px]">
        <div class="w-auto flex items-end md:text-[18px] text-[26px] font-somic text-black font-semibold h-[60px]">{{ props.data.caption }}</div>
<!--        <div class="flex-grow border-b-[2px] border-gray"></div>-->
      </div>
      <div class="flex flex-col gap-[10px]">
        <div class="flex items-center">
          <img :src="props.data.photo || '/images/photo.jpg'" class="object-cover h-[250px]"/>
        </div>
        <div class="md:text-[17.4px] font-somic text-black">
          {{ props.data.name }}
        </div>
        <!--        :class="props.mode === 'news' ? 'font-bold' : ''"-->
        <div class="md:text-[20px] text-[27px] font-somic text-black font-bold">
          {{ props.data.title }}
        </div>
        <div class="md:text-[14px] text-[20px] font-somic text-gray-500 truncate-card">
          {{ props.data.text }}
        </div>
        <div class="w-[250px] text-[14px] font-somic bg-gray-200 text-black rounded-[10px] px-[10px] inline-block">
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

