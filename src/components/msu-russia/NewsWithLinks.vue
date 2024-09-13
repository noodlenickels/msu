<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

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

const imgLink = computed(() => {
  return '@/assets/images/' + props.img;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <div class = " h-[1%] mt-[-100px] w-[100%] md: py-[15%]">
    <div class="flex flex-col md:gap-[20px] gap-[10px]">
      <div class="text-[16.5px] md:text-[14px] l:text-[16.5px] font-bold text-black font-somic md: aspect-square  h-[70px]">
        {{ props.title }}
      </div>
      <div class="flex flex-col md: gap-[10px]">
        <img :src="props.img" alt="photo" class = "h-[60%] "/>
        <div class="text-[17.35px] text-gray-500 font-somic">
          {{ props.name }}
        </div>
        <div class="text-[14px] md:text-[12px] l:text-[14px] font-somic md:h-[110px] h-full">
          "{{ props.text }}"
        </div>
      </div>
      <a :href="props.link">
        <div class="bg-gray-200 rounded-[15px] flex gap-[20px] py-[10px] items-center justify-center">
          <div class="font-somic text-[15px]">
            Перейти на сайт
          </div>
          <img alt="arrow" src="../../assets/icons/arrow.png" class="h-[14px]"/>
        </div>
      </a>
    </div>
  </div>
</template>
