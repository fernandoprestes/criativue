import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import home from './routes/home';

const routes: RouteRecordRaw[] = [
  ...home,
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
