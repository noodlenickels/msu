<script setup>
import {computed, ref, onMounted} from 'vue';
import {RouterLink} from "vue-router";

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['active']);

const form = ref(null);

const inputLabelWidth = computed(() => 150);

const cardTitle = computed(() => props.mode === 'add' ? 'Добавление заказа' : 'Редактирование заказа');

const fd = ref({});

const dataLoaded = ref(false);

const isInvalid = ref(true);

const menuActive = ref(false);

const changeActivity = () => {
  emits('active');

}
onMounted(() => {
  dataLoaded.value = true;
});

</script>

<template>
  <div class="w100 sm:mb-0 mb-[20px]">
    <div class="grid md:grid-cols-12 grid-cols-8 bg-primary h-[130px] md:gap-[5px] gap-[10px] items-center justify-between px-[10%]">
      <div class="l:col-span-1 col-span-2">
        <RouterLink to="/">
        <img src="../../assets/icons/logo.png" alt="Логотип" class="l:h-[85px] h-[70px] "/>
        </RouterLink>
      </div>
      <div class="flex flex-col text-white font-somic md:col-span-7 sm:col-span-5 col-span-5">
        <RouterLink to="/">
        <div class="md:text-[16px] l:text-[24px] text-[13px]">всероссийское информационное агенство</div>
        <div class="md:text-[22px] l:text-[33.2px] text-[18px] font-bold">МЕСТНОЕ САМОУПРАВЛЕНИЕ</div>
        </RouterLink>
      </div>
      <div class="justify-end l:flex l:col-span-2 md:col-span-3 hidden">
<!--        <input class="flex-grow max-w-[450px] min-w-[200px] rounded-[15px] px-[20px] py-[5px]" type="text" name="search" id="search" placeholder="Найти на сайте" value="">-->
      </div>
      <div class="sm:hidden flex col-span-1">
<!--        <img src="/images/menu.png" alt="Меню" class="white h-[25px]"/>-->
        <div @click="changeActivity" class="content second">
          <div class="burger">
            <span></span>
          </div>
        </div>
      </div>
      <div class="sm:flex hidden gap-5 ml-auto md:col-span-2 hidden">
        <img src="../../assets/icons/telegram.svg" alt="Соцсеть" class="white l:h-[35px] md:h-[25px] h-[20px]"/>
        <img src="../../assets/icons/vk.svg" alt="Соцсеть" class="white l:h-[35px] md:h-[25px] h-[20px]"/>
<!--        <img src="@/assets/icons/youtube.svg" alt="Соцсеть" class="white l:h-[35px] md:h-[25px] h-[20px]"/>-->
      </div>
    </div>
  </div>
</template>

<style>
.burger {
  width: 32px;
  //height: 24px;
  cursor: pointer;
  right: 2rem;
  top: 2rem;
  z-index: 20;
}

.burger span {
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 12px;
  display: block;
  transition: background-color 0.5s ease-in-out;
}

.burger span::before,
.burger span::after {
  content: "";
  width: 100%;
  background-color: white;
  display: block;
  transition: all 0.5s ease-in-out;
  border-radius: 12px;
  height: 4px;
}

.burger span::before {
  transform: translateY(-10px);

}

.burger span::after {
  transform: translateY(10px);
  margin-top: -4px;
}


.burger.active span {
  background-color: transparent;
}

.burger.active span::before {
  transform: rotateZ(45deg) translateY(0);
}

.burger.active span::after {
  transform: rotateZ(-45deg) translateY(0);
}
</style>

<script>
function burger() {
  const burger = document.querySelector('.burger');

  if (burger) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
    });
  }
}
setTimeout(() => {
  burger();
}, 1000);

window.onresize = function() {
  burger();
};
</script>