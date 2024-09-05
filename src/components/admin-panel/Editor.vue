<script setup>
import useApiNews from '@/use/api/news';
import {onMounted, ref} from "vue";


const newsData = ref([]);
const dataLoaded = ref(false);
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
  mode: {
    type: String,
    required: false
  }
});

onMounted(async () => {
  dataLoaded.value = true;
});

</script>

<template>
  <div v-if="dataLoaded" class="body px-[10%]">
    <div class="py-[20px] px-[20px] border-[3px] flex flex-col gap-[25px]">
      <div class=""></div>
    </div>
  </div>
</template>

<style scoped>

</style>