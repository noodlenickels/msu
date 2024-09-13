<script setup>
import {computed, ref, onMounted} from 'vue';
import RandomCard from "@/components/msu-russia/cards/RandomCard.vue";
import useApiNews from '@/use/api/news';
import useApiMain from '@/use/api/main';


// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const {getRandomSection} = useApiNews();
const { getPhotoUrl } = useApiMain();

const randomData = ref({});
const dataLoaded = ref(false);

onMounted(async () => {
  randomData.value = await getRandomSection();
  // randomData.value.interview.photo = await getPhotoUrl(randomData.value.interview.image);
  // randomData.value.opinion.photo = await getPhotoUrl(randomData.value.opinion.image);
  // randomData.value.people.photo = await getPhotoUrl(randomData.value.people.image);
  // randomData.value.region.photo = await getPhotoUrl(randomData.value.region.image);

  dataLoaded.value = true;
});

</script>

<template>
  <div class="grid grid-cols-4 px-[10%] gap-[2px]">
    <RandomCard v-for="row in randomData" class="l:col-span-1 col-span-4" :data="row"/>
  </div>
</template>
