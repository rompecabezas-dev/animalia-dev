import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/Info.vue'
import Quiz from '../views/Quiz.vue'
import Test from '../views/Test.vue'
import Which from '../views/Which.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/quiz-teste-seus-conhecimentos',
    name: 'Teste seus conhecimentos',
    component: Test
  },
  {
    path: '/quiz-que-animal-seria-voce',
    name: 'Qual animal você seria',
    component: Which
  },
  {
    path: '/:animal',
    name: 'Animal',
    component: Info
  },
  {
    path: '*',
    name: 'reset',
    redirect: { name: 'Home' }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
