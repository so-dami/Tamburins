import { createWebHistory, createRouter } from 'vue-router';

// component
import Sub from './components/sub/Sub.vue';

const routes = [
  {
    path: '/:category1',
    component: Sub,
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
