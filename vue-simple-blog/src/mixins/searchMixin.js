export default {
    computed: { 
        filteredPosts: function() { //this is the function 
          return this.blogs.filter((blog) => { //this returns the current array of posts and then filters it with the filter method. The individual item in the array is the (blog)
            return blog.title.match(this.search)//what is being returned here is basically a boolean which states that if something is returned as true, then it stays in the array and if it is returned as false then it is removed from the array. So basically this last line says return true for the array if the blog title matches the searched value.
          })
      }
    }
}

//filteredPosts function should return an array.
