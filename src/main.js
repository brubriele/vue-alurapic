import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate'
import veeValidate from 'vee-validate';

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
 });

Vue.use(veeValidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
