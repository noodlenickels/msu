<script setup>
import {computed, ref, onMounted} from 'vue';
import Card from '@/components/cards/Card.vue';
import useApiPoint from '@/use/api/point';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const {getPointOfViewTopFour} = useApiPoint();

const dataLoaded = ref(false);

const pointTopFour = ref([]);

onMounted(async () => {
  pointTopFour.value = await getPointOfViewTopFour();
  dataLoaded.value = true;
});

</script>

<template>
  <div class="w100 px-[10%]">
    <div class="flex items-end mb-[30px] gap-[15px] w100">
      <div class="w-auto text-[18px] font-somic text-black font-semibold">Точка зрения</div>
      <div class="flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-2 gap-[25px]">
<!--      тут поменять на 2 колонки!-->
        <Card v-for="point in pointTopFour" class="md:col-span-2 col-span-2" :data="point" />
    </div>
  </div>
</template>
