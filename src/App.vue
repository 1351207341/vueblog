<template>
  <div id="app" class="mdl-layout__container">
    <div class="material-layout">
      <main class="material-layout__content" id="main">
          <keep-alive include="material-index">
            <router-view v-on:goToTop="toTopFun"></router-view>
          </keep-alive>
          <to-top ref="toTopMethod" :scroll="scroll" v-on:currentScroll="scrollEvent"></to-top>
      </main>
    </div>
    <keep-alive include="footer"><v-footer></v-footer></keep-alive>
  </div>
</template>

<script>
import ToTop from '@/components/ToTop'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  data () {
    return {
      scroll: 0
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    getScrollTop: function () {
      let scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    toTopFun: function () {
      this.$refs.toTopMethod.toTop()
    },
    onScroll: function () {
      this.scroll = this.getScrollTop()
      // console.log(this.scroll)
    },
    scrollEvent: function (date) {
      // 接收子组件滚动条滚动位置
      console.log('接收到子组件滚动条滚动位置')
      this.scroll = date
    }
  },
  watch: {
    scroll: function (val) {
      // 发送消息到子组件
      // console.log('发送消息到子组件')
    }
  },
  components: {
    'to-top': ToTop,
    'v-footer': Footer
  }
}
</script>

<style>
  *, :after, :before {
    box-sizing: border-box;
  }
  html, body {
    font-family: Roboto,"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    overflow-x: hidden!important;
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-size: cover;
    background-attachment: fixed;
    content: '';
    background-color: #e9ebec;
    min-height: 100%;
  }
  .mdl-layout__container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .material-layout {
    width: 100%;
    min-height: 100%;
  }
  .material-layout__content {
    position: relative;
    padding-top: 165px;
    padding-bottom: 200px;
    margin: 0 auto;
    width: 100%;
  }
  @media screen and (max-width: 480px){
    .material-layout .material-layout__content {
      padding-top: 0;
      padding-bottom: 280px;
    }
  }
  .material-index, .material-post {
    display: flex;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 900px;
    flex-shrink: 0;
    opacity: 0;
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
  .mdl-grid {
    display: flex!important;
  }
  @media (min-width: 840px){
    .mdl-grid {
      padding: 8px;
    }
  }
</style>
