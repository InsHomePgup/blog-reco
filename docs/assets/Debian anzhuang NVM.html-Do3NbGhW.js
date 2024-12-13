import{_ as n,o as e,c as s,e as a}from"./app-BlhvexKe.js";const i={},t=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>

<span class="token function">apt</span> <span class="token function">install</span> build-essential libssl-dev 

<span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh <span class="token operator">|</span> <span class="token function">bash</span> 
<span class="token function">curl</span> -o- https://gitee.com/inshomepgup/linux_-auto_-script/raw/main/installNVM.sh <span class="token operator">|</span> <span class="token function">bash</span> 





<span class="token builtin class-name">source</span> ~/.bashrc

<span class="token comment">## 最后打开一个新的终端</span>
<span class="token comment">## 执行</span>

<span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> nvm 

<span class="token comment">## 如果成功安装就会输出 nvm</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>云服务器安装 nodejs 的过程真的是艰苦，用镜像源就好多了</p><p>安装完 nvm 以后去设置一下 node 镜像</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>NVM_NODEJS_ORG_MIRROR=http://mirrors.cloud.tencent.com/nodejs-release/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置好镜像以后再去安装 nodejs</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nvm install 20 
nvm install 16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>顺便设置一下 npm 的镜像。。。为了后续使用</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
npm config set registry http://mirrors.cloud.tencent.com/npm/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[t];function d(c,r){return e(),s("div",null,l)}const o=n(i,[["render",d],["__file","Debian anzhuang NVM.html.vue"]]),v=JSON.parse('{"path":"/blogs/Linux_Software/Debian anzhuang NVM.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1722071631000,"updatedTime":1734012152000,"contributors":[{"name":"abra","email":"7328234@gmail.com","commits":3},{"name":"InsHomePgup","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/Linux&Software/Debian 安装 NVM.md"}');export{o as comp,v as data};
