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
    <div class="grid grid-cols-12 flex gap-[25px]">
      <img class="col-span-4" src="@/assets/icons/pic.png" />
      <div class="col-span-8 flex flex-col gap-[10px]">
        <div class="text-[20px] font-somic text-black font-bold">
          Стелла Штань: “Политикам-мужчинам прощается многое”
        </div>
        <div class="h-[200px] text-[14px] font-somic text-gray-400 leading-[30px]">
          Политика была исключительно мужским занятием на протяжении долгих веков. И даже сейчас, когда женщина в этой сфере – явление отнюдь не новое, в основе образа хорошего политика все же лежит принадлежность к мужскому полу.
          Накануне Всемирного дня мужчин, отмечаемого в этом году 2 ноября, мы решили выяснить, чем же отличаются в работе политики-мужчины с точки зрения политиков-женщин. Об этом мы спросили Председатель Алтайского регионального отделения ВСМС, депутата Алтайского краевого законодательного собрания, зампредседателя комитета по местному самоуправлению Стеллу Штань.
        </div>
      </div>
    </div>
  </div>
</template>
