<script setup>
import {computed, ref, onMounted} from 'vue';
import SideCarouselNews from "@/components/SideCarouselNews.vue";
// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['chosen']);

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

const changeCarousel = (i) => {
  emits('chosen', i);
};

</script>

<template>
  <div class="flex flex-col gap-[20px]">
    <SideCarouselNews @chosen="changeCarousel" :id="0" :text="'Избран глава Союза городов Центра и Северо-Запада Российской Федерации'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="1" :text="'Дмитрий Азаров: «Создать условия для развития  ТОС как основы местного самоуправления»'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="2" :text="'Севастополь посетил сенатор Дмитрий Азаров'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="3" :text="'Перспективы развития местного самоуправления обсудили в крымском парламенте.'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="4" :text="'В Совете Федерации состоялся «круглый стол», посвященный переселению граждан из жилых помещений, в зоне БАМа.'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="5" :text="'Доступность почтовых и банковских услуг на сельской территории обсудили на круглом столе в Ярославле.'"/>
  </div>
</template>
