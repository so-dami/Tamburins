import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/경로',
    component: '',
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
