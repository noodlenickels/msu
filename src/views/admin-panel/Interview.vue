<script setup>
import MainBlock from './MainBlock.vue'
import ListOfActions from './ListOfActions.vue'
import {RouterLink} from "vue-router";

const props = defineProps({
  data: {
    type: Object,
    required: false,
  }
});

const formatDate = (d) => {
  return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d.getFullYear()}`;
}
</script>
<template>
  <MainBlock class="flex h-lvh">
    <ListOfActions></ListOfActions>
    <div class=" h-[100%] w-[100%]">
      <div class="flex flex-row mt-[5px] ml-[5px]">
        <RouterLink to="/admin_panel/editor/news">
          <a href=""
             class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-300 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600"><span>Новости</span></a>
        </RouterLink>
        <RouterLink to="/admin_panel/editor/opinion">
          <a href=""
             class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-300 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600 "><span>Мнения</span></a>
        </RouterLink>
        <RouterLink to="/admin_panel/editor/interview">
          <a href=""
             class="flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px]  border-blue-500"><span>Интервью</span></a>
        </RouterLink>
      </div>
      <div class="flex flex-row ml-[5px] mt-[5px]">
        <div>
          <ul class="list-none">
            <li class="inline">
              <input type="checkbox" id="2" value=""
                     class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
              <label for="2" class="inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Опубликованные</label>
            </li>
            <li class="inline">
              <input type="checkbox" id="3" value=""
                     class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
              <label for="3" class="inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Ожидающие
                публикации</label>
            </li>
            <li class="inline">
              <input type="checkbox" id="4" value=""
                     class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
              <label for="4" class="inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Снятые
                с публикации</label>
            </li>
            <br>
            <li class="inline">
              <input type="checkbox" id="5" value=""
                     class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
              <label for="5" class=" mt-[5px] inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Редактируется</label>
            </li>
            <li class="inline">
              <input type="checkbox" id="6" value=""
                     class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
              <label for="6" class="inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Ожидающие
                подтверждения</label>
            </li>
            <li class="inline">
              <input type="checkbox" id="7" value=""
                     class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
              <label for="7" class="inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Заблокированные</label>
            </li>
          </ul>
        </div>
        <div class="flex">
          <button class='text-[16px]  w-[180px] rounded-md ml-[10px] h-[48px] bg-primary text-white'>Отображать
            статусы
          </button>
        </div>
        <div class="flex ml-[250px] mt-[10px]">
          <label for="" class="text-[16px]"> Поиск
            <input type="text" class="border-2 border-gray-400">
          </label>
        </div>
      </div>
      <div class="flex flex-row mt-[10px] mb-[3px]">
        <RouterLink to="/admin_panel/editor/interview/create">
        <div
           class=" flex text-[16px] w-[120px] rounded-md ml-[10px] items-center justify-center  h-[48px] bg-primary text-white"><span>Создать</span></div>
        </RouterLink>
        <RouterLink to="/admin_panel/editor/interview/edit">
        <div
           class=" flex text-[16px] w-[120px] rounded-md ml-[5px] items-center justify-center  h-[48px] bg-primary text-white"><span>Изменить</span></div>
        </RouterLink>
          <div
           class=" flex text-[16px] w-[150px] rounded-md ml-[5px] items-center justify-center px-2 py-2 text-center h-[48px] bg-primary text-white"><span>Пометка на удаление</span></div>
        <div
           class=" flex text-[16px] w-[150px] rounded-md ml-[5px] items-center px-2 py-2 text-center justify-center  h-[48px] bg-primary text-white"><span>Выставить в первую полосу</span></div>
        <div
           class=" flex text-[16px] w-[120px] rounded-md ml-[5px] items-center justify-center  h-[48px] bg-primary text-white"><span>Экспорт</span></div>
      </div>
      <div class='flex'>
        <table class="border border-collapse border-black w-[100%]">
          <thead>
          <tr class=" even:bg-white">
            <td class="">№ п/п</td>
            <th class="">Дата публикации</th>
            <th class="border-1 border-gray-500">Заголовок</th>
            <th class="border-collapse border-1 border-gray-500">Персона (ФИО)</th>
            <th class="border-collapse border-1 border-gray-500">Дата обновления</th>
            <th class="border-collapse border-1 border-gray-500">Комментарий</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="data in props.data" class=" even:bg-white odd:bg-blue-200 text-center">
            <td>{{data.id}}</td>
            <td>{{formatDate(new Date(data.date))}}</td>
            <td>
              <div class="text-left max-w-[500px]">{{ data.title }}</div>
            </td>            <td>{{data.subject}}</td>
            <td>{{ formatDate(new Date(data.updated)) }}</td>
            <td>Комментарий</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </MainBlock>

</template>

<style>
td div {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>