import{_ as i,c as l,a as n,b as e,d as a,e as r,o as t,r as o}from"./app-CgYSsB6L.js";const d={},c=n("p",null,"记录一下我的日常 从官网下载nodejs 并安装",-1),m={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},p=n("p",null,"下载nvm 并安装",-1),u={href:"https://github.com/coreybutler/nvm-windows",target:"_blank",rel:"noopener noreferrer"},v=r(`<p>配置nvm的node源和npm源</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 腾讯</span></span>
<span class="line">nvm npm_mirror http://mirrors.cloud.tencent.com/npm/</span>
<span class="line">nvm node_mirror https://mirrors.cloud.tencent.com/nodejs-release/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 阿里</span></span>
<span class="line">nvm npm_mirror https://npmmirror.com/mirrors/npm/</span>
<span class="line">nvm node_mirror https://npmmirror.com/mirrors/node/</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 顺便设置一下腾讯的npm源</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://mirrors.cloud.tencent.com/npm/</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(_,b){const s=o("ExternalLinkIcon");return t(),l("div",null,[c,n("p",null,[n("a",m,[e("nodejs"),a(s)])]),p,n("p",null,[n("a",u,[e("nvm"),a(s)])]),v])}const N=i(d,[["render",h],["__file","NVM zaiwindowsduandeshiyong（Nodejshuanjingpeizhi）.html.vue"]]),j=JSON.parse('{"path":"/blogs/Nodejs/NVM/NVM zaiwindowsduandeshiyong（Nodejshuanjingpeizhi）.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1724033054000,"updatedTime":1727182454000,"contributors":[{"name":"abra","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/Nodejs/NVM/NVM 在windows端的使用（Nodejs环境配置）.md"}');export{N as comp,j as data};
