<script setup>
import {computed, ref, onMounted, watch} from 'vue';
import useApiRegion from '@/use/api/region';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['search', 'regions']);

const { getRegions } = useApiRegion();

const dataLoaded = ref(false);

const regionData = ref([]);
const checked = ref([]);

const searchRegions = ref('');
const searchNews = ref('');

onMounted(async () => {
  regionData.value = await getRegions();
  dataLoaded.value = true;
});

watch(searchRegions, async () => {
  regionData.value = await getRegions(searchRegions.value);
})

watch(searchNews, async () => {
  emits('search', searchNews.value);
})

watch(checked, async () => {
  emits('regions', checked.value);
})
</script>