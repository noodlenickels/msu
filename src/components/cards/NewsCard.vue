<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  img: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: true,
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const imgLink = computed(() => {
  return '/images/'+props.data.img;
});
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
  <div>
      <div class="grid md:grid-cols-12 grid-cols-6 flex gap-[15px]">
        <div class="col-span-1 text-[14px] text-gray-400 font-somic">
          {{ data.date }}
        </div>
        <img class="col-span-2 rounded-[10px]" :src="imgLink" />
        <div class="md:col-span-9 col-span-3 flex flex-col gap-[5px]">
            <div class="text-[14px] max-w-[150px] bg-gray-200 rounded-[10px] px-[10px] py-[3px] font-somic">
              {{ data.title }}
            </div>

          <div class="text-[14px] font-somic">
            {{ data.text}}
          </div>
        </div>
      </div>
    </div>
</template>
