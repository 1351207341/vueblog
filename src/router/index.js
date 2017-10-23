import Vue from 'vue'
import Router from 'vue-router'
// import ArticleList from '@/components/ArticleList'
// import Article from '@/components/Article'
import Common from '@/page/Common'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition || typeof savedPosition === 'undefined') {
      // 从第二页返回首页时savePosition为undefined
      // 只处理设置了路由元信息的组件
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : false
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : true
      if (savedPosition) {
        return savedPosition
      }
    } else {
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : true
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : false
    }
  },
  routes: [
    {
      path: '/',
      name: '/',
      component: Common,
      children: [
        {
          path: '/',
          name: '/',
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
          component: resolve => require(['@/components/ArticleList.vue'], resolve)
        }
      ],
      meta: {isKeepAlive: true}
    }
  ]
})
