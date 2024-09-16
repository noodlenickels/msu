import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/msu-russia/MainPage.vue';
import AdminPanel from '@/views/admin-panel/MainPage.vue';
import PageWithBio from '@/views/msu-russia/PageWithBio.vue';
import PageWithoutBio from '@/views/msu-russia/PageWithoutBio.vue';
import Videos from '@/views/msu-russia/Videos.vue';
import ListView from '@/views/msu-russia/ListView.vue';
import CreateOrEdit from '@/views/admin-panel/CreateOrEdit.vue';

import useApiOpinion from '@/use/api/opinion';
import useApiPeople from '@/use/api/person';
import useApiInterview from '@/use/api/interview';
import useApiNews from '@/use/api/news';
import useApiPoint from '@/use/api/point';
import EnterEditor from '@/views/admin-panel/EnterEditor.vue';
import EditNews from '@/views/admin-panel/EditNews';
import Interview from '@/views/admin-panel/Opinion.vue';
import Opinion from '@/views/admin-panel/Opinion.vue';
import NewsChange from '@/views/admin-panel/NewsChange.vue';
import NewsCreate from '@/views/admin-panel/NewsCreate.vue';
import OpinionCreate from '@/views/admin-panel/OpinionCreate.vue';
import OpinionChange from '@/views/admin-panel/OpinionChange.vue';
import InterviewCreate from '@/views/admin-panel/InterviewCreate.vue';
import InterviewChange from '@/views/admin-panel/InterviewChange.vue';

const { getOpinions } = useApiOpinion();
const { getInterviews } = useApiInterview();
const { getPeople } = useApiPeople();
const { getNews } = useApiNews();
const { getPointOfView } = useApiPoint();


const interviewsData = await getInterviews();
const opinionData = await getOpinions();
const peopleData = await getPeople();
const newsData = await getNews();
const pointData = await getPointOfView();

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
      path: '/admin_panel/news',
      name: 'admin_news',
      component: AdminPanel,
      props: {
        data: newsData?.data,
        caption: 'Новости',
        type: 'news'
      }
    },
    {
      path: '/admin_panel/opinion',
      name: 'admin_opinion',
      component: AdminPanel,
      props: {
        data: opinionData,
        caption: 'Мнения',
        type: 'opinion'
      }
    },
    {
      path: '/admin_panel/interview',
      name: 'admin_interview',
      component: AdminPanel,
      props: {
        data: interviewsData,
        caption: 'Интервью',
        type: 'interview'
      }
    },
    {
      path: '/admin_panel/point_of_view',
      name: 'admin_point_of_view',
      component: AdminPanel,
      props: {
        data: pointData,
        caption: 'Точки зрения',
        type: 'point_of_view'
      }
    },
    {
      path: '/admin_panel/point_of_view/create',
      name: 'admin_point_of_view_create',
      component: CreateOrEdit,
      props: {
        data: null,
        mode: 'add'
      }
    },
    {
      path: '/admin_panel/interview/create',
      name: 'admin_interview_create',
      component: CreateOrEdit,
      props: {
        data: null,
        mode: 'add'
      }
    },
    {
      path: '/admin_panel/opinion/create',
      name: 'admin_opinion_create',
      component: CreateOrEdit,
      props: {
        data: null,
        mode: 'add'
      }
    },
    {
      path: '/admin_panel/news/create',
      name: 'admin_news_create',
      component: CreateOrEdit,
      props: {
        data: null,
        mode: 'add'
      }
    },
    {
      path: '/admin_panel/point_of_view/edit/:id',
      name: 'admin_point_of_view_edit',
      component: CreateOrEdit,
      props: {
        type: 'point_of_view',
        data: null,
        mode: 'edit'
      }
    },
    {
      path: '/admin_panel/interview/edit/:id',
      name: 'admin_interview_edit',
      component: CreateOrEdit,
      props: {
        type: 'interview',
        data: null,
        mode: 'edit'
      }
    },
    {
      path: '/admin_panel/opinion/edit/:id',
      name: 'admin_opinion_edit',
      component: CreateOrEdit,
      props: {
        type: 'opinion',
        data: null,
        mode: 'edit'
      }
    },
    {
      path: '/admin_panel/news/edit/:id',
      name: 'admin_news_edit',
      component: CreateOrEdit,
      props: {
        type: 'news',
        data: null,
        mode: 'edit'
      }
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
    },
    {
      path: '/admin_panel/editor',
      name: 'Editor',
      component: EnterEditor
    },
    {
      path: '/admin_panel/editor/news',
      name: 'EditorNews',
      component: EditNews
    },
    {
      path: '/admin_panel/editor/news',
      name: 'EditorNews',
      component: EditNews
    },
  
    {
      path: '/admin_panel/editor/interview',
      name: 'Interview',
      component: Interview
    },
    {
      path: '/admin_panel/editor/opinion',
      name: 'Opinion',
      component: Opinion
    },
    {
      path: '/admin_panel/editor/news/edit',
      name: 'Newschange',
      component: NewsChange
    },
    {
      path: '/admin_panel/editor/news/create',
      name: 'NewsCreate',
      component: NewsCreate
    },
    {
      path: '/admin_panel/editor/opinion/edit',
      name: 'OpinionChange',
      component: OpinionChange
    },
    {
      path: '/admin_panel/editor/opinion/create',
      name: 'OpinionCreate',
      component: OpinionCreate
    },
    {
      path: '/admin_panel/editor/interview/create',
      name: 'InterviewCreate',
      component: InterviewCreate
    },

    {
      path: '/admin_panel/editor/interview/edit',
      name: 'InterviewChange',
      component: InterviewChange
    }


    



  ]
})

export default router
