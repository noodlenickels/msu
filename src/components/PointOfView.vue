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
  <div class="w100 px-[10%]">
    <div class="flex items-end mb-[30px] gap-[15px] w100">
      <div class="w-auto text-[18px] font-somic text-black font-semibold">Точка зрения</div>
      <div class="flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-2 gap-[25px]">
        <Card class="md:col-span-1 col-span-2" :img="'man2.png'" :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
        <Card class="md:col-span-1 col-span-2" :img="'man3.png'" :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
        <Card class="md:col-span-1 col-span-2" :img="'man4.png'" :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
        <Card class="md:col-span-1 col-span-2" :img="'man5.png'" :title="'Развивая привлекательность города, мы делаем Казань комфортнее'" :text="'Город заметно изменился'" :name="'Ильсур Метшин'"/>
    </div>
  </div>
</template>
