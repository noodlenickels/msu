<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
    default: 'shevchenko.jpg'
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
  return '/images/'+props.img;
});
</script>

<template>
  <RouterLink to="/point_of_view/1">

    <div class="w100">
      <div v-if="props.caption" class="flex items-end mb-[30px] gap-[15px] w100">
        <div class="w-auto text-[18px] font-somic text-black font-semibold">{{ props.caption }}</div>
        <div class="flex-grow border-b-[2px] border-gray"></div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <img :src="imgLink" class=""/>
        <div class="text-[17.4px] font-somic text-black">
          {{ props.name }}
        </div>
        <!--        :class="props.mode === 'news' ? 'font-bold' : ''"-->
        <div class="text-[20px] font-somic text-black font-bold">
          {{ props.title }}
        </div>
        <div class="text-[14px] font-somic text-gray-500">
          {{ props.text }}
        </div>
        <div class="w-[250px] text-[14px] font-somic bg-gray-200 text-black rounded-[10px] px-[10px] inline-block">
          {{ props.source }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>
