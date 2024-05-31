import { createWebHistory, createRouter } from 'vue-router';
import Home from './view/Home.vue';
import Login from './view/Login.vue';
import Register from './view/Register.vue';
import Characters from './view/Characters';
import CharacterDetails from './view/CharacterDetails.vue';
import Search from './view/Search.vue';
// lazy-loaded
const Profile = () => import('./view/Profile.vue');
const BoardUser = () => import('./components/BoardUser.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Genshin Impact | Homepage', public: true },
  },
  {
    path: '/characters',
    name: 'characters',
    component: Characters,
    meta: { title: 'Genshin Impact | Characters', public: true },
  },
  {
    path: '/characters/:id',
    component: CharacterDetails,
    meta: { public: true },
  },
  {
    path: '/login',
    component: Login,
    meta: { title: 'Genshin Impact | Login', public: true },
  },
  {
    path: '/register',
    component: Register,
    meta: { title: 'Genshin Impact | Register', public: true },
  },
  {
    path: '/search',
    component: Search,
    meta: { title: 'Genshin Impact | Search', public: true },
  },
  {
    path: '/profile',
    name: 'profile',
    // lazy-loaded
    component: Profile,
    meta: { title: 'Genshin Impact | Profile', public: false },
  },
  {
    path: '/user',
    name: 'user',
    // lazy-loaded
    component: BoardUser,
    meta: { title: 'Genshin Impact | User Board', public: false },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  //trying to access a restricted page + not logged in
  //redirect to login page
  if (!to.meta.public && !loggedIn) {
    next('login');
  } else {
    next();
  }

  document.title = to.meta?.title ?? 'Loading...';
});

export default router;
