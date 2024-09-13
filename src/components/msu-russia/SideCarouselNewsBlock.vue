<script setup>
import {computed, ref, onMounted} from 'vue';
import SideCarouselNews from "@/components/msu-russia/SideCarouselNews.vue";
const props = defineProps({
  data: {
    type: Object,
    required: false,
  }
});

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
  <div class="flex flex-col  justify-between">
    <SideCarouselNews v-for="element in props.data" class="classNews" @chosen="changeCarousel" :id="element.id" :text="element.title"/>
  </div>
</template>
