<template>
  <div class="material-layout">
    <main class="material-layout__content" id="main">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'common',
  data () {
    return {
      msg: ''
    }
  },
  methods: {}
}
</script>
<style scoped>
  .material-layout {
    width: 100%;
    height: 100%;
  }
  .material-layout__content {
    position: relative;
    padding-top: 165px;
    margin: 0 auto;
    width: 100%;
  }
  @media screen and (max-width: 480px){
    .material-layout .material-layout__content {
      padding-top: 0;
    }
  }
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
  .material-index, .material-post {
    display: flex;
    margin: 0 auto;
    padding: 0;
    width: 100%;
    max-width: 900px;
    flex-shrink: 0;
  }
  .mdl-grid {
    display: flex!important;
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translate3d(30px, 10px, 0);
    opacity: 0;
  }
</style>
