<template>
  <div class="back-to-top" v-bind:class="{btt_visible: isVisible, btt_docked: isDocked}">
    <a href="javascript:;" class="toTop" @click="toTop">
      <div class="up-icon">
        <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 100 100" fill="#ffffff" enable-background="new 0 0 100 100" xml:space="preserve">
          <path d="M98.487,65.614L51.415,18.54c-0.75-0.75-2.078-0.75-2.828,0L1.511,65.615c-0.375,0.375-0.586,0.884-0.586,1.414s0.211,1.039,0.586,1.414L14.498,81.43c0.391,0.391,0.902,0.586,1.414,0.586s1.023-0.195,1.414-0.586L50,48.756l32.675,32.673c0.75,0.751,2.078,0.75,2.828,0l12.984-12.987C99.269,67.661,99.269,66.395,98.487,65.614z"/>
        </svg>
      </div>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'scroll-top',
    props: {
      scroll: 0
    },
    data () {
      return {
        nowScroll: 0,
        isVisible: false,
        isDocked: false
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        // window.addEventListener('scroll', this.onScroll)
      })
    },
    created: function () {
      // 设置滚动条监听

    },
    methods: {
      showTopBtn: function () {
        if (this.scroll > 300) {
          this.isVisible = true
          // 网页总高度
          let totalHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
          // 可视高度
          let clientHeight = document.documentElement.clientHeight
          // 卷曲的高度
          let scrollTop = document.documentElement.scrollTop
          // 网页宽度
          let clientWidth = document.documentElement.clientWidth
          let ceild = 0
          if (clientWidth <= 840) {
            ceild = 160
          } else {
            ceild = 76
          }
          let scle = totalHeight - scrollTop - clientHeight
          if (scle <= ceild) {
            this.isDocked = true
          } else {
            this.isDocked = false
          }
        } else {
          this.isVisible = false
        }
      },
      toTop: function () {
        let startTime = (new Date()).getTime()
        let timer = setInterval(function () {
          let changeTime = (new Date()).getTime()
          let t = 1000 - Math.max(0, startTime - changeTime + 1000)
          // 获取滚动条的滚动高度
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
          // 用于设置速度差，产生缓动的效果
          let value = (0 - scrollTop) * (t /= 1000) * t + scrollTop
          document.documentElement.scrollTop = document.body.scrollTop = value
          // console.log(scrollTop)
          if (scrollTop === 0) {
            clearInterval(timer)
          }
        }, 13)
      }
    },
    watch: {
      scroll: function (val) {
        // console.log('接收到消息')
        this.showTopBtn()
        this.nowScroll = this.scroll
      }
    }
  }
</script>
<style>
  .back-to-top {
    display: block;
    position: fixed;
    bottom: 24px;
    right: -41px;
    transition: 
    background-color .18s cubic-bezier(.6,0,.1,1),
    box-shadow .18s cubic-bezier(.6,0,.1,1),
    transform .18s cubic-bezier(.6,0,.1,1);
    z-index: 8;
  }
  .btt_visible {
    transform: translate(-64px, 0);
  }
  .btt_docked {
    position: absolute;
    bottom: 75pt;
  }
  @media screen and (max-width: 840px){
    .btt_docked {
      position: absolute;
      bottom: 100px;
    }
  }
  .toTop {
    background: #757575 !important;
  }
  .toTop {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    color: #fff;
    background: #00bcd4;
    box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 3px 3px 0 rgba(0,0,0,.24);
    cursor: pointer;
    -webkit-transition: all .1s ease-out;
    transition: all .1s ease-out;
    position: relative;
    overflow: hidden;
  }
  .toTop .up-icon{
    width: 20px;
    height: 20px;
    padding: 10px;
  }
</style>