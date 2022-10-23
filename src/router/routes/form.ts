import LayoutDashboardVue from '@/layouts/LayoutDashboard/Index.vue';

export default [
  {
    path: '/form',
    name: 'form-views',
    component: () => import('@/views/FormView.vue'),
    meta: {
      layout: LayoutDashboardVue,
    },
  },
];
