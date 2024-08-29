<script setup>
import {computed, ref, onMounted} from 'vue';
import Card from '@/components/cards/Card.vue';
import useApiPoint from '@/use/api/point';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const {getPointOfViewTopFour} = useApiPoint();

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

const opinionList = [
  {
    title: 'Развивая привлекательность города, мы делаем Казань комфортнее',
    img: 'man2.png',
    name: 'Ильсур Метшин',
    text: 'Город заметно изменился',
    role: 'мэр г.Казань'
  },
  {
    title: 'Перспектива реформы МСУ в свете бюджетных отношений',
    img: 'man3.png',
    name: 'Олег Грищенко',
    text: 'Престоящая реформа МСУ сегодня один из актуальнейших вопросов',
    role: 'глава МО “Город Саратов”'
  },
  {
    title: 'О муниципальной полиции',
    img: 'man4.png',
    name: 'Олег Грищенко',
    text: 'Обеспечение общественного порядка и безопасности граждан всгда было для городской власти одним из приоритетов',
    role: 'глава МО “Город Саратов”'
  },
  {
    title: 'Городская Агломерация — неизбежный путь развития городов',
    img: 'man5.png',
    name: 'Игорь Мещеряков',
    text: 'За 14 лет, которые я работаю в межмуниципальной среде',
    role: 'руководитель msu-russia.ru'
  }
];

const pointTopFour = ref([]);

onMounted(async () => {
  pointTopFour.value = await getPointOfViewTopFour();
  console.log(pointTopFour.value)
  pointTopFour.value[0].image = 'man2.png';
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <div class="w100 px-[10%]">
    <div class="flex items-end mb-[30px] gap-[15px] w100">
      <div class="w-auto text-[18px] font-somic text-black font-semibold">Точка зрения</div>
      <div class="flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-2 gap-[25px]">
<!--      тут поменять на 2 колонки!-->
        <Card v-for="point in pointTopFour" class="md:col-span-2 col-span-2" :data="point" />
    </div>
  </div>
</template>
