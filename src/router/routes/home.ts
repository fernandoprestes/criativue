import LayoutDashboardVue from '@/layouts/LayoutDashboard/Index.vue';

export default [
  {
    path: '/',
    name: 'home-views',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      layout: LayoutDashboardVue,
    },
  },
];
