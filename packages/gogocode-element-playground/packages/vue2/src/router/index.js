import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home.vue'),
  },
  {
    path: '/import',
    name: 'import',
    component: () => import(/* webpackChunkName: "import" */ '@/components/import/Comp.vue'),
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import(/* webpackChunkName: "icon" */ '@/components/icon/Comp.vue'),
  },
  {
    path: '/v-model-ele',
    name: 'v-model-ele',
    component: () => import(/* webpackChunkName: "v-model-ele" */ '@/components/v-model-ele/Comp.vue'),
  },
  {
    path: '/sub-menu',
    name: 'sub-menu',
    component: () => import(/* webpackChunkName: "sub-menu" */ '@/components/sub-menu/Comp.vue'),
  },
];

export default routes;