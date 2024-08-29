<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiNews from '@/use/api/news';

import NewsCard from '@/components/cards/NewsCard.vue';
import SearchPanel from '@/components/SearchPanel.vue';
import Pagination from '@/components/Pagination.vue';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const { getNews, getPagination } = useApiNews();

const regionsNewsList = [
  {
    date: '25.08',
    title: 'Южно-Сахалинск',
    text: 'В городе применяют новые технологии при текущем ремонте дорог',
    img: 'regions/region1.png'
  },
  {
    date: '25.08',
    title: 'Курган',
    text: 'Город развивается',
    img: 'regions/region2.png'
  },
  {
    date: '25.08',
    title: 'Артем',
    text: 'В городе еще больше молодных семей сможет приобрести долгожданное жилье',
    img: 'regions/region3.png'
  },
  {
    date: '25.08',
    title: 'Хабаровск',
    text: 'Реализация программы по капитальному ремонту общего имущества многоквартирных домов продолжается в городе в 2016 году',
    img: 'regions/region4.png'
  },
  {
    date: '25.08',
    title: 'Ханты-Мансийск',
    text: 'Хантымансийцы поставили муниципальным чиновникам «четыре с плюсом»',
    img: 'regions/region5.png'
  },
  {
    date: '25.08',
    title: 'Братск',
    text: 'Вопросы обеспечения безопасности города обсудила сегодня городская антитеррористическая комиссия',
    img: 'regions/region6.png'
  },
  {
    date: '25.08',
    title: 'Томск',
    text: 'В городе продолжается работа консультативно-мотивационного кабинета',
    img: 'regions/region7.png'
  },
  {
    date: '25.08',
    title: 'Ханты-Мансийск',
    text: 'Незаконной наружной рекламы на улицах города стало в 10 раз меньше, чем в предыдущие годы',
    img: 'regions/region8.png'
  },
  {
    date: '25.08',
    title: 'Красноярск',
    text: 'Глава города Эдхам Акбулатов: “Развитие высокотехнологичных производств - важное условие экономической стабильности города”',
    img: 'regions/region9.png'
  }
];

const newsData = ref([]);
const perPage = ref(0);
const totalPages = ref(0);
const currentPage = ref(1);

onMounted(async () => {
  // if ( formMode.value === 'edit' ) {
  newsData.value = await getNews(currentPage.value);
  const pages = await getPagination();

  perPage.value = pages.per_page;
  totalPages.value = pages.total_news;

  newsData.value[0].image = 'regions/region1.png';
  newsData.value[1].image = 'regions/region2.png';
  newsData.value[2].image = 'regions/region3.png';
  newsData.value[3].image = 'regions/region4.png';
  newsData.value[4].image = 'regions/region5.png';
  newsData.value[5].image = 'regions/region6.png';
  newsData.value[6].image = 'regions/region7.png';
  newsData.value[7].image = 'regions/region8.png';
  newsData.value[8].image = 'regions/region9.png';
  newsData.value[9].image = 'regions/region1.png';
});

const changePage = (i) => {
  currentPage.value = i;
}
</script>

<template>
  <div class="w100 px-[10%]">
    <div class="flex items-end mb-[30px] gap-[15px] w100">
      <div class="w-auto md:text-[18px] text-[26px] font-somic text-black font-semibold">Новости регионов</div>
      <div class="flex-grow col-span-6 border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-3 gap-[25px]">
      <div class="md:col-span-2 col-span-3">
        <div class="flex flex-col gap-[20px] mb-[25px]">
          <NewsCard v-for="news in newsData" :data="news" class="col-span-2" />
        </div>
        <Pagination @paged="changePage" :perPage="perPage" :totalPages="totalPages" :currentPage="currentPage" />
      </div>
      <SearchPanel class="hidden md:flex"/>
    </div>
  </div>
</template>
