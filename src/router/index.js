import { createRouter, createWebHistory } from 'vue-router';
import DynamicForm from '../views/DynamicForm.vue'; // Подставьте правильный путь к компоненту DynamicForm
import SavedValues from '../views/SavedValues.vue'; // Подставьте правильный путь к компоненту SavedValues

const routes = [
  {
    path: '/',
    name: 'DynamicForm',
    component: DynamicForm,
  },
  {
    path: '/saved-values',
    name: 'SavedValues',
    component: SavedValues,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
