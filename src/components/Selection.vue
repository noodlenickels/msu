<script setup>
import {computed, ref, onMounted} from 'vue';
import RandomCard from "@/components/cards/RandomCard.vue";
import useApiNews from '@/use/api/news';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const {getRandomSection} = useApiNews();

const randomData = ref({});

onMounted(async () => {
  randomData.value = await getRandomSection();
  randomData.value.interview.image = 'man1.png';
  randomData.value.opinion.image = 'pic.png';
  randomData.value.people.image = 'woman1.png';
  randomData.value.region.image = 'region.png';

  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
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
