<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiSAIContracts from '@/use/api/saiContract';

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

const { getContractById } = useApiSAIContracts();

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

onMounted(async () => {
  // if ( formMode.value === 'edit' ) {
  const contractData = await getContractById();
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
          <NewsCard :img="'woman1.png'" class="col-span-2" />
          <NewsCard :img="'woman1.png'" class="col-span-2" />
          <NewsCard :img="'woman1.png'" class="col-span-2" />
          <NewsCard :img="'woman1.png'" class="col-span-2" />
          <NewsCard :img="'woman1.png'" class="col-span-2" />
          <NewsCard :img="'woman1.png'" class="col-span-2" />
          <NewsCard :img="'woman1.png'" class="col-span-2" />
        </div>
        <Pagination />
      </div>
      <SearchPanel class="hidden md:block"/>
    </div>
  </div>
</template>
