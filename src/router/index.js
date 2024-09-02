import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import PageWithBio from '@/views/PageWithBio.vue';
import PageWithoutBio from '@/views/PageWithoutBio.vue';
import Videos from '@/views/Videos.vue';
import ListView from '@/views/ListView.vue';

import useApiOpinion from '@/use/api/opinion';
import useApiPeople from '@/use/api/person';
import useApiInterview from '@/use/api/interview';

const { getOpinions } = useApiOpinion();
const { getInterviews } = useApiInterview();
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
        type: 'point_of_view'
      }
    },
    {
      path: '/news/:id',
      name: 'newsId',
      component: PageWithoutBio,
      props: {
        type: 'news'
      }
    },
    {
      path: '/video/:id',
      name: 'videoId',
      component: PageWithoutBio,
      props: {
        type: 'video'
      }
    },
    {
      path: '/interview/:id',
      name: 'interviewId',
      component: PageWithBio,
      props: {
        type: 'interview'
      }
    },
    {
      path: '/opinion/:id',
      name: 'opinionId',
      component: PageWithBio,
      props: {
        type: 'opinion'
      }
    },
    {
      path: '/person/:id',
      name: 'personId',
      component: PageWithoutBio,
      props: {
        type: 'person'
      }
    },
    {
      path: '/region/:id',
      name: 'regionId',
      component: PageWithoutBio,
      props: {
        type: 'region'
      }
    }
  ]
})

export default router
