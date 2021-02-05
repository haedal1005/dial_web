import Vue from 'vue'
import Router from 'vue-router'
import Read from '../components/Content/Board/Read.vue'
import Create from '../components/Content/Board/Create.vue'
import Detail from '../components/Content/Board/Detail.vue'
import mainContent from '../components/Content/View/MainContent.vue'
import SignIn from '../components/Content/View/SignIn.vue'
import SignUp from '../components/Content/View/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: 'main',
      component:mainContent
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
      path: '/read/detail/:contentId?',
      name: 'Detail',
      component: Detail
    }
  ]
})
