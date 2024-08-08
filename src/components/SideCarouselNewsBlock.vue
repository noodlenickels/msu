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
    <SideCarouselNews @chosen="changeCarousel" :id="0" :text="'Севастополь посетил сенатор Дмитрий Азаров'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="1" :text="'Севастополь посетил сенатор Дмитрий Азаров'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="2" :text="'Севастополь посетил сенатор Дмитрий Азаров'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="3" :text="'Перспективы развития местного самоуправления обсудили в крымском параметре'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="4" :text="'Перспективы развития местного самоуправления обсудили в крымском параметре'"/>
    <SideCarouselNews @chosen="changeCarousel" :id="5" :text="'Перспективы развития местного самоуправления обсудили в крымском параметре'"/>
  </div>
</template>
