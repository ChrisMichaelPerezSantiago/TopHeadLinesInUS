<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/views/NavBar.vue';

  export default {
    data(){
      return{
        components:{
          'app-navbar': NavBar
        }
      }
    }
  }
</script>


<style>
</style>
