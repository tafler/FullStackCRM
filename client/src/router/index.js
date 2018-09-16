import Vue from 'vue';
import Router from 'vue-router';
import WithSideNav from '@/layout/WithSideNav';
import Analytics from '@/pages/Analytics';
import LoginPage from '@/pages/LoginPage';
import Assortment from '@/pages/Assortment';
import OrderHistory from '@/pages/History';
import Order from '@/pages/Order';
import Overview from '@/pages/Overview';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'WithSideNav',
      component: WithSideNav,
      children: [
        {
          path: '/overview',
          name: 'overview',
          component: Overview,
        },
        {
          path: '/analytics',
          name: 'analytics',
          component: Analytics,
        },
        {
          path: '/history',
          name: 'history',
          component: OrderHistory,
        },
        {
          path: '/order',
          name: 'order',
          component: Order,
        },
        {
          path: '/assortment',
          name: 'assortment',
          component: Assortment,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ],
});
