import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Product from './views/Product.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      component: Product,
      children: [
        //UserInfo component is rendered when /user/:id is matched
        { path: ':id', component: Product, props: true }
      ]
    },
  ],
});
