<script setup>

import {RouterLink} from "vue-router";

const props = defineProps({
  type: {
    type: String,
    required: false,
  }
});
</script>

<template>
  <!----><div class="body grid gap-[15px] px-[10%]">
    <div class="grid grid-cols-12 px-[5%] py-[15px] border-[3px] font-somic text-gray-500 text-[17px]">
      <div class="col-span-8 grid grid-cols-7 items-center">
        <RouterLink  :to="`/admin_panel/${props.type}/create`">
          <div class="hover:text-blue-950 font-bold">Создать</div>
        </RouterLink>
<!--        <RouterLink to="/video">-->
<!--          <div class="hover:text-blue-950 font-bold">Изменить</div>-->
<!--        </RouterLink>-->
<!--        <RouterLink class="col-span-2" to="/video">-->
<!--          <div class="hover:text-blue-950 font-bold">Пометить на удаление</div>-->
<!--        </RouterLink>-->
        <div class="col-span-2">
          <div class="hover:text-blue-950 font-bold">Отображать статусы</div>
        </div>
        <div>
          <div class="hover:text-blue-950 font-bold">Экспорт</div>
        </div>
      </div>
      <div class="col-span-1"></div>
      <input class="col-span-3 border-2 border-amber-500 rounded-[15px] px-[20px] py-[5px]" type="text" name="search"
             id="search" placeholder="Найти..." value="">
    </div>
  </div>
</template>

<style scoped>

</style>