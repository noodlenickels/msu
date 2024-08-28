<script setup>
import {computed, ref, onMounted} from 'vue';
import RandomCard from "@/components/cards/RandomCard.vue";
import useApiMain from '@/use/api/main';

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

const randomData = ref({});

const {getRandomSection} = useApiMain();

onMounted(async () => {
  randomData.value = await getRandomSection();
  console.log(randomData.value)
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
  <div class="grid grid-cols-4 px-[10%] gap-[25px]">
    <RandomCard v-for="row in randomData" class="md:col-span-1 col-span-4" :data="row"/>
  </div>
</template>
