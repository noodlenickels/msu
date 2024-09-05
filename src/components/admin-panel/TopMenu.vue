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

const emits = defineEmits(['change', 'closeForm', 'update:model-value']);

const route = useRoute()
const currentRouteName = computed(() => route.name)
const changeType = (val) => {
  emits('change', val);
}
onMounted(() => {

});


</script>

<template>
  <div class="w100 mb-[30px] sm:mt-0 menu">
    <div class="grid grid-cols-4 font-somic md:text-[15px] text-[13px] flex gap-[7%] justify-between sm:h-[50px] h-[250px] px-[10%] items-center border-b-2">
      <RouterLink @click="changeType('news')" class="sm:col-span-1 col-span-5" to="/admin_panel/news">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'admin_news' ? 'text-black' : 'text-gray-400'">Новости</div>
      </RouterLink>
      <RouterLink @click="changeType('opinion')" class="sm:col-span-1 col-span-5" to="/admin_panel/opinion">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'admin_opinion' ? 'text-black' : 'text-gray-400'">Мнения</div>
      </RouterLink>
      <!--      <RouterLink to="/knowledge_base">-->
      <!--      <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'knowledge_base' ? 'text-black' : 'text-gray-400'">База знаний</div>-->
      <!--      </RouterLink>-->
      <RouterLink @click="changeType('interview')" class="sm:col-span-1 col-span-5" to="/admin_panel/interview">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'admin_interview' ? 'text-black' : 'text-gray-400'">Интервью</div>
      </RouterLink>
      <RouterLink @click="changeType('point_of_view')" class="sm:col-span-1 col-span-5" to="/admin_panel/point_of_view">
        <div class="flex justify-center hover:text-blue-950" :class="currentRouteName === 'admin_point_of_view' ? 'text-black' : 'text-gray-400'">Точки зрения</div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.menu{
  animation: open-animation 2s forwards;
}
</style>