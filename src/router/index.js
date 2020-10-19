import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'
import defaultPage from "../components/layout/default"
import index from '../components/page/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: "defaultPage",
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index,
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: () => import('../components/changeCity/changeCity')
        },
        {
          path: '/s/:name',
          name: 'detail',
          component: () => import('../components/productList/productIndex.vue')
        }
      ]
    },
    {
      path: '/regist',
      name: 'regist',
      component: () => import('../components/page/regist')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../components/page/login")
    }
  ],
})
