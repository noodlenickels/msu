<script setup>
import {computed, ref, onMounted} from 'vue';
import RandomCard from "@/components/msu-russia/cards/RandomCard.vue";
import useApiNews from '@/use/api/news';
import useApiMain from '@/use/api/main';
import usePhoto from "@/use/images";


// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const {getRandomSection} = useApiNews();
const { getPhotoUrl } = usePhoto();

const randomData = ref({});
const dataLoaded = ref(false);
const captions = {
  'opinion': 'Мнение',
  'people': 'Персона',
  'interview': 'Интервью',
  'region': 'Регион'
}

onMounted(async () => {
  randomData.value = await getRandomSection();
  randomData.value.interview.photo = await getPhotoUrl(randomData.value.interview.image);
  randomData.value.opinion.photo = await getPhotoUrl(randomData.value.opinion.image);
  randomData.value.people.photo = await getPhotoUrl(randomData.value.people.image);
  randomData.value.region.photo = await getPhotoUrl(randomData.value.region.image);

  dataLoaded.value = true;
});

</script>

<template>
  <div class="grid grid-cols-4 px-[10%] md:gap-[25px] gap-[10px]">
    <RandomCard v-for="(row, idx) in randomData" class="md:col-span-1 col-span-4" :data="row" :title-caption="captions[idx]"/>
  </div>
</template>
