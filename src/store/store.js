import Vue from "vue";
import Vuex from "vuex";
import {API_KEY} from '@/config/secrets.js'
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    news: [],
    loading: false
  },
  mutations: {
    updateNews(state , posts){
      state.news = posts;
    },
    loadingState(state , loading){
      state.loading = loading;
    }
  },
  actions: {
    getData({commit}){
      console.log('fetch data');
      var header = new Headers();
      var config = {
        method: 'GET',
        headers: header,
        mode: 'cors',
        cache: 'default'
      }
      axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY , config).then(responde =>{
        console.log(responde);
        commit('updateNews' , responde.data.articles);
        commit('loadingState' , false);
      })
    }
  },
  getters:{

  },
});
