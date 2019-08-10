<template>
  <div v-theme="'light'">
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showPosts from './components/showPosts.vue';
import header from './components/header.vue';

export default {
  components:{
    'add-blog': addBlog,
    'show-posts': showPosts,
    'header-component': header
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
