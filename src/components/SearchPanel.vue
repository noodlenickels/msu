<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiRegion from '@/use/api/region';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);
const { getRegions, getRegionById } = useApiRegion();

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);
const regionData = ref([]);

onMounted(async () => {
  regionData.value = await getRegions();
  dataLoaded.value = true;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <div class="bg-gray-200 rounded-[15px] max-h-[855px] p-[15px] flex flex-col gap-[20px]">
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
    <div class="flex flex-col gap-[10px] px-[10px] h-[580px] overflow-y-scroll">
      <div v-for="el in regionData">
        <input class="m-2" type="checkbox" :id="el.id" />
        <label :for="el.id">{{ el.name }}</label>
      </div>
    </div>
  </div>
</template>
