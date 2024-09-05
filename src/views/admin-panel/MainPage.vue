<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/admin-panel/Header.vue';
import TopMenu from '@/components/admin-panel/TopMenu.vue';
import List from '@/components/admin-panel/List.vue';
import ActionPanel from '@/components/admin-panel/ActionPanel.vue';
import Checkboxes from '@/components/admin-panel/Checkboxes.vue';
import NewsBlock from "@/components/msu-russia/NewsBlock.vue";
import NewsWithLinks from "@/components/msu-russia/NewsWithLinks.vue";
import RegionNews from "@/components/msu-russia/RegionNews.vue";
import PointOfView from "@/components/msu-russia/PointOfView.vue";
import OfficialSites from "@/components/msu-russia/OfficialSites.vue";
import Footer from "@/components/admin-panel/Footer.vue";
import Selection from "@/components/msu-russia/Selection.vue";

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
const topMenu = ref('news');
const changeTopMenu = (val) => {
  topMenu.value = val;
}
onMounted(async () => {
  dataLoaded.value = true;
});

</script>

<template>
  <Header />
  <TopMenu @change="changeTopMenu"class="mt-[30px]"/>
  <ActionPanel :type="topMenu" class="mb-[20px]"/>
  <List :data="props.data" class="mb-[40px]">
    <Checkboxes class="mb-[20px]"/>
  </List>
  <Footer/>
</template>