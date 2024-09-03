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

<!--<style src="./assets/design/_compilation.css"></style>-->
<style>
html, body {width:100%; overflow-x:hidden}
</style>
<script>
</script>

