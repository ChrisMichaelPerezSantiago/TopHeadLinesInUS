<template>
<div>
    <div class="container">
      <div class="title">
        <h1>Puerto Rico | Top HeadLines In US</h1>
      </div>

    <div v-if="loading">
      loading ...
    </div>
    <div v-else v-for="(content , index) in news" :key="index">
    <a href="https://themes.gohugo.io/theme/hugo-hello-programmer-theme/post/post_sample/">
      <div class="post-title">
        <img src="https://themes.gohugo.io/theme/hugo-hello-programmer-theme/images/post-title-icon.png" />
        <div class="post-meta">
          <strong v-if="content.source.name">{{content.source.name}}</strong><strong v-else>unknown provider</strong><br><time>{{content.publishedAt}}</time>
          <h1>{{content.title}}</h1>
        </div>
      </div>  
    </a>
        <hr class="summary-sep"/>
    </div>
  
    <div class="paging">
      PAGE 1 / 1
    </div>
 
   </div>
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
</div>
</template>

<script>
  export default{
    props: ['news' , 'loading'] 
  }
</script>

<style scoped>
</style>

