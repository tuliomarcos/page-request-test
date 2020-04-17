import VueRouter from 'vue-router'
import RequestTest from '../components/pages/RequestTest'

const router = new VueRouter({
  history: true,
  routes: [
    {
      path: '/',
      component: RequestTest,
    }
  ]
})

export default router