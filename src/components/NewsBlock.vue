<script setup>
import {computed, ref, onMounted} from 'vue';
import Carousel from '@/components/Carousel.vue';
import AddsBlock from '@/components/AddsBlock.vue';

const props = defineProps({
  carouselList: {
    type: Object,
    required: false,
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const dataLoaded = ref(false);
const carouselList = ref(props.carouselList);

onMounted(() => {
  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

</script>

<template>
  <div v-if="dataLoaded" class="w100 px-[10%]">
    <div class="grid grid-cols-5 gap-[25px]">
        <Carousel :carouselData="carouselList" class="l:col-span-4 col-span-5 l:mb-0 mb-[50px]"/>
        <AddsBlock class="l:col-span-1 col-span-5"/>
      </div>
    </div>
</template>


