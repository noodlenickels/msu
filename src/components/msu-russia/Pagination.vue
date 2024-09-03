<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  perPage: {
    type: Number,
    required: false,
    default: 1
  },
  currentPage: {
    type: Number,
    required: false,
    default: 1
  },
  totalPages: {
    type: Number,
    required: false,
    default: 1
  }
});

const emits = defineEmits(['paged']);

const pages = computed(() => { return Array.apply(null, {length: props.totalPages}).map(Number.call, Number)});

const sendEmit = (i) => {
  emits('paged', i);
};
</script>

<template>
  <div class="w100 flex justify-center gap-[15px]">
    <div @click="sendEmit(page+1)" v-for="page in pages?.slice(0, -1)" :key="page" class="h-[30px] w-[30px] rounded-[30px] text-center pt-0.5" :class="props.currentPage === page+1 ? 'bg-black text-white' : 'bg-gray-300'">{{ page+1 }}</div>
    <div v-if="pages.length > 5" class="h-[30px] w-[30px] rounded-[30px] bg-gray-300 text-center pt-0.5">...</div>
    <div @click="sendEmit(pages.length)" v-if="pages.length > 1" class="h-[30px] w-[30px] rounded-[30px] text-center pt-0.5" :class="props.currentPage === pages.length ? 'bg-black text-white' : 'bg-gray-300'">{{ pages.length }}</div>
  </div>
</template>
