import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '@/components/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: ArticleList
    },
    {
      path: '/type/:typeid',
      name: 'type',
      component: ArticleList
    },
    {
      path: '/article/:articleid',
      name: 'article',
      component: ArticleList
    }
  ]
})
