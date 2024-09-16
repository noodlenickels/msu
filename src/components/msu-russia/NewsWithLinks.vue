<script setup>
import {computed, ref, onMounted} from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  source: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: false
  },
  img: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
});

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const dataLoaded = ref(false);

onMounted(() => {
  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

const imgLink = computed(() => {
  return '@/assets/images/' + props.img;
});

const closeForm = () => {
  emits('close');
};

</script>

<template>
    <div class="flex flex-col md:gap-[20px] gap-[10px]">
      <div class="flex items-center titleFix text-[16.5px] md:text-[14px] l:text-[16.5px] font-bold text-center h-auto font-somic bg-primary px-[15px] py-[10px]  text-white rounded-xl">
        {{ props.title }}
      </div>
      <div class="flex flex-col md: gap-[10px]">
        <img :src="props.img" alt="photo" class = "h-[60%] "/>
        <div class="text-[17.35px] text-gray-500 font-somic">
          {{ props.name }}
        </div>
        <div class="text-[14px] md:text-[12px] l:text-[14px] font-somic md:h-[110px] h-full">
          "{{ props.text }}"
        </div>
      </div>
      <a :href="props.link">
        <div class="bg-gray-200 rounded-[15px] flex gap-[20px] py-[10px] items-center justify-center">
          <div class="font-somic text-[15px]">
            Перейти на сайт
          </div>
          <img alt="arrow" src="../../assets/icons/arrow.png" class="h-[14px]"/>
        </div>
      </a>
    </div>
</template>

<script>
setTimeout(()=>{
  fix();
}, 1000)
function fix() {
  const maxTitle = document.getElementsByClassName('titleFix')[0]?.offsetHeight;
  console.log(maxTitle)
  document.getElementsByClassName('titleFix')[1]?.style.setProperty('height', `${maxTitle}px`)
  document.getElementsByClassName('titleFix')[2]?.style.setProperty('height', `${maxTitle}px`)
}

window.onresize = function(){
  fix();
};
</script>