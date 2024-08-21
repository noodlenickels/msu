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
    <div class="grid md:grid-cols-12 grid-cols-6 bg-primary h-[110px] md:gap-[5px] gap-[10px] items-center justify-between px-[10%]">
      <div class="l:col-span-1 md:col-span-2 col-span-1">
        <img src="@/assets/icons/logo.png" alt="Логотип" class=""/>
      </div>
      <div class="flex flex-col text-white font-somic md:col-span-7 sm:col-span-3 col-span-4">
        <div class="md:text-[16px] l:text-[19.4px] text-[12px]">всероссийское информационное агенство</div>
        <div class="md:text-[22px] l:text-[27px] text-[16.5px] font-bold">МЕСТНОЕ САМОУПРАВЛЕНИЕ</div>
      </div>
      <div class="justify-end l:flex l:col-span-2 md:col-span-3 hidden col-span-2">
        <input class="flex-grow max-w-[450px] min-w-[200px] rounded-[15px] px-[20px] py-[5px]" type="text" name="search" id="search" placeholder="Найти на сайте" value="">
      </div>
      <div class="sm:col-span-2 flex gap-5 ml-auto col-span-1">
        <img src="@/assets/icons/telegram.svg" alt="Соцсеть" class="white sm:h-[25px] h-[15px]"/>
        <img src="@/assets/icons/vk.svg" alt="Соцсеть" class="white sm:h-[25px] h-[15px]"/>
        <img src="@/assets/icons/youtube.svg" alt="Соцсеть" class="white sm:h-[25px] h-[15px]"/>
      </div>
    </div>
  </div>
</template>
