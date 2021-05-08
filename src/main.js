import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
import VeeValidate from 'vee-validate';
import msg from './pt_BR';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/teste.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// registrando o módulo/plugin no global view object
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
 });

 Vue.use(VeeValidate, {
   locale: 'pt_BR',
   dictionary: {
     pt_BR: {
       messages: msg
     }
   }
 });

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
