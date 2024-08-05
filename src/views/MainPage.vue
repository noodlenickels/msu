<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import NewsBlock from "@/components/NewsBlock.vue";
import Card from "@/components/Card.vue";
import RegionNews from "@/components/RegionNews.vue";
import PointOfView from "@/components/PointOfView.vue";
import OfficialSites from "@/components/OfficialSites.vue";
import Footer from "@/components/Footer.vue";

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

onMounted(() => {
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
  <Header />
  <TopMenu />
  <div class="flex flex-col gap-[125px]">
    <NewsBlock />
    <div class="grid grid-cols-4 px-[10%] gap-[25px]">
      <Card :caption="'Мнения'" :title="'Глава Ульяновска Марина Беспалова: \'Решение проблем ЖКХ\''" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
      <Card :caption="'Персона'" :title="'Глава города Нижний Новгород Олег Сорокин'" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
      <Card :caption="'Интервью'" :title="'Стелла Штань: \'Политикам-мужчинам прощается многое\''" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
      <Card :caption="'Регион'" :title="'Карачаево-Черкесская Республика'" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
    </div>
    <RegionNews />
    <PointOfView />
    <OfficialSites />
    <Footer />
  </div>
</template>
