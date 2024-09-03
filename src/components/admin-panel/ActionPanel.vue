<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="body grid gap-[15px] px-[10%]">
    <div class="grid grid-cols-12 px-[5%] py-[15px] border-[3px] font-somic text-gray-500 text-[15px]">
      <div class="col-span-7 grid grid-cols-7 items-center">
        <RouterLink to="/video">
          <div class="hover:text-blue-950">Создать</div>
        </RouterLink>
        <RouterLink to="/video">
          <div class="hover:text-blue-950">Изменить</div>
        </RouterLink>
        <RouterLink class="col-span-2" to="/video">
          <div class="hover:text-blue-950">Пометить на удаление</div>
        </RouterLink>
        <RouterLink class="col-span-2" to="/video">
          <div class="hover:text-blue-950">Отображать статусы</div>
        </RouterLink>
        <RouterLink to="/video">
          <div class="hover:text-blue-950">Экспорт</div>
        </RouterLink>
      </div>
      <div class="col-span-2"></div>
      <input class="col-span-3 border-2 border-amber-500 rounded-[15px] px-[20px] py-[5px]" type="text" name="search"
             id="search" placeholder="Найти..." value="">
    </div>
  </div>
</template>

<style scoped>

</style>