<template>
  <div id="show-blogs">
      <h1 v-rainbow>All Posts</h1>
      <input type="text" v-model="search" id="search-box">
      <div v-for="blog in filteredPosts" :key="blog.id" class="single-post">
          <h2>{{blog.title|to-uppercase}}</h2>
          <article>{{blog.body|snippet}}</article>
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data () {
    return {
        blogs: [
            {title: "Praise God", body: "The lord is good Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, aliquam aspernatur? Repellendus explicabo eaque aliquam tempore voluptas sunt ipsam aliquid repellat dolor suscipit! Nemo minus tempora sit molestias. Delectus, sunt."},
            {title: "Money Management", body: "This is how you should spend"}
            ],
        search: ''
    }
  },

  methods: {
  },
  computed: {
  },
  mixins : [searchMixin],
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10)
      })
  }
}
</script>

<style scoped>
#search-box {
    width: 500px;
}
</style>
