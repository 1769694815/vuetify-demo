/*
 * @Author: xwen
 * @Date: 2020-04-28 13:12:50
 * @LastEditTime: 2020-05-07 20:32:36
 * @LastEditors: xwen
 * @Description: 路由
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index'
import home from '@/components/home/Index'
import custom from '@/components/custom/Index'
import styles from '@/components/styles/Index'
import ui from '@/components/UI/Index'
import directives from '@/components/directives/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          name: 'home',
          path: '/',
          component: home,
          meta: { index: 1 }
        },
        {
          name: 'custom',
          path: '/custom',
          component: custom,
          meta: { index: 1 }
        },
        {
          name: 'styles',
          path: '/styles',
          component: styles,
          meta: { index: 1 }
        },
        {
          name: 'UI',
          path: '/ui',
          component: ui,
          meta: { index: 1 }
        },
        {
          name: 'directives',
          path: '/directives',
          component: directives,
          meta: { index: 1 }
        }
      ]
    }
  ]
})

