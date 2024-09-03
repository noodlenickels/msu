<script setup>
import {computed, ref, onMounted, watch} from 'vue';
import useApiRegion from '@/use/api/region';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['search', 'regions']);

const { getRegions } = useApiRegion();

const dataLoaded = ref(false);

const regionData = ref([]);
const checked = ref([]);

const searchRegions = ref('');
const searchNews = ref('');

onMounted(async () => {
  regionData.value = await getRegions();
  dataLoaded.value = true;
});

watch(searchRegions, async () => {
  regionData.value = await getRegions(searchRegions.value);
})

watch(searchNews, async () => {
  emits('search', searchNews.value);
})

watch(checked, async () => {
  emits('regions', checked.value);
})
</script>

<template>
  <div v-if="dataLoaded" class="bg-gray-200 rounded-[15px] max-h-[855px] p-[15px] flex flex-col gap-[20px]">
    <div class="flex flex-col gap-[10px]">
      <div class="text-[17.4px] text-gray-900 font-somic">
        Поиск по ключевым словам
      </div>
      <input v-model="searchNews" class="h-[40px] rounded-[15px] pl-[20px] pr-[5px]" placeholder="Найти новость" type="search" name="" />
    </div>
    <div class="flex flex-col gap-[10px]">
      <div class="text-[17.4px] text-gray-900 font-somic">
        По региону
      </div>
      <input v-model="searchRegions" class="h-[40px] rounded-[15px] pl-[20px] pr-[5px]" placeholder="Найти регион" type="search" name="" />
    </div>
    <div class="flex flex-col gap-[10px] px-[10px] h-[580px] overflow-y-scroll">
      <div v-for="el in regionData">
        <input v-model="checked" class="m-2" :value="el.id" type="checkbox" :id="el.id" />
        <label :for="el.id">{{ el.name }}</label>
      </div>
    </div>
  </div>
</template>
