<script setup>
import ListOfActions from './ListOfActions'
import {RouterLink} from "vue-router";
</script>

<template>
  <MainBlock class="flex h-lvh">
    <ListOfActions></ListOfActions>
    <div class="border-2 border-red-500 h-[100%] w-[100%]">
      <div class="w-[70%] mt-[30px] text-[16px] m-auto text-center px-6 py-8 font-medium bg-blue-300 text-primary">
        Здравствуйте, user name! Вы находитесь в разделе для редакторов и авторов новостей.
      </div>
      <RouterLink to="/admin_panel/editor/news">
        <div class="flex-row rounded-md bg-primary text-[16px] ml-[15%] mt-9 text-white w-[110px] px-4 py-4">Новости</div>
      </RouterLink>
      <div class=" flex flex-row gap-[10px] ml-[15%]">
        <RouterLink to="/admin_panel/editor/opinion">
        <div class="bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Мнения</div>
        </RouterLink>
        <div class="bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Регионы</div>
      </div>
      <div class=" flex flex-row gap-[10px] ml-[15%]">
        <div class="bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Видео</div>
        <RouterLink to="/admin_panel/editor/interview">
        <div class="bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Интервью</div>
        </RouterLink>
        <div class="bg-primary text-[16px] rounded-md mt-2 text-white w-[110px] px-4 py-4">Персона</div>
        <div class="bg-primary text-[16px] rounded-md mt-2 ml-[45%] text-white w-[110px] px-4 py-4">Настройки</div>
      </div>
    </div>

  </MainBlock>
</template>