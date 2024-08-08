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
  <div class="flex flex-col gap-[20px]">
    <div class="pl-[15px] border-l-2 text-[14px] text-black font-somic">
      Избран глава союзов городов Центра и Северо-Запада Российской Федерации
    </div>
    <div class="pl-[15px] border-l-2 text-[14px] text-black font-somic">
      Дмитрий Азаров: "Создать условия для развития ТОС как основы местного самоуправления"
    </div>
    <div class="pl-[15px] border-l-2 text-[14px] text-black font-somic">
      Севастополь посетил сенатор Дмитрий Азаров
    </div>
    <div class="pl-[15px] border-l-2 text-[14px] text-black font-somic">
      Перспективы развития местного самоуправления обсудили в крымском параметре
    </div>
    <div class="pl-[15px] border-l-2 text-[14px] text-black font-somic">
      Дмитрий Азаров: "Создать условия для развития ТОС как основы местного самоуправления"
    </div>
    <div class="pl-[15px] border-l-2 text-[14px] text-black font-somic">
      Перспективы развития местного самоуправления обсудили в крымском параметре
    </div>
  </div>
</template>
