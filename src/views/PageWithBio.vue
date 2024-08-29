<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import Selection from "@/components/Selection.vue";
import Card from "@/components/cards/Card.vue";
import Footer from "@/components/Footer.vue";
import AddsBlock from "@/components/AddsBlock.vue";

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

const bioObject = {
  image: 'woman1.png',
  caption: 'Биография',
  title: 'Марина Беспалова',
  text: 'Марина Павловна Беспалова член комитета ГД по бюджету и налогам, позднее член Комитета по государственному строительству и законодательству, член фракции Единая Россия'
}
</script>

<template>
  <Header/>
  <TopMenu/>
  <div class="flex flex-col gap-[125px]">
    <div class="flex flex-col gap-[125px] px-[10%] gap-[25px]">
      <div class="grid grid-cols-4 gap-[25px]">
        <div class="col-span-2 flex flex-col gap-[15px]">
          <div class="flex items-end mb-[15px] gap-[15px] w100">
            <div class="h-[21px] text-[18px] font-somic text-black font-semibold">Мнение</div>
            <div class="flex-grow border-b-[2px] border-gray"></div>
          </div>
          <img src="/images/videos/video4.png" class=""/>
          <div class="text-[30px] font-somic text-black font-bold">
            Избран глава союзов городов Центра и Северо-Запада Российской Федерации
          </div>
          <div class="text-[14px] font-somic text-gray-500">
            Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.
          </div>
        </div>
        <Card class="col-span-1" :data="bioObject" />
        <AddsBlock class="col-span-1"/>
      </div>
    </div>
    <div class="flex flex-col px-[10%] gap-[30px]">
      <div class="flex items-end gap-[15px] w100">
        <div class="text-[18px] font-somic text-black font-semibold">Еще мнения</div>
        <div class="flex-grow border-b-[2px] border-gray"></div>
      </div>
      <div>
        <div class="grid grid-cols-4 gap-[25px]">
          <Card :data="bioObject" :title="'Глава Ульяновска Марина Беспалова: \'Решение проблем ЖКХ\''" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
          <Card :data="bioObject" :title="'Глава города Нижний Новгород Олег Сорокин'" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
          <Card :data="bioObject" :title="'Стелла Штань: \'Политикам-мужчинам прощается многое\''" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
          <Card :data="bioObject" :title="'Карачаево-Черкесская Республика'" :text="'Деятельность предприятий ЖКХ давно уже стала одной из самых остросоциально-экономических и, пожалуй, политических проблем больинства регионов России.'" />
        </div>
      </div>
    </div>
    <Selection class="mb-[75px]"/>
    <Footer/>
  </div>
</template>
