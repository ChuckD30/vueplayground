import showPosts from "./components/showPosts.vue";
import addBlog from './components/addBlog.vue';

export default [
    {path:'/', component:showPosts},
    {path:'/add', component:addBlog}
]