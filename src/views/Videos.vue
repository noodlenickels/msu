<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import Selection from "@/components/Selection.vue";
import Card from "@/components/Card.vue";
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

</script>

<template>
  <Header />
  <TopMenu />
  <div class="flex flex-col gap-[125px] px-[10%] gap-[25px] mb-[125px]">
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="col-span-3 grid grid-cols-12 gap-x-[25px] gap-y-[40px]">
          <div class="col-span-1 text-[18px] font-somic text-black font-semibold">Видео</div>
          <div class="flex-grow col-span-11 border-b-[2px] border-gray"></div>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
        <Card class="col-span-6" :mode="'video'" :title="'Рейд по неблагополучным семьям представителей администрации города Саратов'" :source="'Пресс-агенство Информцентр'"/>
      </div>
      <AddsBlock class="col-span-1" />
    </div>
  </div>
  <Selection class="mb-[200px]"/>
  <Footer />
</template>
