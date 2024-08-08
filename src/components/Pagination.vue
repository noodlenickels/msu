<script setup>
import {computed, ref, onMounted} from 'vue';
import Card from '@/components/cards/Card.vue';
import SearchPanel from '@/components/SearchPanel.vue';
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
  <div class="w100 flex justify-center gap-[15px]">
    <div class="h-[30px] w-[30px] text-white rounded-[30px] bg-black text-center pt-0.5">1</div>
    <div class="h-[30px] w-[30px] rounded-[30px] bg-gray-300 text-center pt-0.5">2</div>
    <div class="h-[30px] w-[30px] rounded-[30px] bg-gray-300 text-center pt-0.5">3</div>
    <div class="h-[30px] w-[30px] rounded-[30px] bg-gray-300 text-center pt-0.5">4</div>
    <div class="h-[30px] w-[30px] rounded-[30px] bg-gray-300 text-center pt-0.5">...</div>
    <div class="h-[30px] w-[30px] rounded-[30px] bg-gray-300 text-center pt-0.5">57</div>
  </div>
</template>
