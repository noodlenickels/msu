<script setup>
import {computed, ref, onMounted} from 'vue';
import Card from '@/components/Card.vue';
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
  <div class="w100 px-[10%]">
    <div class="grid grid-cols-7 flex items-end mb-[30px] gap-[5px] w100">
      <div class="col-span-1 text-[18px] font-somic text-black font-semibold">Точка зрения</div>
      <div class="col-span-6 flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-2 gap-[25px]">
        <Card :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
        <Card :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
        <Card :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
        <Card :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
    </div>
  </div>
</template>
