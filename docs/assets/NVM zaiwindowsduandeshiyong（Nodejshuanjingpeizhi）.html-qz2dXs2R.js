import{_ as a,r as o,o as r,c as t,a as e,e as s,b as i,d}from"./app-ClyKmoKW.js";const l={},m=e("p",null,"记录一下我的日常 从官网下载nodejs 并安装",-1),c={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"下载nvm 并安装",-1),v={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},u=d(`<p>配置nvm的node源和npm源</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 腾讯</span>
nvm npm_mirror http://mirrors.cloud.tencent.com/npm/
nvm node_mirror https://mirrors.cloud.tencent.com/nodejs-release/

<span class="token comment"># 阿里</span>
nvm npm_mirror https://npmmirror.com/mirrors/npm/
nvm node_mirror https://npmmirror.com/mirrors/node/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 顺便设置一下腾讯的npm源</span>

<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://mirrors.cloud.tencent.com/npm/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(_,b){const n=o("ExternalLinkIcon");return r(),t("div",null,[m,e("p",null,[e("a",c,[s("nodejs"),i(n)])]),p,e("p",null,[e("a",v,[s("nvm"),i(n)])]),u])}const N=a(l,[["render",h],["__file","NVM zaiwindowsduandeshiyong（Nodejshuanjingpeizhi）.html.vue"]]),f=JSON.parse('{"path":"/blogs/Nodejs/NVM/NVM zaiwindowsduandeshiyong（Nodejshuanjingpeizhi）.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1727182454000,"updatedTime":1727182454000,"contributors":[{"name":"abra","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/Nodejs/NVM/NVM 在windows端的使用（Nodejs环境配置）.md"}');export{N as comp,f as data};
