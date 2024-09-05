<script setup>
import {ref} from "vue";

const checked = ref([]);

import {RouterLink} from "vue-router";
</script>

<template>
  <div class="body grid gap-[15px]">
    <div class="grid grid-cols-12 py-[15px] font-somic text-gray-500 text-[17px] font-semibold">
      <div class="col-span-12 flex gap-[20px] items-center">
        <div>
          <input v-model="checked" class="m-2" value="Опубликованные" type="checkbox" />
          <label for="Опубликованные">Опубликованные</label>
        </div>
        <div>
          <input v-model="checked" class="m-2" value="Редактируются" type="checkbox" />
          <label for="Редактируются">Редактируются</label>
        </div>
        <div>
          <input v-model="checked" class="m-2" value="Ожидающие публикации" type="checkbox" />
          <label for="Ожидающие публикации">Ожидающие публикации</label>
        </div>
        <div>
          <input v-model="checked" class="m-2" value="Снятые с публикации" type="checkbox" />
          <label for="Снятые с публикации">Снятые с публикации</label>
        </div>
        <div>
          <input v-model="checked" class="m-2" value="Заблокированные" type="checkbox" />
          <label for="Заблокированные">Заблокированные</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>