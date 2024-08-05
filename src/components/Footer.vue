<script setup>
import {computed, ref, onMounted} from 'vue';

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
  <div class="w100">
    <div class="grid grid-cols-12 bg-primary h-[130px] items-center px-[10%]">
      <div class="col-span-7 flex flex-col text-white text-somic text-[14px] gap-[10px]">
        <div>Учредитель - ООО "Медиа холдинг ТМТ"</div>
        <div>Свидетельство о регистрации средства массовой информации ИА №ТУ 64-00005 от 10 июня 2008 года</div>
      </div>
    </div>
  </div>
</template>
