import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import LayoutDashboardVue from '~/layouts/LayoutDashboard/Index.vue';

import HomeView from '~/views/HomeView.vue';

const LayoutDashboard = { layout: LayoutDashboardVue };

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: LayoutDashboard,
  },

  {
    path: '/',
    redirect: { name: 'HomeView' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
