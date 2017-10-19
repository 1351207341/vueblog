<template>
	<div class="material-post_container">
        <div class="material-post mdl-grid">
            <div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
				<div class="post_thumbnail-custom mdl-card__media mdl-color-text--grey-50" style="background-image:url(https://ws3.sinaimg.cn/large/006tKfTcly1fiickclvvxj30m80go77f.jpg)">
		            <p class="article-headline-p">
		                VPS的初始化
		            </p>
				</div>
				<div id="post-content" class="mdl-color-text--grey-700 mdl-card__supporting-text fade">
					<p><em>写一下刚买完vps后初始配置的命令</em></p>
					<h2 id="系统升级"><a href="#系统升级" class="headerlink" title="系统升级"></a>系统升级</h2>
					<figure class="highlight plain">
					    <table>
					        <tbody>
					            <tr>
					                <td class="gutter"><pre><div class="line">1</div></pre></td>
					                <td class="code"><pre><div class="line">sudo apt-get update &amp;&amp; apt-get upgrade -y</div></pre></td>
					            </tr>
					        </tbody>
					    </table>
					</figure>
					<h2 id="上传密钥"><a href="#上传密钥" class="headerlink" title="上传密钥"></a>上传密钥</h2>
					<figure class="highlight bash">
					    <table>
					        <tbody>
					            <tr>
					                <td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div></pre></td>
					                <td class="code"><pre><div class="line">ssh-copy-id root@ip</div><div class="line"></div><div class="line">nano /etc/ssh/sshd_config</div><div class="line"></div><div class="line">PasswordAuthentication yes -&gt; PasswordAuthentication no</div><div class="line"></div><div class="line">service sshd restart</div></pre></td>
					            </tr>
					        </tbody>
					    </table>
					</figure>
					<h2 id="开启BBR"><a href="#开启BBR" class="headerlink" title="开启BBR"></a>开启BBR</h2>
					<figure class="highlight bash">
					    <table>
					        <tbody>
					            <tr>
					                <td class="gutter"><pre><div class="line">1</div><div class="line">2</div><div class="line">3</div><div class="line">4</div><div class="line">5</div><div class="line">6</div><div class="line">7</div><div class="line">8</div><div class="line">9</div><div class="line">10</div><div class="line">11</div><div class="line">12</div><div class="line">13</div></pre></td>
					                <td class="code"><pre><div class="line">有些需要设置 grub2 内核后再开启BBR</div><div class="line"></div><div class="line">有些需要手动升级内核</div><div class="line">wget http://kernel.ubuntu.com/~kernel-ppa/mainline/v4.12/linux-image-4.12.0-041200-generic_4.12.0-041200.201707022031_amd64.deb</div><div class="line">dpkg -i linux-image-4.12.0-041200-generic_4.12.0-041200.201707022031_amd64.deb</div><div class="line">/usr/sbin/update-grub</div><div class="line">reboot</div><div class="line"></div><div class="line">wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh</div><div class="line">chmod +x bbr.sh</div><div class="line">./bbr.sh</div><div class="line"></div><div class="line">lsmod | grep bbr</div></pre></td>
					            </tr>
					        </tbody>
					    </table>
					</figure>
					<h2 id="部署Docker"><a href="#部署Docker" class="headerlink" title="部署Docker"></a>部署Docker</h2>
					<figure class="highlight bash">
					    <table>
					        <tbody>
					            <tr>
					                <td class="gutter"><pre><div class="line">1</div><div class="line">2</div></pre></td>
					                <td class="code"><pre><div class="line">curl -s https://get.docker.com/ | sudo sh</div><div class="line">docker -v</div></pre></td>
					            </tr>
					        </tbody>
					    </table>
					</figure>
					<hr>
					<p>参考
					    <br><a href="http://blog.lxx1.com/1578" target="_blank" rel="external">linux下一键安装Docker | 科技爱好者博客</a>
					    <br><a href="https://www.91yun.co/archives/5174" target="_blank" rel="external">Centos/Ubuntu/Debian BBR加速一键安装包 - 91云(91yun.co)</a>
					    <br><a href="http://www.jianshu.com/p/460b4ce4f8e1" target="_blank" rel="external">在Mac上远程登录VPS - 简书</a>
					    <br><a href="https://www.duoluodeyu.com/1114.html" target="_blank" rel="external">Linux配置使用SSH Key登录并禁用root密码登录 | 堕落的鱼</a>
					</p>  
				</div>    
			</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'material-article',
  data () {
    return {
      article: {}
    }
  },
  mounted: function () {
    this.getArticle()
  },
  methods: {
    getArticle: function () {
      this.article = {}
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
  .mdl-card {
      -webkit-box-direction: normal;
      -webkit-box-orient: vertical;
  }
	.mdl-card, a {
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
  .mdl-shadow--4dp {
    box-shadow: 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.2);
  }
	.mdl-cell {
	    box-sizing: border-box;
	}
	.material-layout .mdl-card {
	    display: flex;
	    min-height: 25pc;
	    flex-direction: column;
	    align-items: stretch;
	    border-radius: 2px;
	}
	@media (min-width: 840px){
	    .mdl-cell {
	        margin: 8px;
	        width: calc(33.3333333333% - 16px);
	    }
	    .mdl-cell--12-col {
	        width: calc(100% - 16px);
	    }
	}
	@media (max-width: 839px) and (min-width: 480px){
	    .mdl-cell {
	        margin: 8px;
	        width: calc(50% - 16px);
	    }
	   .mdl-cell--12-col {
	        width: calc(100% - 16px);
	    } 
	}
	@media screen and (max-width: 480px){
	    .material-post_container .mdl-card {
	        margin: 0;
	        width: 100%;
	    }
	    .material-post .mdl-card {
	        border-radius: 0;
	    }
	}
	/**/
	/**/
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
	    background-color: #0097A7 !important;
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
	.material-post_container .material-post>.mdl-card .mdl-card__media {
	    height: 280px;
	}

	.material-post_container .article-headline-p {
	    font-size: 34px;
	    line-height: 40px;
	    font-weight: 400;
	    margin: 0;
	    text-shadow: 1px 1px 8px #444;
	}
	@media screen and (max-width: 840px){
	    .material-post_container .article-headline-p {
	        font-size: 22px;
	    }
	}
	/**/
	/**/
	.mdl-color-text--grey-700 {
	    color: #616161!important;
	}
	.mdl-card__supporting-text {
	    color: rgba(0,0,0,.54);
	    font-size: 13px;
	    line-height: 18px;
	    overflow: hidden;
	    padding: 16px;
	    width: 90%;
	}
	.fade {
	    transition: all 800ms linear;
	    -webkit-transform: translate3d(0,0,0);
	    -moz-transform: translate3d(0,0,0);
	    -ms-transform: translate3d(0,0,0);
	    -o-transform: translate3d(0,0,0);
	    transform: translate3d(0,0,0);
	    opacity: 1;
	}
	#post-content, #post-content p {
	    font-size: 15px;
	    line-height: 1.7;
	    overflow: hidden;
	}
	.material-layout .mdl-card__supporting-text {
	    display: inline;
	    padding: 20px 0 1pc;
	    width: 100%;
	    min-height: 4pc;
	    align-items: center;
	}
	.material-layout .mdl-card__media~.mdl-card__supporting-text {
	    min-height: 4pc;
	}
	.material-layout .mdl-card__supporting-text:not(:last-child) {
	    box-sizing: border-box;
	    min-height: 76px;
	}
	@media screen and (max-width: 480px){
	    #scheme-Paradox .material-layout .mdl-card__supporting-text:not(:last-child) {
	        min-height: 70px;
	    }
	}
	.material-post_container .meta+.mdl-card__supporting-text {
	    display: block;
	    border: 0;
	    flex-direction: column;
	}
	#post-content {
	    max-width: 90%;
	    margin: 1pc auto;
	    padding-top: 0;
	}
	/**/
</style>
