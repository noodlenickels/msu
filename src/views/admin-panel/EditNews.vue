<script setup>
import MainBlock from './MainBlock.vue'
import ListOfActions from './ListOfActions.vue'
import Navigation from './Navigation.vue'
import Checkboxes from './Checkboxes.vue'

const props = defineProps({
  data: {
    type: Object,
    required: false,
  }
});

const formatDate = (d) => {
  return `${d.getDate().toString().padStart(2, '0')}.${(d.getMonth()+1).toString().padStart(2, '0')}.${d.getFullYear()}`;
}
</script>
<template>
    <MainBlock class = "flex h-lvh">
        <ListOfActions></ListOfActions>
        <div class = " h-[100%] w-[100%]">
            <div class ="flex flex-row mt-[5px] ml-[5px]">
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px] border-blue-500"><span>Новости</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600"><span>Мнения</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600"><span>Интервью</span></a>
            </div>
            <div class = "flex flex-row ml-[5px] mt-[5px]">
                <div>
                    <ul class = "list-none">
                        <li class = "inline">
                            <input type="checkbox" id = "2" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="2" class = "inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
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
      <div class="flex flex-row mt-[5px]">
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 border-r-2  border-gray-400"><span>Создать</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Изменение</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Пометка на удаление</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 border-r-2  border-gray-400"><span>Выставить в первую полосу</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Эксперты</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Видео</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 border-r-2  border-gray-400"><span>Редактор</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Субъекты<br>и люди</span></a>
        <a href=""
           class="flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Видео</span></a>
      </div>
      <div class='flex'>
        <table class="border-2 bg-black-border w-[100%]">
          <thead>
          <tr>
            <td class="">№ п/п</td>
            <th class="">Дата публикации</th>
            <th class="border-collapse border-1 border-gray-500">Заголовок</th>
            <th class="border-collapse border-1 border-gray-500">Регион</th>
            <th class="border-collapse border-1 border-gray-500">Источник</th>
            <th class="border-collapse border-1 border-gray-500">Дата обновления</th>
            <th class="border-collapse border-1 border-gray-500">Комментарий</th>
          </tr>
          </thead>
          <tbody class="text-center">
          <tr v-for="data in props.data">
            <td>{{data.id}}</td>
            <td>{{data.date}}</td>
            <td><div class="max-w-[500px]">{{data.title}}</div></td>
            <td>{{data.subject}}</td>
            <td>{{data.source}}</td>
            <td>{{formatDate(new Date(data.updated))}}</td>
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