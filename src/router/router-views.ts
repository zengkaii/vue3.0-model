import { RouteRecordRaw } from 'vue-router'
const routerChildren = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/table-one',
    name: 'table-one',
    component: () => import('@/views/table-one/index.vue')
  },
  {
    path: '/menu-page',
    name: 'menu-page',
    component: () => import('@/views/menu-page/index.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('@/views/form/index.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('@/views/dialog/index.vue')
  },
  {
    path: '/echarts',
    name: 'echarts',
    component: () => import('@/views/echarts/index.vue')
  },
  {
    path: '/gd-map',
    name: 'gd-map',
    component: () => import('@/views/gd-map/index.vue')
  },
  {
    path: '/markdown',
    name: 'markdown',
    component: () => import('@/views/markdown/index.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () => import('@/views/drawer/index.vue')
  },
  {
    path: '/draw-lottery',
    name: 'draw-lottery',
    component: () => import('@/views/draw-lottery/index.vue')
  }
] as RouteRecordRaw[]

export default routerChildren
