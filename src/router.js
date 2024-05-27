import { createWebHistory, createRouter } from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
// lazy-loaded
const Profile = () => import('./components/Profile.vue');
const BoardUser = () => import('./components/BoardUser.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Genshin Impact | Homepage' },
  },
  {
    path: '/login',
    component: Login,
    meta: { title: 'Genshin Impact | Login' },
  },
  {
    path: '/register',
    component: Register,
    meta: { title: 'Genshin Impact | Register' },
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: Profile,
    meta: { title: 'Genshin Impact | Profile' },
  },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: BoardUser,
    meta: { title: 'Genshin Impact | User Board' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  //trying to access a restricted page + not logged in
  //redirect to login page
  if (authRequired && !loggedIn) {
    next('login');
  } else {
    next();
  }

  document.title = to.meta?.title ?? 'Default Title';
});

export default router;
