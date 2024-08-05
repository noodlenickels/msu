<script setup>
import {computed, ref, onMounted} from 'vue';
import {RouterLink, RouterView} from 'vue-router';

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
  <div class="w100 mb-[100px]">
    <div class="grid grid-cols-6 text-[15px] flex gap-[7%] justify-between h-[50px] px-[10%] items-center border-b-2">
      <RouterLink to="/">
      <div class="flex justify-center">Главная</div>
      </RouterLink>
      <RouterLink to="/video">
        <div class="flex justify-center">Видео</div>
      </RouterLink>
      <RouterLink to="/knowledge_base">
      <div class="flex justify-center">База знаний</div>
      </RouterLink>
      <RouterLink to="/interview">
      <div class="flex justify-center">Интервью</div>
      </RouterLink>
      <RouterLink to="/opinion">
      <div class="flex justify-center">Мнения</div>
      </RouterLink>
      <RouterLink to="/person">
      <div class="flex justify-center">Персона</div>
      </RouterLink>
    </div>
  </div>
</template>
