<template>
  <div>
    <app-posts :news='news' :loading='loading'></app-posts>
  </div>
</template>

<script>
  import {mapActions , mapState} from 'vuex';
  import posts from '@/components/Posts.vue';

  export default{
    computed: mapState(['news' , 'loading']),
    components:{
      'app-posts': posts
    },
    created(){
       this.$store.dispatch('getData');
    }
  }
</script>
