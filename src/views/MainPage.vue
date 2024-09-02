<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import NewsBlock from "@/components/NewsBlock.vue";
import NewsWithLinks from "@/components/NewsWithLinks.vue";
import RegionNews from "@/components/RegionNews.vue";
import PointOfView from "@/components/PointOfView.vue";
import OfficialSites from "@/components/OfficialSites.vue";
import Footer from "@/components/Footer.vue";
import Selection from "@/components/Selection.vue";

import useApiNews from '@/use/api/news';
import useApiMain from '@/use/api/main';

const {getPhotoUrl} = useApiMain();
const {getGrandNews} = useApiNews();

const carouselList = ref([]);
const dataLoaded = ref(false);
const topMenu = ref(true);
const changeTopMenu = (val) => {
  topMenu.value = val;
}
onMounted(async () => {
  carouselList.value = await getGrandNews();
  dataLoaded.value = true;
});

</script>

<template>
<!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header @active="changeTopMenu"/>
  <TopMenu  />
  <div v-if="dataLoaded" class="flex flex-col gap-[75px]">
    <NewsBlock :carouselList='carouselList' />
    <Selection />
    <RegionNews/>
    <PointOfView/>
    <div class="grid grid-cols-3 px-[10%] md:gap-[20px] gap-[50px]">
      <NewsWithLinks
          class="md:col-span-1 col-span-3"
          :title="'Комитет Совета Федерации по федеративному устройству,  региональной политике, местному самоуправлению и делам Севера'"
          :name="'Шевченко А.А.'"
          :text="'Право представительного органа муниципалитета на участие в формировании местной администрации будет способствовать более эффективному взаимодействию на благо народа.'"
          :img="'/images/shevchenko.jpg'"
          :link="'http://region.council.gov.ru'"
      />
      <NewsWithLinks
          class="md:col-span-1 col-span-3"
          :title="'Комитет Государственной Думы по региональной политике и местному самоуправлению'"
          :name="'Диденко А.Н.'"
          :text="'В законе об общих принципах организации местного самоуправления заложен потенциал развития гражданского общества на местах.'"
          :img="'/images/didenko.jpg'"
          :link="'http://komitet4.km.duma.gov.ru'"
      />

      <NewsWithLinks
          class="md:col-span-1 col-span-3"
          :title="'Всероссийская ассоциация развития местного самоуправления'"
          :name="'Гусева И.М.'"
          :text="'Проект «Муниципальный диалог» дал возможность каждому главе от маленького аула до города-миллионника сгенерировать идею, обозначить проблематику, поставить задачу перед федеральным центром.'"
          :img="'/images/guseva.jpg'"
          :link="'https://www.varmsu.ru'"
      />
    </div>
    <OfficialSites/>
    <Footer/>
  </div>
</template>

<!--<script>-->
<!--setTimeout(()=>{-->
<!--  const menu = document.getElementsByClassName('topMenuClass')[0];-->

<!--  if (window.innerWidth > 640) {-->
<!--    menu.classList.remove('hidden');-->
<!--  }-->

<!--  window.onresize = function() {-->
<!--    if (window.innerWidth > 640) {-->
<!--      menu.classList.remove('hidden');-->
<!--    }-->
<!--  }-->
<!--}, 1000);-->

<!--</script>-->