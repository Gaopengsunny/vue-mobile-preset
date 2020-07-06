import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


/**
 * 路由如要挂载到default layout下需在父路由 meta下添加root为true 反之挂载到public layout下 如：
 * 
 * 挂载到default下
 * { 
 *   path: '/home',
 *   component: () => import('@/pages/home'),
 *   meta: { root: true }
 * }
 * 
 * 挂载到public下
 * {
 *   path: 'signin',
 *   name: 'singin',
 *   component: () => import('@/pages/singin')
 * }
 */

const files = require.context('./modules', false, /\.js$/)
const rootRouters = files.keys().map(item => files(item).default).filter(item => item?.meta?.root)
const publicRouters = files.keys().map(item => files(item).default).filter(item => !item?.meta?.root)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/default'),
    children: rootRouters
  },
  {
    path: '/',
    component: () => import('@/layouts/public'),
    children: publicRouters
  },
  {
    path: '*',
    component: () => import('@/pages/error/404'),
    meta: {
      title: '404'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
