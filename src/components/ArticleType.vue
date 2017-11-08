<template>
    <div class="material-index mdl-grid">
      <div v-for="(post, index) in postList" v-bind:key="post['id']" class="post_entry-module mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col fade">
          <div :style ="post.bgurl" class="post_thumbnail-custom mdl-card__media mdl-color-text--grey-50 lazy">
              <p class="article-headline-p">
                <router-link :to="{name:'article',params:{articleid:post['id']}}">
                  <a>{{post['title']}}</a>
                </router-link>
              </p>
          </div>
          <div class="mdl-color-text--grey-600 mdl-card__supporting-text post_entry-content">
              <div class="post_entry-abstract">{{post['abstract']}}</div>
              <div class="post_entry-info">
                  <div class="post_entry-left-info">
                      <strong v-on:click="getHeight">Viosey</strong> <span>{{post['time']}}</span>
                  </div>
                  <div class="post_entry-right-info">
                      <span class="post_entry-category">
                        <router-link :to="{name:'type',params:{typeid:post['typeid']}}">
                          <a class="post_category-link">{{post['type']}}</a>
                        </router-link>
                      </span>
                      <span class="post_entry-views"></span>
                  </div> 
              </div>
          </div>
      </div>
      <Paging :pageData="pageData" v-on:pageTurning="pageEvent"></Paging>
    </div>
</template>

<script>
import Paging from '@/components/Paging'
import { mapActions } from 'vuex'
import Velocity from 'velocity-animate'
export default {
  name: 'material-index',
  data () {
    return {
      postList: [],
      scrollY: 0,
      el: null,
      isFirst: true,
      page: 1,
      pageData: {},
      name: 'type',
      upComName: 'index'
    }
  },
  components: {
    Paging
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(to)
      window.scrollTo(0, vm.scrollY)
      // 告诉父组件当前滚动条位置
      vm.toScrollEvent(vm.scrollY)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.scrollY = window.scrollY
    // console.log(this.scrollY)
    next(vm => {})
    // this.leave(this.el)
  },
  mounted: function () {
    this.$nextTick(function () {
      // console.log('加载完DOM')
      // console.log(this.$el)
      this.el = this.$el
      // this.leave(this.el)
    })
  },
  created: function () {
    if (this.$route.query.page) {
      this.page = this.$route.query.page
    } else {
      this.page = 1
    }
    this.getPostList()
    // console.log(this.$route.query.page)
  },
  updated: function () {
    this.$nextTick(function () {
      // console.log('更新完DOM')
      // 数据加载完毕设置显示footer
      this.show_footer_to_true()
      // 过渡动效
      // if (this.isFirst === true) {
      // this.leave(this.el)
      // }
    })
  },
  activated: function () {
    // keep-alive 激活调用
    console.log('keep-alive 激活调用')
    if (this.isFirst !== true) {
      // 从上一路由article跳转过来时过渡显示
      if (this.upComName === 'article') {
        this.leave(this.el)
      }
    }
  },
  deactivated: function () {
    // keep-alive 移除时调用
    console.log('keep-alive 移除时调用')
    this.isFirst = false
    this.$nextTick(function () {
      this.reave(this.el)
    })
  },
  beforeDestroy: function () {
    // 组件销毁前调用
    // console.log('组件销毁前调用')
    this.$nextTick(function () {
      this.reave(this.el)
    })
  },
  destroyed: function () {
    // 组件销毁后调用
    // this.getScrollTop()
  },
  methods: {
    ...mapActions({
      show_footer_to_true: 'show_footer_to_true'
    }),
    getPostList: function () {
      var _this = this
      this.$http.post('/api', {page: this.page})
      .then(function (response) {
        let res = response.data
        if (res.code === 1) {
          _this.postList = res.data
          _this.pageData = res.page
          _this.leave(_this.el)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    toScrollEvent: function (scrollY) {
      // 通知父组件当前滚动条位置
      this.$emit('currentScroll', scrollY)
    },
    getHeight: function () {
      // this.leave(this.el)
      var _this = this
      this.$http.post('/api', {})
      .then(function (response) {
        // console.log(response.data)
        for (var i = response.data.length - 1; i >= 0; i--) {
          _this.postList.push(response.data[i])
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    pageEvent: function (page) {
      // 翻页
      // this.page = page
      // this.getPostList()
    },
    leave: function (el, done) {
      if (done) {
        Velocity(el, { opacity: 1, translateX: [0, '30px'] }, { duration: 500 }, { complete: done() })
      } else {
        Velocity(el, { opacity: 1, translateX: [0, '30px'] }, { duration: 500 })
      }
    },
    reave: function (el, done) {
      if (done) {
        Velocity(el, { opacity: 0, translateX: ['30px', 0] }, { duration: 500 }, { complete: done() })
      } else {
        Velocity(el, { opacity: 0, translateX: ['30px', 0] }, { duration: 500 })
      }
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': function (val, oldval) {
      if (Number(val.query.page)) {
        this.page = Number(val.query.page)
      } else {
        this.page = 1
      }
      this.upComName = oldval.name
      if (val.name === 'type') {
        if (val.name === oldval.name) {
          this.$emit('goToTop')
          console.log('滚动滚动条')
        }
        // 上一路由为article时不去请求数据
        if (oldval.name !== 'article') {
          let _this = this
          this.reave(this.el, () => {
            // console.log(val)
            _this.getPostList()
          })
        }
      }
    }
  }
}
</script>
<style>
  @media (min-width: 840px){
    .mdl-grid {
      padding: 8px;
    }
  }
  .mdl-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin: 0 auto;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
  }
  .material-index {
    display: flex;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 900px;
    flex-shrink: 0;
    opacity: 0;
  }
  .mdl-grid {
    display: flex!important;
  }
  /*列表*/
  .mdl-accordion, .mdl-button, .mdl-card, .mdl-checkbox, .mdl-dropdown-menu, .mdl-icon-toggle, .mdl-item, .mdl-radio, .mdl-slider, .mdl-switch, .mdl-tabs__tab, a {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);
  }
  .mdl-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 1pc;
    font-weight: 400;
    min-height: 200px;
    overflow: hidden;
    width: 330px;
    z-index: 1;
    position: relative;
    background: #fff;
    border-radius: 2px;
    box-sizing: border-box;
  }
  .mdl-shadow--2dp {
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
  }
  .mdl-cell {
    box-sizing: border-box;
  }
  @media (min-width: 840px){
    .mdl-cell {
      margin: 8px;
      width: calc(33.3333333333% - 1pc);
    }
    .mdl-cell--12-col {
      width: calc(100% - 1pc);
    }
  }
  @media (max-width: 839px) and (min-width: 480px){
    .mdl-cell {
      margin: 8px;
      width: calc(50% - 1pc);
    }
    .mdl-cell--12-col {
      width: calc(100% - 1pc);
    }
  }
  @media (max-width: 479px){
    .mdl-cell--12-col {
      width: calc(100% - 1pc);
    }
    .mdl-cell {
      margin: 8px;
      width: calc(100% - 1pc);
    }
  }
  .post_entry-module {
    margin-bottom: 47.59px;
    margin-top: 0;
  }
  .fade {
    transition: all .2s linear;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    opacity: 1;
  }
  .material-layout .mdl-card {
    display: flex;
    min-height: 25pc;
    flex-direction: column;
    align-items: stretch;
    border-radius: 2px;
  }
  .article-headline-p {
    font-size: 34px;
    line-height: 40px;
    font-weight: 400;
    margin: 0;
    text-shadow: 1px 1px 8px #444;
  }
  @media screen and (max-width: 840px){
    .article-headline-p {
      font-size: 22px;
    }
  }
  .material-layout .mdl-card__media a, .material-layout .mdl-card__title a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }
  /*列表end*/
  /*文章卡片*/
  .mdl-color-text--grey-50 {
    color: #fafafa!important;
  }
  .mdl-card__media {
    background-color: #ff4081;
    background-repeat: repeat;
    background-position: 50% 50%;
    background-size: cover;
    background-origin: padding-box;
    background-attachment: scroll;
    box-sizing: border-box;
  }
  .mdl-card__media {
    background-color: #607d8b!important;
  }
  .material-layout .mdl-card__media {
    display: flex;
    box-sizing: border-box;
    padding: 24.72px;
    background-size: cover;
    cursor: pointer;
    flex-grow: 1;
    flex-direction: row;
    align-items: flex-end;
  }

  .mdl-color-text--grey-600 {
    color: #757575!important;
  }
  .mdl-card__supporting-text {
    color: rgba(0,0,0,.54);
    font-size: 13px;
    line-height: 18px;
    overflow: hidden;
    padding: 1pc;
    width: 90%;
  }
  .material-layout .mdl-card__supporting-text {
    display: inline;
    padding: 20px 0 0;
    width: 100%;
    /* min-height: 4pc; */
    min-height: 162px;
    align-items: center;
    box-sizing: border-box;
  }
  /* .material-layout .mdl-card__media~.mdl-card__supporting-text {
      min-height: 4pc;
  } */
  /* .material-layout .mdl-card__supporting-text:not(:last-child) {
      
      min-height: 152px;
  } */
  .material-layout .post_entry-module .mdl-card__media~.mdl-card__supporting-text {
    padding-top: 29.03px;
  }
  .material-layout .post_entry-abstract{
    height: 136px;
    padding: 1pc;
    overflow: hidden;
  }
  .material-layout .post_entry-info {
    border-top: 1px solid rgba(0,0,0,.1);
    height: 26px;
    overflow: hidden;
    font-size: 13px;
    line-height: 13px;
    font-weight: 400;
  }
  .material-layout .post_entry-info .post_entry-left-info{
    float: left;
    width: 50%;
    padding: 6px 0 6px 1pc;
  }
  .material-layout .post_entry-info .post_entry-right-info {
    float: right;
    padding: 6px 1pc 6px 0;
  }
  .material-layout .post_entry-info .post_entry-right-info a {
    text-decoration: none;
    font-weight: 400;
    color: #607d8b;
  }
  /*文章卡片end*/
</style>
