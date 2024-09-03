<script setup>
import useApiNews from '@/use/api/news';
import {onMounted, ref} from "vue";

const {getNews} = useApiNews();

const newsData = ref([]);
const dataLoaded = ref(false);

onMounted(async () => {
  // if ( formMode.value === 'edit' ) {
  const data = await getNews();
  newsData.value = data.data;

  dataLoaded.value = true;
});
</script>

<template>
  <div v-if="dataLoaded" class="body px-[10%]">
    <div class="py-[20px] px-[20px] border-[3px] flex flex-col gap-[25px]">
      <slot></slot>
      <table class="border-2 border-gray-300 CLStable br-h  PLT" data-br="gray-300" style="word-break: break-word;">

        <thead class="thead font-somic font-bold bg-gray-700 text-white">
        <tr class="whitespace-nowrap">
          <td class="w1">
            <div class="  strCLSitem p-5">№</div>
          </td>
          <td class="wmn200">
            <div class="  strCLSitem p-5">Дата публикации</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">Загловок</div>
          </td>
          <td class="wmn200">
            <div class="  strCLSitem p-5">Регион</div>
          </td>
          <td class="wmn200">
            <div class="  strCLSitem p-5">Источник</div>
          </td>
          <td class="wmn200">
            <div class="  strCLSitem p-5">Дата обновления</div>
          </td>
          <td class="wmn200">
            <div class="  strCLSitem p-5">Комментарий</div>
          </td>
        </tr>
        </thead>

        <tbody class="tbody hovering striped">
        <tr v-for="(news, i) in newsData" class="PLT" data-bg="green 100">
          <td>
            <div class="  strCLSitem p-5"><b>{{i+1}}</b></div>
          </td>
          <td>
            <div class="  strCLSitem p-5">{{news.date}}</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">{{news.title}}</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">{{news.region}}</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">Источник</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">Дата обновления</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">Комментарий</div>
          </td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>
</template>

<style scoped>

</style>