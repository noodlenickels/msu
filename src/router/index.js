import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import PageWithBio from '@/views/PageWithBio.vue';
import Videos from '@/views/Videos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/point_of_view/:id',
      name: 'pointOfViewId',
      component: PageWithBio,
      props: {

      }
    }
  ]
})

export default router
