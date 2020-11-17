import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Base from "@/components/Base.vue";
import Chat from "@/components/Chat.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Base',
    meta: {title: 'Вход в чат'},
    component: Base
  },  {
    path: '/chat',
    name: 'Chat',
    meta: {title: 'Чат'},
    component: Chat,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
