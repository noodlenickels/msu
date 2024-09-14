<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiMain from '@/use/api/main';

const props = defineProps({
  caption: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: true,
    default: null
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const dataLoaded = ref(false);

const {getPhotoUrl} = useApiMain();
const photo = ref();

onMounted(async () => {
  // photo.value = await getPhotoUrl(props.data.image);
  dataLoaded.value = true;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <div>
    <div v-if="props.data.caption" class="flex items-end mb-[5%] gap-[15px]">
      <div
          class="w-auto md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">
        {{ props.caption }}
      </div>
      <div class="md:flex-grow border-b-[2px] border-primary"></div>
    </div>
    <div class="flex flex-col md:gap-[10px] gap-[5px]">
      <div class="relative m-auto ">
        <div class="m-auto max-w-[200px]">
          <img :src="props.data.image || '/images/photo.jpg'" class="aspect-square"/>
        </div>
        <div v-if="props.data.role"
             class="absolute w-auto l:text-[16px] l:h-[26px] md:h-[20px] md:text-[11px] h-[24px] text-[14px] font-somic bg-gray-100 rounded-[10px] text-black z-10	bottom-[7%] right-[5%] px-[7px]">
          {{ props.data.role }}
        </div>
      </div>
      <div class="l:text-[17.4px] text-[15px] font-somic text-black">
        {{ props.data.name }}
      </div>
      <!--        :class="props.mode === 'news' ? 'font-bold' : ''"-->
      <div class="l:text-[20px] text-[17px] font-somic text-black font-bold mb-3">
        {{ props.data.title }}
      </div>
      <div v-if="props.data.text" class="text-[14px] font-somic text-gray-500 truncate-card">
        {{ props.data.text }}
      </div>
      <div class="w-[250px] text-[14px] font-somic bg-gray-200 text-black rounded-[10px] px-[10px] inline-block">
        {{ props.data.source }}
      </div>
    </div>
  </div>
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
