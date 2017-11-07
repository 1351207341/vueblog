<template>
  <nav class="material-nav mdl-cell mdl-cell--12-col">
      <a class="extend prev" v-on:click="prevPage">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <svg t="1509624867329" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5683" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
            <path d="M404.3775999999999 907.4687999999999a28.9792 28.9792 0 1 0 41.57440000000001-40.24319999999998l-317.23519999999985-326.7584000000001L974.6431999999999 540.4672000000002a28.9792 28.9792 0 0 0 2.1316282072803006e-14-57.855999999999995l-845.0047999999999-2.2737367544323206e-13L445.8496000000001 156.7744a28.9792 28.9792 0 0 0-41.57439999999999-40.243200000000016L20.480000000000018 511.99999999999994z" p-id="5684" fill="#2c2c2c"></path>
          </svg>
        </button>
      </a>
    <span class="page-number current">{{ pageData['current'] }}</span>
      <a class="extend next" v-on:click="nextPage">
        <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <svg t="1509624933105" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5867" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
            <path d="M619.6224 116.5312a28.9792 28.9792 0 1 0-41.5744 40.2432l317.2352 326.7584H49.3568a28.9792 28.9792 0 0 0 0 57.856h845.0048L578.1504 867.2256a28.9792 28.9792 0 0 0 41.5744 40.2432L1003.52 512z" p-id="5868" fill="#2c2c2c"></path>
          </svg>
        </button>
      </a>
  </nav>
</template>

<script>
export default {
  name: 'paging',
  props: {
    pageData: null
  },
  data () {
    return {
      postList: []
    }
  },
  beforeDestroy: function () {
    // 组件销毁前调用
    console.log('组件销毁前调用')
  },
  destroyed: function () {
    // 组件销毁后调用
    console.log('组件销毁后调用')
  },
  methods: {
    prevPage: function () {
      let page = Number(this.pageData.current) - 1
      if (page === 0 || page < 0) {
        page = 1
      }
      this.$router.push({query: {'page': page}})
      this.$emit('pageTurning', page)
    },
    nextPage: function () {
      let page = Number(this.pageData.current) + 1
      if (page === Number(this.pageData.maxPage) || page > Number(this.pageData.maxPage)) {
        page = Number(this.pageData.maxPage)
      }
      this.$router.push({query: {'page': page}})
      this.$emit('pageTurning', page)
    }
  }
}
</script>
<style scoped>
  .material-nav {
    display: flex;
    margin: 10px 15px;
    color: #fff;
    font-weight: 300;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .material-nav a {
    font-weight: 400;
    color: #607d8b;
  }

  .material-nav .mdl-button {
    background-color: #fff;
    color: rgba(0,0,0,.54);
  }
  .mdl-button {
    background: 0;
    border: 0;
    border-radius: 2px;
    color: #000;
    display: block;
    position: relative;
    height: 36px;
    min-width: 4pc;
    padding: 0 8px;
    display: inline-block;
    font-family: Roboto,Helvetica,Arial,sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0;
    overflow: hidden;
    will-change: box-shadow,transform;
    -webkit-transition: box-shadow .2s cubic-bezier(.4,0,1,1),
                        background-color .2s cubic-bezier(.4,0,.2,1),
                        color .2s cubic-bezier(.4,0,.2,1);
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),
                background-color .2s cubic-bezier(.4,0,.2,1),
                color .2s cubic-bezier(.4,0,.2,1);
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
  }
  .mdl-button--icon {
    border-radius: 50%;
    font-size: 24px;
    height: 2pc;
    margin-left: 0;
    margin-right: 0;
    min-width: 2pc;
    width: 2pc;
    padding: 5px;
    overflow: hidden;
    color: inherit;
    line-height: normal;
  }
  .current {
    display: block;
    color: #666;
    text-align: center;
    margin: 0 auto;
  }
</style>
