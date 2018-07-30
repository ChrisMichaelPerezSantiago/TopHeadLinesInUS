<template>
    <div v-if="loading">
      loading ...
    </div>
    <div v-else>
      <ul>
        <li v-for="(content , index) in news" :key="index">
            {{content}}
        </li>
      </ul>
    </div>
</template>

<script>
  export default{
    props: ['news' , 'loading'] 
  }
</script>

<style scoped>
</style>

