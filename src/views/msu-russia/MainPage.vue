<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/msu-russia/Header.vue';
import TopMenu from '@/components/msu-russia/TopMenu.vue';
import NewsBlock from "@/components/msu-russia/NewsBlock.vue";
import NewsWithLinks from "@/components/msu-russia/NewsWithLinks.vue";
import RegionNews from "@/components/msu-russia/RegionNews.vue";
import PointOfView from "@/components/msu-russia/PointOfView.vue";
import OfficialSites from "@/components/msu-russia/OfficialSites.vue";
import Footer from "@/components/msu-russia/Footer.vue";
import Selection from "@/components/msu-russia/Selection.vue";

import useApiNews from '@/use/api/news';
import useApiMain from '@/use/api/main';

const {getPhotoUrl} = useApiMain();
const {getGrandNews} = useApiNews();

const carouselList = ref([]);
const dataLoaded = ref(false);
const topMenu = ref(false);
const bigScreen = ref(false);
const showBurger = ref(true);

const toggleMenu = () => {
  topMenu.value = !topMenu.value;
  showBurger.value = false;
}

onMounted(async () => {
  carouselList.value = await getGrandNews();

  if (document.documentElement.clientWidth > 640) bigScreen.value = true;
  else bigScreen.value = false;

  window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth > 640) bigScreen.value = true;
    else bigScreen.value = false;
  })
  dataLoaded.value = true;
});

</script>

<template>
<!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header @active="toggleMenu" :show="showBurger" />
  <TopMenu @toggle="toggleMenu" v-if="topMenu || bigScreen" />
  <div v-if="dataLoaded" class="flex flex-col md:gap-[75px] gap-[45px]">
    <NewsBlock :carouselList='carouselList' />
    <Selection />
    <RegionNews/>
    <div class="grid grid-cols-3 px-[10%] gap-[20px]">
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