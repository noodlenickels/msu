<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiNews from '@/use/api/news';

import NewsCard from '@/components/msu-russia/cards/NewsCard.vue';
import SearchPanel from '@/components/msu-russia/SearchPanel.vue';
import Pagination from '@/components/msu-russia/Pagination.vue';
import Loader from '@/views/msu-russia/Loader.vue';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const dataLoaded = ref(false);

const { getNews } = useApiNews();

const newsData = ref([]);
const perPage = ref(10);
const totalPages = ref(0);
const currentPage = ref(1);
const search = ref('');
const regions = ref([]);

onMounted(async () => {
  // if ( formMode.value === 'edit' ) {
  const data = await getNews(currentPage.value);
  newsData.value = data.data;
  totalPages.value = data.pages;

  dataLoaded.value = true;
});
const updateRegion = async (regions) => {
  regions.value = regions;
  await updateNews(search.value, regions.value);
}
const updateSearch = async (search) => {
  search.value = search;
  await updateNews(search.value, regions.value);
}
const updateNews = async (search, regions) => {
  const data = await getNews('', regions, search);
  newsData.value = data.data;
  totalPages.value = data.pages;
}
const changePage = async (i) => {
  currentPage.value = i;
  const data = await getNews(currentPage.value);
  newsData.value = data.data;
}
</script>

<template>
  <div class="w100 px-[10%]">
    <div class="flex items-end mb-[30px] gap-[15px] w100">
      <div class="md:w-auto w-full text-center md:text-[18px] m-auto text-[15px] font-somic bg-primary px-[15px] py-[10px]  text-white rounded-xl font-semibold">Новости регионов</div>
      <div class="md:flex-grow col-span-6 border-b-[2px] border-primary"></div>
    </div>
    <div class="grid grid-cols-3 gap-[25px] py-6">
      <div class="md:col-span-2 col-span-3">
        <div v-if="dataLoaded" class="flex flex-col gap-[20px] mb-[25px]">
          <NewsCard v-for="news in newsData" :data="news" />
        </div>
        <Loader v-else/>
        <Pagination @paged="changePage" :perPage="perPage" :totalPages="totalPages" :currentPage="currentPage" />
      </div>
    </div>
  </div>
</template>
