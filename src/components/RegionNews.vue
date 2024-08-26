<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiMain from '@/use/api/main';

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

const { getNews } = useApiMain();

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

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

onMounted(async () => {
  // if ( formMode.value === 'edit' ) {
  const newsData = await getNews();
  //   if ( contractData ) {
  //     panelData.value = { ...panelData.value, ...contractData };
  //     formData.value = panelData.value;
  //     closeEditor();
  //     showMsg(`Договор изменен`);
  //   }
  // }
  dataLoaded.value = true;
});

const closeForm = () => {
  emits('close');
};

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
          <NewsCard v-for="news in regionsNewsList" :data="news" class="col-span-2" />
        </div>
        <Pagination />
      </div>
      <SearchPanel class="hidden md:flex"/>
    </div>
  </div>
</template>
