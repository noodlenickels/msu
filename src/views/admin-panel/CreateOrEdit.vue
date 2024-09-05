<script setup>
import {computed, ref, onMounted} from 'vue';
import Header from '@/components/admin-panel/Header.vue';
import TopMenu from '@/components/admin-panel/TopMenu.vue';
import Footer from "@/components/admin-panel/Footer.vue";
import Editor from "@/components/admin-panel/Editor.vue";
import {useRoute} from 'vue-router';

import useApiMain from '@/use/api/main';
import useApiOpinion from '@/use/api/opinion';
import useApiPeople from '@/use/api/person';
import useApiInterview from '@/use/api/interview';
import useApiNews from '@/use/api/news';
import useApiPoint from '@/use/api/point';

const { getOpinions, getOpinionById } = useApiOpinion();
const { getInterviews, getInterviewById } = useApiInterview();
const { getPeople, getPeopleById } = useApiPeople();
const { getNews, getNewsById } = useApiNews();
const { getPointOfView, getPointOfViewById } = useApiPoint();

const route = useRoute();

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: ''
  },
  caption: {
    type: String,
    required: false,
  },
  data: {
    type: Object,
    required: false,
  }
});

const {getPhotoUrl} = useApiMain();

const carouselList = ref([]);
const dataLoaded = ref(false);
const topMenu = ref(true);
const changeTopMenu = (val) => {
  topMenu.value = val;
}

const stateData = ref({});

onMounted(async () => {
  console.log(props.type)
  switch (props.type) {
    case ('news'): {
      stateData.value = await getNewsById(route.params.id);
      console.log(stateData.value)
      break;
    }
    case ('opinion'): {
      stateData.value = await getOpinionById(route.params.id);
      break;
    }
    case ('interview'): {
      stateData.value = await getInterviewById(route.params.id);
      break;
    }
    case ('point_of_view'): {
      stateData.value = await getNewsById(route.params.id);
      break;
    }
    default: {

    }
  }
  if (stateData.value.id) {

  }
  else {
    stateData.value = {
      id: null,
      image: null,
      title: null,
      text: null,
      link: null,
      source: null,
      subject: null,
      created: null,
      updated: null,
    }
  }
  dataLoaded.value = true;
});

</script>

<template>
  <!--  :class="`${topMenu.value ? '' : 'hidden'} topMenuClass`"-->
  <Header />
  <TopMenu class="mt-[30px]" />
  <Editor :data="stateData" />
  <Footer/>
</template>