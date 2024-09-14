<script setup>
import {computed, ref, onMounted} from 'vue';
import useApiMain from '@/use/api/main';

const props = defineProps({
  image: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: true,
  }
});

const { getPhotoUrl } = useApiMain();
const photo = ref();
const dataLoaded = ref(false);

onMounted(async () => {
  // photo.value = await getPhotoUrl(props.data.image);
  dataLoaded.value = true;
});

</script>

<template>
  <RouterLink :to="'/news/' + data.id">
  <div>
      <div class="grid md:grid-cols-12 grid-cols-6 flex gap-[15px]">
        <img class="col-span-2 rounded-[10px]" :src="data.image || '/images/photo.jpg'" />
        <div class="md:col-span-9 col-span-4 flex flex-col gap-[5px]">
            <div class="text-[14px] mr-auto bg-gray-200 rounded-[10px] px-[10px] py-[3px] font-somic">
              {{ data.region }}
            </div>

          <div class="text-[14px] font-somic truncate-card">
            {{ data.title}}
          </div>
        </div>
        <div class="md:col-span-1 hidden text-[14px] text-gray-400 font-somic">
          {{ data.date }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>
