<script setup>
import {computed, ref, onMounted} from 'vue';

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

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

onMounted(() => {
  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

const closeForm = () => {
  emits('close');
};

const imgLink = computed(() => {
  return '/images/'+props.data.image;
});
</script>

<template>
  <RouterLink to="/point_of_view/1">

    <div>
      <div v-if="props.data.caption" class="flex items-end mb-[30px] gap-[15px]">
        <div class="w-auto text-[18px] font-somic text-black font-semibold">{{ props.data.caption }}</div>
        <div class="flex-grow border-b-[2px] border-gray"></div>
      </div>
      <div class="flex flex-col md:gap-[10px] gap-[5px]">
        <div class="relative">
          <img :src="imgLink" class="w-full"/>
          <div v-if="props.data.role" class="absolute w-auto l:text-[16px] l:h-[26px] md:h-[20px] md:text-[11px] h-[24px] text-[14px] font-somic bg-gray-100 rounded-[10px] text-black z-10	bottom-[7%] right-[5%] px-[7px]">{{ props.data.role }}</div>
        </div>
        <div class="l:text-[17.4px] text-[15px] font-somic text-black">
          {{ props.data.name }}
        </div>
<!--        :class="props.mode === 'news' ? 'font-bold' : ''"-->
        <div class="l:text-[20px] text-[17px] font-somic text-black font-bold">
          {{ props.data.title }}
        </div>
        <div class="l:text-[14px] text-[12px] font-somic text-gray-500">
          {{ props.data.text }}
        </div>
        <div class="w-[250px] text-[14px] font-somic bg-gray-200 text-black rounded-[10px] px-[10px] inline-block">
          {{ props.data.source }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>
