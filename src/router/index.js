import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import PageWithBio from '@/views/PageWithBio.vue';
import Videos from '@/views/Videos.vue';
import ListView from '@/views/ListView.vue';

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
      path: '/interview',
      name: 'interview',
      component: ListView
    },
    {
      path: '/opinion',
      name: 'opinion',
      component: ListView
    },
    {
      path: '/person',
      name: 'person',
      component: ListView
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
