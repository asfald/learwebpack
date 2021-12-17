

import "./style.scss";

import Vue from "vue/dist/vue.common.dev";

import App from './App.vue'
import VueRouter from "vue-router";


Vue.use(VueRouter)
Vue.component('app', App)

import index from './pages/index.vue'
import char from './pages/char.vue'
import chat from './pages/chat.vue'

let router = new VueRouter({
  routes:[
    {path: '/', component: index },
    {path: '/char/:id',component: char},
    {path: '/chat',component: chat}
  ]
})

new Vue({
  el: "#app",
  router

});