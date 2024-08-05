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
  <div class="w100">
    <div class="grid grid-cols-6 flex items-end mb-[30px] gap-[5px]">
      <div class="col-span-1 text-[18px] font-somic text-black font-semibold">Главные новости</div>
      <div class="col-span-5 flex-grow border-b-[2px] border-gray"></div>
    </div>
    <div class="grid grid-cols-4 gap-[25px]">
      <div class="col-span-3 flex flex-col gap-[15px]">
        <img src="@/assets/icons/pic.png" class="" />
        <div class="text-[30px] font-somic text-black font-bold">
          Избран глава союзов городов Центра и Северо-Запада Российской Федерации
        </div>
        <div class="text-[14px] font-somic text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur cumque deserunt dignissimos dolore ea eos error est eum ex excepturi exercitationem facilis fugit illo illum impedit itaque iure iusto laborum laudantium magnam modi, mollitia necessitatibus non nostrum nulla perspiciatis praesentium quaerat quis reiciendis rem repellat sapiente ullam unde ut veniam voluptatem. Aliquam architecto asperiores at blanditiis cumque dicta enim error eum, explicabo facere harum id impedit ipsam, maxime nam nostrum odio quasi quis quod recusandae repellat sint tenetur ut voluptatem voluptatum? Accusantium consequuntur distinctio dolores dolorum eligendi excepturi illo laudantium magnam minima neque, placeat quibusdam reiciendis vel. Incidunt, totam.
        </div>
      </div>
      <div class="flex flex-col gap-[20px]">
        <div class="pl-[15px] border-l-2 text-[14px] text-gray">
          Избран глава союзов городов Центра и Северо-Запада Российской Федерации
        </div>
        <div class="pl-[15px] border-l-2 text-[14px] text-gray">
          Дмитрий Азаров: "Создать условия для развития ТОС как основы местного самоуправления"
        </div>
        <div class="pl-[15px] border-l-2 text-[14px] text-gray">
          Севастополь посетил сенатор Дмитрий Азаров
        </div>
        <div class="pl-[15px] border-l-2 text-[14px] text-gray">
          Перспективы развития местного самоуправления обсудили в крымском параметре
        </div>
        <div class="pl-[15px] border-l-2 text-[14px] text-gray">
          Дмитрий Азаров: "Создать условия для развития ТОС как основы местного самоуправления"
        </div>
        <div class="pl-[15px] border-l-2 text-[14px] text-gray">
          Перспективы развития местного самоуправления обсудили в крымском параметре
        </div>
      </div>
    </div>
  </div>
</template>
