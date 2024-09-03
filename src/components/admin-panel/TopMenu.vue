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

const menuItem = ref('Главная');

</script>

<template>
  <div class="w100 mb-[30px] sm:mt-0 menu">
    <div class="grid grid-cols-4 font-somic md:text-[15px] text-[13px] flex gap-[7%] justify-between sm:h-[50px] h-[250px] px-[10%] items-center border-b-2">
      <RouterLink class="sm:col-span-1 col-span-5" to="/">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'home' ? 'text-black' : 'text-gray-400'">Новости</div>
      </RouterLink>
      <RouterLink class="sm:col-span-1 col-span-5" to="/video">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'video' ? 'text-black' : 'text-gray-400'">Мнения</div>
      </RouterLink>
      <!--      <RouterLink to="/knowledge_base">-->
      <!--      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'knowledge_base' ? 'text-black' : 'text-gray-400'">База знаний</div>-->
      <!--      </RouterLink>-->
      <RouterLink class="sm:col-span-1 col-span-5" to="/interview">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'interview' ? 'text-black' : 'text-gray-400'">Интервью</div>
      </RouterLink>
      <RouterLink class="sm:col-span-1 col-span-5" to="/opinion">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'opinion' ? 'text-black' : 'text-gray-400'">Точки зрения</div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.menu{
  animation: open-animation 2s forwards;
}
</style>