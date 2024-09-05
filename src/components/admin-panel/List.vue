<script setup>
import useApiNews from '@/use/api/news';
import {onMounted, ref} from "vue";


const newsData = ref([]);
const dataLoaded = ref(false);
const props = defineProps({
  data: {
    type: Object,
    required: false,
  }
});
onMounted(async () => {
  // if ( formMode.value === 'edit' ) {

  dataLoaded.value = true;
});

const formatDate = (d) => {
  return `${d.getDay().toString().padStart(2, '0')}.${(d.getMonth()+1).toString().padStart(2, '0')}.${d.getFullYear()}`;
}
</script>

<template>
  <div v-if="dataLoaded" class="body px-[10%]">
    <div class="py-[20px] px-[20px] border-[3px] flex flex-col gap-[25px]">
      <slot></slot>
      <table class="border-2 border-gray-300 CLStable br-h  PLT" data-br="gray-300" style="word-break: break-word;">

        <thead class="thead font-somic font-bold bg-gray-700 text-white">
        <tr class="whitespace-nowrap">
          <td class="">
            <div class="  strCLSitem p-5">Дата публикации</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">Загловок</div>
          </td>
          <td class="">
            <div class="  strCLSitem p-5">Регион или персона</div>
          </td>
          <td class="">
            <div class="  strCLSitem p-5">Источник</div>
          </td>
          <td class="">
            <div class="  strCLSitem p-5">Дата обновления</div>
          </td>
          <td class="">
            <div class="  strCLSitem p-5">Комментарий</div>
          </td>
        </tr>
        </thead>

        <tbody class="tbody hovering striped">
        <tr v-for="el in props.data" class="PLT border-2 border-gray-300">
          <td>
            <div class="  strCLSitem p-5">{{formatDate(new Date(el.created))}}</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">{{el.title}}</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">{{el.subject}}</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">Источник</div>
          </td>
          <td>
            <div class="  strCLSitem p-5">{{ formatDate(new Date(el.updated)) }}</div>
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