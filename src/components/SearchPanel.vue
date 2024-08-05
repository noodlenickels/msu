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

const cities = [
  {
    name: 'abakan',
    title: 'Абакан'
  },
  {
    name: 'artem',
    title: 'Артем'
  },
  {
    name: 'bratsk',
    title: 'Братск'
  },
  {
    name: 'ekaterinburg',
    title: 'Екатеринбург'
  },
  {
    name: 'irkutsk',
    title: 'Иркутск'
  },
  {
    name: 'kazan',
    title: 'Казань'
  },
  {
    name: 'krasnoyarsk',
    title: 'Красноярск'
  },
  {
    name: 'kurgan',
    title: 'Курган'
  },
  {
    name: 'tomsk',
    title: 'Томск'
  },
  {
    name: 'ufa',
    title: 'Уфа'
  },
  {
    name: 'hanti-mansiisk',
    title: 'Ханты-Мансийск'
  },
  {
    name: 'khabarovsk',
    title: 'Хабаровск'
  },
  {
    name: 'uzno-sahalinsk',
    title: 'Южно-Сахалинск'
  },
];
</script>

<template>
  <div class="w100 bg-gray-200 rounded-[15px] max-h-[855px] p-[15px] flex flex-col gap-[40px]">
    <div class="flex flex-col gap-[10px]">
      <div class="text-[17.4px] text-gray-900 font-somic">
        Поиск по ключевым словам
      </div>
      <input class="h-[40px] rounded-[15px] pl-[20px] pr-[5px]" placeholder="Найти новость" type="search" name="" />
    </div>
    <div class="flex flex-col gap-[10px]">
      <div class="text-[17.4px] text-gray-900 font-somic">
        По региону
      </div>
      <input class="h-[40px] rounded-[15px] pl-[20px] pr-[5px]" placeholder="Найти регион" type="search" name="" />
    </div>
    <div class="flex flex-col gap-[10px] px-[10px]">
      <div v-for="el in cities">
        <input class="m-2" type="checkbox" :id="el.name" :name="el.name" />
        <label :for="el.name">{{ el.title }}</label>
      </div>
    </div>
  </div>
</template>
