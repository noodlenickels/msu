<script setup>
import {computed, ref, onMounted} from 'vue';
import {useRoute, RouterLink, RouterView} from 'vue-router';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

const route = useRoute()
const currentRouteName = computed(() => route.name)

onMounted(() => {

});

const closeForm = () => {
  emits('close');
};
const menuItem = ref('Главная');

</script>

<template>
  <div class="w100 md:mb-[50px] mb-[20px]">
    <div class="grid grid-cols-6 font-somic md:text-[15px] text-[12px] flex gap-[7%] justify-between h-[50px] px-[10%] items-center border-b-2">
      <RouterLink to="/">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'home' ? 'text-black' : 'text-gray-400'">Главная</div>
      </RouterLink>
      <RouterLink to="/video">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'video' ? 'text-black' : 'text-gray-400'">Видео</div>
      </RouterLink>
<!--      <RouterLink to="/knowledge_base">-->
<!--      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'knowledge_base' ? 'text-black' : 'text-gray-400'">База знаний</div>-->
<!--      </RouterLink>-->
      <RouterLink to="/interview">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'interview' ? 'text-black' : 'text-gray-400'">Интервью</div>
      </RouterLink>
      <RouterLink to="/opinion">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'opinion' ? 'text-black' : 'text-gray-400'">Мнения</div>
      </RouterLink>
      <RouterLink to="/person">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'person' ? 'text-black' : 'text-gray-400'">Персона</div>
      </RouterLink>
    </div>
  </div>
</template>
