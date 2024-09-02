<script setup>
import {computed, ref, onMounted} from 'vue';

// const props = defineProps({
//   modelValue: {
//     type: Object,
//     required: false,
//   },
//   ...modeProps,
// });

const emits = defineEmits(['submitted', 'closeForm', 'update:model-value']);

const form = ref(null);

const fd = ref({});

const dataLoaded = ref(false);

onMounted(() => {
  // const model = props.modelValue;
  // fd.value.contract = model.contract;
  // fd.value.contractor = model.contractor;
  // fd.value.anticontractor = model.anticontractor;
  dataLoaded.value = true;
});

</script>

<template>
  <div class="w100">
    <div class="sm:grid sm:grid-cols-12 bg-primary items-start px-[10%] gap-[50px] py-10">
      <div class="md:col-span-7 col-span-12 flex flex-col text-white text-somic text-[14px] gap-[10px]">
        <div class="text-[18px] font-semibold">Контактные данные для Роскомнадзора и государственных органов</div>
        <div>Сетевое издание «Информационное агентство "Местное самоуправление».</div>
        <div>Зарегистрировано Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор).</div>
        <div>Свидетельство о регистрации СМИ ЭЛ № ФС 77-85493 от 27.06.2023 г.</div>
        <div><b>Учредитель:</b> Индивидуальный предприниматель МЕЩЕРЯКОВ ИГОРЬ ВЯЧЕСЛАВОВИЧ (ОГРНИП 323645700044356)</div>
        <div><b>Главный редактор:</b> Мещеряков Игорь Вячеславович</div>
        <div><b>Адрес редакции:</b> 410007, г. Саратов, ул. им. Чехова, 2, +7 (903) 020-73-93</div>
        </div>
      <div class="md:col-span-5 col-span-12 flex flex-col space-between text-white text-somic text-[14px] gap-[20px]">
        <a href="mailto:info59@mail.ru">Электронный адрес редакции: info59@mail.ru</a>
        <a href="mailto:info59@mail.ru">Контактные данные для Роскомнадзора и государственных органов: info59@mail.ru</a>
        <div>Публикации с пометкой «На правах рекламы», «Партнёрский проект», «Новости компаний» оплачены рекламодателем. Редакция сайта не несет ответственности за достоверность информации, содержащейся в рекламных материалах.</div>
      </div>
    </div>
  </div>
</template>
