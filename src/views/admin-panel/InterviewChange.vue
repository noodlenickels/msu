<script setup>
import MainBlock from './MainBlock.vue'
import ListOfActions from './ListOfActions.vue'
import {RouterLink} from "vue-router";
</script>
<template>
    <MainBlock class = "flex h-lvh">
        <ListOfActions></ListOfActions>
        <div class = " h-[100%] w-[100%]">
            <div class ="flex flex-row mt-[5px] ml-[5px]">
              <RouterLink to="/admin_panel/editor/news">
                <div
                    class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-300 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600">
                  <span>Новости</span></div>
              </RouterLink>
              <RouterLink to="/admin_panel/editor/opinion">
                <div
                    class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-300 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600">
                  <span>Мнения</span></div>
              </RouterLink>
              <RouterLink to="/admin_panel/editor/interview">
                <div
                    class="flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px]  border-blue-500">
                  <span>Интервью</span></div>
              </RouterLink>
              <div class = "flex ml-[50%] mt-[6px]">
                    <button class = 'text-[16px]  w-[180px] rounded-md ml-[10px] h-[48px] bg-primary text-white'>Назад</button>
                </div>
            </div>
            <div class = "flex flex-row ml-[260px] mt-[5px]">
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px]  border-blue-500"><span>Изменение</span></a>
                </div>
    
            
            <div class = "flex mt-[10px] justify-around">
                <label for="" class = "ml-[5px]">Заголовок</label>
                <input type="text"  class = "ml-[1px] w-[70%] h-[60px] border-2 border-primary">
                <input type="file" name="" id="">
            </div>
            <div class = "flex mt-[5px]">
                <label class = "ml-[15px]">Текст</label>
                <input type="text"  class = "ml-[55px] w-[90%] h-[300px] border-2 border-primary">
            </div>
            <div class = "flex mt-[5px] gap-5 ml-[100px]">
                <input type="datetime-local" class = "border-2 border-primary rounded-md">
                <label for="" class = "mt-[3px] ml-[1px]">Регион:</label>
                <select name="" id="" class = "border-2 border-primary rounded-md">
                    <option value="">Краснодарский край</option>
                    <option value="">Саратовская область</option>
                    <option value="">Республика Адыгея</option>
                </select>
                <label for="">Источник</label>
                <input type="text" class = "border-2 border-primary rounded-md">
            </div>
            <div class = "flex gap-[1%]">
                <label class = "ml-6">Комментарий</label>
                <input type="text" class = "border-2 border-primary ml-[100px] mt-[5px] w-[50%] h-[80px]">
                <div class = "flex-col">
                <label for="" class = "ml-[5px]">Ответственный</label>
                <input type="text" class = "border-2 border-primary rounded-md">
                <p class = " mt-[10px]">Статус: создается</p>
                <div class = "flex gap-4 flex-col mt-[10px]">
                <button class = "rounded-md ml-[10px] h-[40px] bg-primary px-4 text-white">Сохранить</button>
                <button class = "rounded-md ml-[10px] h-[40px] bg-primary px-4 text-white">Сохранить и отправить на подтверждение</button>
                </div>
                </div>
            </div>
        </div>
    </MainBlock>
    </template>