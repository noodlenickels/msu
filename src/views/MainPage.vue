<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import NewsBlock from "@/components/NewsBlock.vue";
import NewsWithLinks from "@/components/NewsWithLinks.vue";
import RandomCard from "@/components/cards/RandomCard.vue";
import RegionNews from "@/components/RegionNews.vue";
import PointOfView from "@/components/PointOfView.vue";
import OfficialSites from "@/components/OfficialSites.vue";
import Footer from "@/components/Footer.vue";
import Selection from "@/components/Selection.vue";

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

onMounted(() => {
  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
  <Header/>
  <TopMenu class="hidden sm:block"/>
  <div class="flex flex-col gap-[75px]">
    <NewsBlock/>
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