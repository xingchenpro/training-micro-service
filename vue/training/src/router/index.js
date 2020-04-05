import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import PersionInfo from '@/components/info/PersionInfo'
import LimitError from '@/components/error/LimitError'
import LeaveApply from '@/components/leave/LeaveApply'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: "/home/info",
          component: PersionInfo,
          meta: {requireAuth: true}
        },
        {
          path: "/home/leave",
          component: LeaveApply,
          meta: {requireAuth: true}
        },
      ]
    },
    {
      path: "/error/limit",
      component: LimitError,
      meta: {requireAuth: true}
    },
  ]
});
