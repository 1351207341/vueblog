import Vue from 'vue'
import Router from 'vue-router'
// import ArticleList from '@/components/ArticleList'
// import Article from '@/components/Article'
// import Common from '@/page/Common'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '/',
      mate: { keepAlive: true },
      component: resolve => require(['@/components/ArticleList.vue'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/ArticleList.vue'], resolve)
    },
    {
      path: '/article/:articleid',
      name: 'article',
      component: resolve => require(['@/components/Article.vue'], resolve)
    },
    {
      path: '/type/:typeid',
      name: 'type',
      component: resolve => require(['@/components/ArticleList.vue'], resolve),
      meta: {keepAlive: false}
    }
  ]
})
