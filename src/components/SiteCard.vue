<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  img: {
    type: String,
    required: true,
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

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

const imgSrc = computed(() => {
  return `@/assets/sites/${props.img}.png`;
})

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <div>
    <img class="bg-gray-300 rounded-[15px]" :src="imgSrc" />
  </div>
</template>
