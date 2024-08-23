<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true
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
  return '/images/'+props.data.img;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <div>
    <div class="grid grid-cols-12 flex gap-[25px] w-full">
      <div class="relative col-span-4 floated">
        <img :src="imgLink" class="w-full"/>
        <div v-if="props.data.role" class="absolute w-auto l:text-[14px] l:h-[24px] md:h-[20px] md:text-[11px] h-[24px] text-[14px] font-somic bg-gray-100 rounded-[10px] text-black z-10	bottom-[7%] right-[5%] px-[7px]">{{ props.data.role }}</div>
      </div>
      <div class="nofloat col-span-8 flex flex-col gap-[10px]">
        <div class="text-[20px] font-somic text-black font-bold">
          {{ props.data.title }}
        </div>
        <div class="text-[14px] font-somic text-gray-400 leading-[20px] truncate-text">
          {{ props.data.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.truncate-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 2em;
  height: 13.5em;
}

.floated{
  float: left;
}

.nofloat{
  float:none
}


</style>
