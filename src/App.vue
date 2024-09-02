<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import useApiMain from '@/use/api/main';

const {getPhotoUrl} = useApiMain();

const photo = getPhotoUrl();
</script>

<template>
  <RouterView />
</template>

<script>
console.log(localStorage.theme)
localStorage.theme = 'light'
</script>

