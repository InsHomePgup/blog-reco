import{_ as e,c as n,o as s,e as a}from"./app-CgYSsB6L.js";const i={},l=a(`<h2 id="开启远程访问" tabindex="-1"><a class="header-anchor" href="#开启远程访问"><span>开启远程访问</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">apt install redis -y</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># redis.conf</span>
<span class="line">cd /etc/redis/</span>
<span class="line">vim redis.conf</span>
<span class="line">bind 127.0.0.1 这里换成bind * -::*</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function d(c,r){return s(),n("div",null,t)}const p=e(i,[["render",d],["__file","Debian anzhuanghepeizhiredis.html.vue"]]),o=JSON.parse('{"path":"/blogs/Linux_Software/Debian anzhuanghepeizhiredis.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"开启远程访问","slug":"开启远程访问","link":"#开启远程访问","children":[]}],"git":{"createdTime":1719224323000,"updatedTime":1725768188000,"contributors":[{"name":"abra","email":"7328234@gmail.com","commits":2},{"name":"InsHomePgup","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/Linux&Software/Debian 安装和配置redis.md"}');export{p as comp,o as data};
