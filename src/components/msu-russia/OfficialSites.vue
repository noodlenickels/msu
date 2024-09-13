<script setup>
import {computed, ref, onMounted} from 'vue';
import SiteCard from '@/components/msu-russia/cards/SiteCard.vue';

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
  <div class="px-[10%]">
    <div class="flex items-end mb-[45px] gap-[15px] w100">
      <div class="md:text-[18px] m-auto text-[18px] font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">Официальные сайты</div>
      <div class=" md:flex-grow border-b-[2px] border-primary"></div>
    </div>
    <div class="grid grid-cols-3 gap-[25px]">
      <a class="block md:col-span-1 col-span-3" href="http://kremlin.ru/">
        <div class="bg-gray-200 rounded-[15px] flex justify-center">
          <img src="../../assets/sites/site1.png" />
        </div>
      </a>
      <a class="block md:col-span-1 col-span-3" href="http://government.ru/">
        <div class="bg-gray-200 rounded-[15px] flex justify-center">
          <img src="../../assets/sites/site2.png" />
        </div>
      </a>
      <a class="block md:col-span-1 col-span-3" href="http://duma.gov.ru/">
        <div class="bg-gray-200 rounded-[15px] flex justify-center">
          <img src="../../assets/sites/site3.png" />
        </div>
      </a>
      <a class="block md:col-span-1 col-span-3" href="http://council.gov.ru/">
        <div class="bg-gray-200 rounded-[15px] flex justify-center">
          <img src="../../assets/sites/site4.png" />
        </div>
      </a>
      <a class="block md:col-span-1 col-span-3" href="https://oprf.ru/">
        <div class="bg-gray-200 rounded-[15px] flex justify-center">
          <img src="../../assets/sites/site5.png" />
        </div>
      </a>
      <a class="block md:col-span-1 col-span-3" href="https://объясняем.рф/">
        <div class="bg-gray-200 rounded-[15px] flex justify-center">
          <img src="../../assets/sites/site6.png" />
        </div>
      </a>
    </div>
  </div>
</template>
