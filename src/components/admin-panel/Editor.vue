<script setup>
import useApiNews from '@/use/api/news';
import {computed, onMounted, ref} from "vue";
import {useRoute, RouterLink, RouterView} from 'vue-router';


const newsData = ref([]);
const dataLoaded = ref(false);
const props = defineProps({
  data: {
    type: Object,
    required: false,
  },
  mode: {
    type: String,
    required: false
  }
});

const route = useRoute()

const createTitle = computed(() => {
  switch (route.name) {
    case 'admin_point_of_view_create':
      return 'Создать точку зрения';
    case 'admin_interview_create':
      return 'Создать интервью';
    case 'admin_opinion_create':
      return 'Создать мнение';
    case 'admin_news_create':
      return 'Создать новость';
    case 'admin_point_of_view_edit':
      return 'Изменить точку зрения';
    case 'admin_interview_edit':
      return 'Изменить интервью';
    case 'admin_opinion_edit':
      return 'Изменить мнение';
    case 'admin_news_edit':
      return 'Изменить новость';
  }
});

onMounted(async () => {
  dataLoaded.value = true;
});

</script>

<template>
  <div v-if="dataLoaded" class="px-[10%] mb-[40px]">
    <div class="py-[20px] px-[40px] border-[3px] flex flex-col gap-[25px]">
      <div class="topPart">
        <div class="flex justify-between items-center mb-[15px] gap-[30px]">
          <div class="font-somic font-bold text-[25px]">{{ createTitle }}</div>
          <div class="flex gap-[20px]">
            <div class="flex flex-col gap-[10px] mb-[20px] w-[300px]">
              <div class="font-somic font-bold text-[17px]">Заголовок статьи</div>
              <input class="border-2 rounded-[15px] px-[20px] py-[5px] text-[15px]" type="text"
                     name="search"
                     id="title" placeholder="Укажите заголовок статьи..." :value="props.data.title">
            </div>
            <div class="flex flex-col gap-[10px] mb-[20px]">
              <div class="font-somic font-bold text-[17px]">Дата публикации</div>
              <input class="border-2 rounded-[15px] px-[20px] py-[5px] text-[15px]" type="date"
                     name="search"
                     id="title" :value="new Date(props.data.created)">
            </div>
            <div class="flex flex-col gap-[10px] mb-[20px] w-[200px]">
              <div class="font-somic font-bold text-[17px]">Изображение</div>
              <input class="border-2 rounded-[15px] px-[10px] py-[5px] text-[15px]" type="file"
                     name="search"
                     id="title" value="">
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[20px] mb-[15px]">
          <div class="font-somic font-bold text-[19px]">Текст статьи</div>
          <textarea :value="props.data.text" class="h-[150px] border-2 rounded-[15px] text-[15px] px-[20px] py-[5px]" placeholder="Укажите текст статьи..."></textarea>
        </div>

        <div class="grid grid-cols-5 gap-[50px]">
          <div class="col-span-2 flex flex-col gap-[20px]">
            <div class="font-somic font-bold text-[19px]">Комментарий к объекту</div>
            <textarea class="h-[100px] border-2 rounded-[15px] text-[15px] px-[20px] py-[5px]" placeholder="Укажите комментарий..."></textarea>
          </div>
          <div class="col-span-3 flex flex-col gap-[20px] items-end">
            <div class="flex gap-[10px]">
              <div class="font-somic text-[18px]">Ответственный</div>
              <select class="w-[350px] font-somic text-[18px] border-1 border-gray-300">
                <option class="font-somic text-[18px]" value="0">Человек 1</option>
                <option class="font-somic text-[18px]" value="1">Человек 2</option>
                <option class="font-somic text-[18px]" value="2">Человек 3</option>
                <option class="font-somic text-[18px]" value="3">Человек 4</option>
                <option class="font-somic text-[18px]" value="4">Человек 5</option>
                <option class="font-somic text-[18px]" value="5">Человек 6</option>
                <option class="font-somic text-[18px]" value="6">Человек 7</option>
                <option class="font-somic text-[18px]" value="7">Человек 8</option>
                <option class="font-somic text-[18px]" value="8">Человек 9</option>
                <option class="font-somic text-[18px]" value="9">Человек 10</option>
                <option class="font-somic text-[18px]" value="10">Человек 11</option>
                <option class="font-somic text-[18px]" value="11">Человек 12</option>
              </select>
            </div>
            <div class="font-somic text-[18px]">Статус: создается</div>
            <div class="flex justify-end gap-[20px]">
              <div class="px-[10px] py-[7px] rounded-[10px] bg-primary text-white font-somic text-[18px]">Сохранить</div>
              <div class="px-[10px] py-[7px] rounded-[10px] bg-primary text-white font-somic text-[18px]">Сохранить и отправить на рассмотрение</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

select {
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
}

select::-ms-expand {
  display: none;
}

select {
  outline: none;
}
</style>