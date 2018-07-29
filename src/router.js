import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

import axios from 'axios';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(Router);
Vue.use(VueMaterial);

Vue.prototype.$http = axios;

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
