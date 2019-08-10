<template>
  <div id="add-blog">
<div v-if="!submitted">
    <h3 id="header">Add a Post</h3>
    <p>Select Author</p>
    <select v-model="blog.author">
        <option v-for="author in authors" :key="author.id">{{author}}</option>
    </select>

    <p>Post Title <input type="text" id="" v-model.lazy="blog.title"></p>

    <p>Post Content:
    <textarea id="" cols="30" rows="10" v-model="blog.content"></textarea></p>

    <div id="checkboxes">
        <label>Basketball</label>
        <input type="checkbox" value="basketball" v-model="blog.categories">
        <label>Tech</label>
        <input type="checkbox" value="tech" v-model="blog.categories">
        <label>Faith</label>
        <input type="checkbox" value="faith" v-model="blog.categories">
        <label>Lifestyle</label>
        <input type="checkbox" value="lifestyle" v-model="blog.categories">
    </div>

    <button @click.prevent="publish" id="publish">Publish</button>
</div>

    <div v-if="submitted">
        <h3>Post Successfully added</h3>
    </div>

    <div id="preview">
        <h4>Preview</h4>
        <h3>{{ blog.title }} <small>by {{blog.author}}</small></h3>
        <p>{{ blog.content }}</p>
        Tags: <p v-for="category in blog.categories" :key="category.id" id="tags">• {{category}}</p>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
        blog:{
            title:'',
            content: '',
            categories: [],
            author: ""
        },
        authors: ['David', 'Chuka', 'David Chuka'],
        submitted: false //keeps track of if the form has been submitted yet
    }
  },
  methods: {
      publish: function() {
          this.$http.post('http://jsonplaceholder.typicode.com/posts', {
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data);
              this.submitted = true;
          });
      }
  }
}
</script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 500px;
}

input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}

#header {
    text-align: center;
}

#preview {
    border: 1px dashed #333;
    height: 270px;
    width: 500px;
    padding: 10px;
    margin-top: 10px;
}

#checkboxes input {
    display:inline-block;
    margin-right: 10px;
}

#checkboxes label {
    display:inline-block;
}

#tags {
    display: inline-block;
}

#preview small{
    font-size: 15px;
    font-weight: normal;
}

#publish {
    width: 95px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #333;
    background: #333;
    cursor: pointer;
    color: #fff;
}
</style>
