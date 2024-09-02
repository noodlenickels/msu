<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import Selection from "@/components/Selection.vue";
import ListViewRow from "@/components/cards/ListViewRow.vue";
import Footer from "@/components/Footer.vue";
import AddsBlock from "@/components/AddsBlock.vue";

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

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

</script>

<template>
  <Header/>
  <TopMenu/>
  <div class="flex flex-col gap-[125px] px-[10%] gap-[25px] mb-[125px]">
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="md:col-span-3 col-span-4 flex flex-col gap-[30px]">
        <div class="flex gap-x-[20px] gap-y-[20px]">
          <div class="w-auto text-[18px] font-somic text-black font-semibold">{{ props.caption }}</div>
          <div class="flex-grow border-b-[2px] border-gray"></div>
        </div>
        <div class="flex flex-col gap-[70px]">
          <ListViewRow v-for="row in props.data" :type="props.caption" :key="row.id" class="md:col-span-6 col-span-12" :data="row"/>
        </div>
      </div>
      <AddsBlock class="md:col-span-1 col-span-4"/>
    </div>
  </div>
  <Selection class="mb-[200px]"/>
  <Footer/>
</template>


