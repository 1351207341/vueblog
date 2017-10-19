<template>
  <div id="app" class="mdl-layout__container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
