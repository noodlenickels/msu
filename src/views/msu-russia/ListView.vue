<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/msu-russia/Header.vue';
import TopMenu from '@/components/msu-russia/TopMenu.vue';
import Selection from "@/components/msu-russia/Selection.vue";
import ListViewRow from "@/components/msu-russia/cards/ListViewRow.vue";
import Footer from "@/components/msu-russia/Footer.vue";
import AddsBlock from "@/components/msu-russia/AddsBlock.vue";

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

const topMenu = ref(false);
const bigScreen = ref(true);
const showBurger = ref(true);

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const toggleMenu = () => {
  topMenu.value = !topMenu.value;
  showBurger.value = false;
}

onMounted(()=>{
  if (document.documentElement.clientWidth > 640) bigScreen.value = true;
  else bigScreen.value = false;

  window.addEventListener('resize', function(){
    if (document.documentElement.clientWidth > 640) bigScreen.value = true;
    else bigScreen.value = false;
  })
});
</script>

<template>
<!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header @active="toggleMenu" :show="showBurger"/>
  <TopMenu @toggle="toggleMenu" v-if="topMenu || bigScreen" />
  <div class="flex flex-col px-[10%] gap-[25px] mb-[55px]">
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="md:col-span-3 col-span-4 flex flex-col gap-[15px] md:mb-0 mb-[20px]">
        <div class="flex items-end mb-[5%] gap-[15px]">
          <div class="md:w-auto w-full text-center md:text-[18px] m-auto mt-2 text-[18px]  font-somic bg-primary px-[15px] py-[10px] text-white rounded-xl font-semibold">{{ props.caption }}</div>
          <div class="md:flex-grow border-b-[2px] border-primary"></div>
        </div>
        <div class="flex flex-col md:gap-[40px] gap-[50px]">
          <ListViewRow v-for="row in props.data" :type="props.caption" :key="row.id" class="md:col-span-6 col-span-12" :data="row"/>
        </div>
      </div>
      <AddsBlock class="md:col-span-1 col-span-4"/>
    </div>
  </div>
  <Selection class="mb-[50px]"/>
  <Footer/>
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


