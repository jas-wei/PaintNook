// router/index.js

import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const routes = [
  {
    path: '/',
    // redirect: '/login' // Redirect root path to the login page
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: () => import('@/components/LoginForm.vue') // Lazy-loaded component for the login page
  },
  {
    path: '/paintnook',
    name: 'PaintNook',
    component: () => import('@/components/PaintNook.vue'), // Lazy-loaded component for the main application page
    meta: {
      requiresAuth: true // Add meta field to indicate that this route requires authentication
    }
  },
  {
    path: '/quiz',
    name: 'PageError',
    component: () => import('@/components/PageError.vue'), // Lazy-loaded component for the login page
    meta: {
      requiresAuth: false // Add meta field to indicate that this route requires authentication
    }
  },
  {
    path: '/chat',
    name: 'PageChat',
    component: () => import('@/components/PageChat.vue') // Lazy-loaded component for the login page
  },
  {
    path: '/account',
    name: 'PageAccount',
    component: () => import('@/components/PageAccount.vue') // Lazy-loaded component for the login page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Route guard to check if the user is authenticated before accessing protected routes
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['isAuthenticated'];
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to the login page if the route requires authentication and the user is not authenticated
    next('/login');
  } else {
    // Proceed to the next route
    next();
  }
});

export default router;
