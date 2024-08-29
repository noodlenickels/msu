import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import PageWithBio from '@/views/PageWithBio.vue';
import Videos from '@/views/Videos.vue';
import ListView from '@/views/ListView.vue';

import useApiMain from '@/use/api/main';
import useApiPeople from '@/use/api/person';

const { getInterviews, getOpinions } = useApiMain();
const { getPeople } = useApiPeople();


const interviewsData = await getInterviews();
const opinionData = await getOpinions();
const peopleData = await getPeople();

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/video',
      name: 'video',
      component: Videos
    },
    {
      path: '/knowledge_base',
      name: 'base',
      component: ListView
    },
    {
      path: '/interview',
      name: 'interview',
      component: ListView,
      props: {
        data: interviewsData,
        caption: 'Интервью'
      }
    },
    {
      path: '/opinion',
      name: 'opinion',
      component: ListView,
      props: {
        data: opinionData,
        caption: 'Мнения'
      }
    },
    {
      path: '/person',
      name: 'person',
      component: ListView,
      props: {
        data: peopleData,
        caption: 'Персона'
      }
    },
    {
      path: '/point_of_view/:id',
      name: 'pointOfViewId',
      component: PageWithBio,
      props: {

      }
    }
  ]
})

export default router
