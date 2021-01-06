import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/board/Read'
import Create from '@/components/board/Create'
import Detail from '@/components/board/Detail'
import mainContent from '../components/mainview/mainContent.vue'
import SignIn from '../components/mainview/SignIn.vue';
import SignUp from '../components/mainview/SignUp.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: 'main',
      component: mainContent
    },
    {
      path: "/SignIn",
      name: 'SignIn',
      component: SignIn
    },
    {
      path: "/SignUp",
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/read',
      name: 'Read',
      component: Read
    },
    {
      path: '/read/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path: '/read/detail/:contentId',
      name: 'Detail',
      component: Detail
    }
  ]
})
