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

const emits = defineEmits(['toggle', 'closeForm', 'update:model-value']);

const toggleMenu = () => {
  emits('toggle');
}

const isInvalid = ref(true);

const route = useRoute()
const currentRouteName = computed(() => route.name)

onMounted(() => {

});

const menuItem = ref('Главная');

</script>

<template>
  <div class="w100 mb-[50px] sm:mb-[30px] sm:mt-0 mt-[20px] menu">
    <div class="grid grid-cols-5 font-somic md:text-[15px] text-[13px] flex gap-[7%] justify-between sm:h-[50px] h-[250px] px-[10%] items-center border-b-2">
      <RouterLink @click="toggleMenu" class="sm:col-span-1 col-span-5" to="/">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'home' ? 'text-black' : 'text-gray-400'">Главная</div>
      </RouterLink>
      <RouterLink @click="toggleMenu" class="sm:col-span-1 col-span-5" to="/video">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'video' ? 'text-black' : 'text-gray-400'">Видео</div>
      </RouterLink>
<!--      <RouterLink to="/knowledge_base">-->
<!--      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'knowledge_base' ? 'text-black' : 'text-gray-400'">База знаний</div>-->
<!--      </RouterLink>-->
      <RouterLink @click="toggleMenu" class="sm:col-span-1 col-span-5" to="/interview">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'interview' ? 'text-black' : 'text-gray-400'">Интервью</div>
      </RouterLink>
      <RouterLink @click="toggleMenu" class="sm:col-span-1 col-span-5" to="/opinion">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'opinion' ? 'text-black' : 'text-gray-400'">Мнения</div>
      </RouterLink>
      <RouterLink @click="toggleMenu" class="sm:col-span-1 col-span-5" to="/person">
      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'person' ? 'text-black' : 'text-gray-400'">Персона</div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.menu{
  animation: open-animation 2s forwards;
}
</style>