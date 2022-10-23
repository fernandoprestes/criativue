import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import home from './routes/home';
import form from './routes/form';

const routes: RouteRecordRaw[] = [
  ...home,
  ...form,
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
