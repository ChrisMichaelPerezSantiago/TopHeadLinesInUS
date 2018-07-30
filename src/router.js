import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import NavBar from '@/views/NavBar.vue';
import Vuetify from 'vuetify'
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css';

Vue.prototype.$http = axios;

Vue.use(Router);
Vue.use(Vuetify);

Vue.component('app-navbar' , NavBar);


export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});
