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
    <div>
      <a :href="`${content.url}`" class="post-title">
        <img src="https://themes.gohugo.io/theme/hugo-hello-programmer-theme/images/post-title-icon.png" />
        <div class="post-meta">
          <strong v-if="content.source.name">{{content.source.name}} | {{content.author}}</strong><strong v-else>unknown provider</strong><br><time>{{content.publishedAt}}</time>
          <h1>{{content.title}}</h1>
        </div>
      </a>
      <section class="post-content">
        <p><strong>{{content.description}}</strong></p>
      </section>  
    </div>
        <hr class="summary-sep"/>
    </div>


  
    <footer class="footer">
      <strong>Puerto Rico | Top HeadLines In US</strong><a href="https://github.com/ChrisMichaelPerezSantiago">Chris M. Perez</a>. The source code is licensed
      <strong><a href="https://github.com/ChrisMichaelPerezSantiago/TopHeadLinesInUS/blob/master/LICENSE">MIT</a>.</strong>
    </footer>
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

