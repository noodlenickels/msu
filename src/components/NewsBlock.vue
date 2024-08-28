<script setup>
import {computed, ref, onMounted} from 'vue';
import Carousel from '@/components/Carousel.vue';
import AddsBlock from '@/components/AddsBlock.vue';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

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

</script>

<template>
  <div class="w100 px-[10%]">
    <div class="grid grid-cols-5 gap-[25px]">
        <Carousel class="l:col-span-4 col-span-5 l:mb-0 mb-[50px]"/>
        <AddsBlock class="l:col-span-1 col-span-5"/>
      </div>
    </div>
</template>


