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
    <div class="grid grid-cols-2 bg-primary h-[110px] flex gap-[30px] items-center justify-between px-[10%]">
      <div class="flex gap-[30px]">
        <img src="@/assets/icons/logo.png" alt="Логотип" class="h-[60px]"/>
        <div class="flex flex-col text-white font-somic">
          <div class="text-[17.4px]">всероссийское информационное агенство</div>
          <div class="text-[24px] font-bold">МЕСТНОЕ САМОУПРАВЛЕНИЕ</div>
        </div>
      </div>
      <div class="justify-end flex">
        <input class="w-[400px] rounded-[15px] px-[20px] py-[5px]" type="text" name="search" id="search" placeholder="Найти на сайте" value="">
      </div>
    </div>
  </div>
</template>
