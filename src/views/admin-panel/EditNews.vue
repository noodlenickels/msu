<script setup>
import MainBlock from './MainBlock.vue'
import ListOfActions from './ListOfActions.vue'
import Navigation from './Navigation.vue'
import Checkboxes from './Checkboxes.vue'
import { ref } from 'vue';
import { storage } from '../../firebase'; // импортируем Firebase Storage
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"; // функции для работы с файлами
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // импортируем uuid

const title = ref('');
const content = ref('');
const source = ref('');
const sys_Comment = ref('');
const publication_date = ref('');
const regions_and_peoples_id = ref('');
const file = ref(File);
const fileUrl = ref('');
const user_id = ref('');
const token = '3|wJveuPmpx29SqC3RrxuIsugtLlFKZ1j33WSIA1fo16e8fa4d';

// Функция для загрузки файла в Firebase
const uploadFileToFirebase = async (fileName) => {
  if (!file.value) return;

  const fileRef = storageRef(storage, `root_files/ImageStorage/News/${fileName}`);
  const snapshot = await uploadBytes(fileRef, file.value);
  fileUrl.value = await getDownloadURL(snapshot.ref);
};

// Функция для отправки данных на сервер
const createNews = async () => {
  const fileName = uuidv4();

  await uploadFileToFirebase(fileName); // сначала загружаем файл в Firebase

  const requestData = {
    path_to_image_or_video: `root_files/ImageStorage/News/${fileName}`,
    title: title.value,
    content: content.value,
    source: source.value,
    sys_Comment: sys_Comment.value,
    publication_date: publication_date.value,
    regions_and_peoples_id: regions_and_peoples_id.value,
    user_id: user_id.value | null,
  };

  try {
    const response = await axios.post('https://app.msu-russia.ru/api/createNews', requestData,
        {
        headers: {
          'Authorization': `Bearer ${token}`, // Добавляем заголовок авторизации
          'Content-Type': 'application/json; charset=UTF-8' // Устанавливаем тип контента
        }
      }
    );
    console.log('News created successfully', response.data);
  } catch (error) {
    console.error('Error creating news:', error);
  }
};

</script>
<template>
    <MainBlock class = "flex h-lvh">
        <ListOfActions></ListOfActions>
        <div class = " h-[100%] w-[100%]">
            <div class="flex flex-col p-4">
        <h2 class="text-lg font-bold mb-4">Создать Новость</h2>
        
        <!-- Форма создания новости -->
        <form @submit.prevent="createNews" class="space-y-4">
          <div>
            <label for="title" class="block">Заголовок</label>
            <input v-model="title" type="text" id="title" class="border p-2 w-full" required />
          </div>
          
          <div>
            <label for="content" class="block">Контент</label>
            <textarea v-model="content" id="content" class="border p-2 w-full" rows="4" required></textarea>
          </div>
          
          <div>
            <label for="source" class="block">Источник</label>
            <input v-model="source" type="text" id="source" class="border p-2 w-full" />
          </div>
          
          <div>
            <label for="sys_Comment" class="block">Системный комментарий</label>
            <input v-model="sys_Comment" type="text" id="sys_Comment" class="border p-2 w-full" />
          </div>
          
          <div>
            <label for="publication_date" class="block">Дата публикации</label>
            <input v-model="publication_date" type="datetime-local" id="publication_date" class="border p-2 w-full" required />
          </div>
          
          <div>
            <label for="regions_and_peoples_id" class="block">ID Региона и народа</label>
            <input v-model="regions_and_peoples_id" type="number" id="regions_and_peoples_id" class="border p-2 w-full" required />
          </div>
          
          <div>
            <label for="file" class="block">Загрузить изображение или видео</label>
            <input @change="e => file.value = e.target.files[0]" type="file" id="file" class="border p-2 w-full" required />
          </div>
          
          <div class="mt-4">
            <button type="submit" class="bg-blue-500 text-white p-2 rounded">Создать новость</button>
          </div>
        </form>
      </div>
            <div class ="flex flex-row mt-[5px] ml-[5px]">
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 rounded-sm border-2 ml-[3px] mr-[3px] border-blue-500"><span>Редактор</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600"><span>Субъекты<br>и люди</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 rounded-sm border-2 ml-[3px] mr-[3px] border-neutral-600"><span>Видео</span></a>
            </div>
            <div class = "flex flex-row ml-[5px] mt-[5px]">
                <div>
                    <ul class = "list-none">
                        <li class = "inline">
                            <input type="checkbox" id = "2" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="2" class = "inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Опубликованные</label>
                        </li>
                        <li class = "inline">
                            <input type="checkbox" id = "3" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="3" class = "inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Ожидающие публикации</label>
                        </li>
                        <li class = "inline">
                            <input type="checkbox" id = "4" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="4" class = "inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Снятые с публикации</label>
                        </li>
                        <br>
                        <li class = "inline">
                            <input type="checkbox" id = "5" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="5" class = " mt-[5px] inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Редактируется</label>
                        </li>
                        <li class = "inline">
                            <input type="checkbox" id = "6" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="6" class = "inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Ожидающие подтверждения</label>
                        </li>
                        <li class = "inline">
                            <input type="checkbox" id = "7" value=""  class=" peer absolute opacity-0 focus:border-2 focus:border-[#e9a1ff]">
                            <label for="7" class = "inline-block bg-neutral-100 border-2 border-gray-400 text-[#adadad] rounded-[25px] whitespace-nowrap mx-[3px] py-[8px] px-[12px] cursor-pointer
                            before:inline-block before:p-[2px 6px 2px 2px] before:content-['✖'] peer-checked:before:content-['✔'] peer-checked:border-2 peer-checked:border-[#1bdbf8] peer-checked:bg-[#12bbd4] peer-checked:text-white text-[16px]">Заблокированные</label>
                        </li>
                    </ul>
                </div>
                <div class = "flex">
                    <button class = 'text-[16px]  w-[180px] rounded-md ml-[10px] h-[48px] bg-primary text-white'>Отображать статтусы</button>
                </div>
                <div class = "flex ml-[250px] mt-[10px]">
                    <label for="" class = "text-[16px]"> Поиск
                        <input type="text" class = "border-2 border-gray-400">
                    </label>
                </div>
            </div> 
            <div class = "flex flex-row mt-[5px]">
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 border-r-2  border-gray-400"><span>Создать</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Изменение</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Пометка на удаление</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 border-r-2  border-gray-400"><span>Выставить в первую полосу</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Эксперты</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Видео</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-blue-300 border-r-2  border-gray-400"><span>Редактор</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Субъекты<br>и люди</span></a>
                <a href="" class = "flex text-center w-[120px] h-[48px] items-center justify-center bg-slate-200 border-r-2 border-gray-400"><span>Видео</span></a>
            </div>
            <div class = 'flex'>
                <table class =  "border-2 bg-black-border w-[100%]">
                    <thead>
                        <tr>
                            <td class = "">№ п/п</td>
                            <th class = "" >Дата публикации</th>
                            <th class = "border-collapse border-1 border-gray-500">Заголовок</th>
                            <th class = "border-collapse border-1 border-gray-500">Регион</th>
                            <th class = "border-collapse border-1 border-gray-500">Источник</th>
                            <th class = "border-collapse border-1 border-gray-500">Дата обновления</th>
                            <th class = "border-collapse border-1 border-gray-500">Комментарий</th>
                        </tr>
                    <tr>
                        <td>Urus</td>
                        <td>Lamborghini</td>
                        <td>2017</td>
                        <td>Automatic</td>
                    </tr>
                    <tr>
                        <td>Cayenne Turbo</td>
                        <td>Porsche</td>
                        <td>2018</td>
                        <td>Automatic</td>
                    </tr>
                    <tr>
                        <td>Durango SRT</td>
                        <td>Dodge</td>
                        <td>2018</td>
                        <td>Automatic</td>
                    </tr>
                    <tr>
                        <td>Juke Nismo RS</td>
                        <td>Nissan</td>
                        <td>2014</td>
                        <td>Manual</td>
                    </tr>
                    <tr>
                        <td>Escalade ESV</td>
                        <td>Cadillac</td>
                        <td>2012</td>
                        <td>Automatic</td>
                    </tr>
                    <tr>
                        <td>Levante S</td>
                        <td>Maserati</td>
                        <td>2017</td>
                        <td>Automatic</td>
                    </tr>
                                </thead>
                            </table>
                        </div>
        </div>
    </MainBlock>
    
</template>