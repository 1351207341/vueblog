<template>
  <div class="material-layout">
      <main class="material-layout__content" id="main">
          <div class="material-index mdl-grid">
              <div v-for="(post, index) in postList" class="post_entry-module mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col fade">
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
                              <strong>Viosey</strong> <span>{{post['time']}}</span>
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
          </div>
      </main>
  </div>
</template>

<script>
export default {
  name: 'material',
  data () {
    return {
      postList: []
    }
  },
  mounted: function () {
    this.getPostList()
  },
  methods: {
    getPostList: function () {
      this.postList = [
        {
          'id': 1,
          'title': '手动编译 Nginx 并安装 VeryNginx',
          'abstract': 'VeryNginx 是个非常有意思且便捷的 Nginx 扩展程序。最近新开了台 VPS，便想体验一下它带来的快感。',
          'bgurl': {backgroundImage: 'url(http://localhost:8080/static/compile-nginx-and-install-verynginx.png)'},
          'type': '技术向',
          'typeid': 10,
          'time': '10月 12, 2017'
        },
        {
          'id': 2,
          'title': '手动编译 Nginx 并安装 VeryNginx',
          'abstract': 'VeryNginx 是个非常有意思且便捷的 Nginx 扩展程序。最近新开了台 VPS，便想体验一下它带来的快感。',
          'bgurl': {backgroundImage: 'url(http://localhost:8080/static/compile-nginx-and-install-verynginx.png)'},
          'type': '技术向',
          'typeid': 10,
          'time': '10月 12, 2017'
        },
        {
          'id': 3,
          'title': '手动编译 Nginx 并安装 VeryNginx',
          'abstract': 'VeryNginx 是个非常有意思且便捷的 Nginx 扩展程序。最近新开了台 VPS，便想体验一下它带来的快感。',
          'bgurl': {backgroundImage: 'url(http://localhost:8080/static/compile-nginx-and-install-verynginx.png)'},
          'type': '技术向',
          'typeid': 10,
          'time': '10月 12, 2017'
        }
      ]
    }
  }
}
</script>
<style>
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
  @media (max-width: 479px){
    .mdl-cell--12-col {
        width: calc(100% - 1pc);
    }
    .mdl-cell {
        margin: 8px;
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
  @media (min-width: 840px){
    .mdl-cell {
        margin: 8px;
        width: calc(33.3333333333% - 1pc);
    }
    .mdl-cell--12-col {
        width: calc(100% - 1pc);
    }
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
  .post_entry-module {
      margin-bottom: 47.59px;
      margin-top: 0;
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
