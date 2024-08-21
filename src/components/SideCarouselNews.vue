<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  id: {
    type: [Number, String],
    required: false,
  },
  text: {
    type: String,
    required: false,
  }
});

const emits = defineEmits(['chosen'])

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

const sendEmit = () => {
  emits('chosen', props.id);
};

</script>

<template>
    <div @mouseover="sendEmit" class="pl-[15px] border-l-2 md:text-[14px] text-[11px] text-black font-somic hover:text-blue-900 hover:border-blue-900">
      {{ props.text }}
    </div>
</template>
