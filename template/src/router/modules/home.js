export default {
  path: '/home',
  name: 'home',
  component: () => import('@/pages/home'),
  meta: {
    root: true,
    title: '首页'
  }
}
