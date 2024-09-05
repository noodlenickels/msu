<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/admin-panel/Header.vue';
import TopMenu from '@/components/admin-panel/TopMenu.vue';
import Footer from "@/components/admin-panel/Footer.vue";
import Editor from "@/components/admin-panel/Editor.vue";

import useApiMain from '@/use/api/main';

const props = defineProps({
  caption: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: false,
  }
});

const {getPhotoUrl} = useApiMain();

const carouselList = ref([]);
const dataLoaded = ref(false);
const topMenu = ref(true);
const changeTopMenu = (val) => {
  topMenu.value = val;
}
onMounted(async () => {
  dataLoaded.value = true;
});

</script>

<template>
  <!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header />
  <TopMenu class="mt-[30px]"/>
  <Editor />
  <Footer/>
</template>