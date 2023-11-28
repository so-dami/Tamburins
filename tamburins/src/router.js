import { createWebHistory, createRouter } from 'vue-router';

// component

const routes = [
  {
    path: '',
    component: '',
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
