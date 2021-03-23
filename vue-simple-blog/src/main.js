import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.use(VueResource);
Vue.use(VueRouter);

const appRouter = new VueRouter({
  routes: Routes,
  mode:'history'
});

//Custom directives
Vue.directive('rainbow', {
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode) {
    if (binding.value == "dark") {
      el.style.backgroundColor = "#ddd";
    }
    else if (binding.value == "light") {
      el.style.backgroundColor = "whitesmoke";
    }
  }
})

//Custom Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
})

Vue.filter('snippet', function(value){
  return value.slice(0,200) + '...';
})

new Vue({
  el: '#app', //belongs to index.html
  render: h => h(App), //render contents from App.vue inside this Vue instance
  router: appRouter
})
