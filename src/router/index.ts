import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/home/index.vue'),
          meta: {
            title: '首页',
          },
        },
        {
          path: '/analysis',
          component: () => import('@/views/analysis/index.vue'),
          meta: {
            title: '资料分析',
          },
        },
        {
          path: '/practice',
          component: () => import('@/views/practice/index.vue'),
          meta: {
            title: '开始练习',
          },
        },
        {
          path: '/page1',
          component: () => import('@/views/page1/index.vue'),
          meta: {
            title: '页面1',
          },
        },
        {
          path: '/page2',
          component: () => import('@/views/page2/index.vue'),
          meta: {
            title: '页面2',
          },
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
  NProgress.done();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
