<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/Header.vue';
import TopMenu from '@/components/TopMenu.vue';
import Selection from "@/components/Selection.vue";
import ListViewRow from "@/components/ListViewRow.vue";
import Footer from "@/components/Footer.vue";
import AddsBlock from "@/components/AddsBlock.vue";

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

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

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
  <TopMenu/>
  <div class="flex flex-col gap-[125px] px-[10%] gap-[25px] mb-[125px]">
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="col-span-3 flex flex-col gap-[30px]">
        <div class="flex gap-x-[20px] gap-y-[20px]">
          <div class="w-auto text-[18px] font-somic text-black font-semibold">Интервью</div>
          <div class="flex-grow border-b-[2px] border-gray"></div>
        </div>
        <div class="flex flex-col gap-[20px]">
          <ListViewRow class="col-span-12"/>
          <ListViewRow class="col-span-12"/>
          <ListViewRow class="col-span-12"/>
          <ListViewRow class="col-span-12"/>
          <ListViewRow class="col-span-12"/>
          <ListViewRow class="col-span-12"/>
        </div>
      </div>
      <AddsBlock class="col-span-1"/>
    </div>
  </div>
  <Selection class="mb-[200px]"/>
  <Footer/>
</template>


