import{_ as a,r as e,o as i,c as t,a as n,b as l,d as o,e as r}from"./app-BlhvexKe.js";const d={},c={href:"https://mariadb.org/download/?t=repo-config&d=Debian+12+%22Bookworm%22&v=10.11&r_m=xtom_fre",target:"_blank",rel:"noopener noreferrer"},p=r(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 更新一下apt</span>

<span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> upgrade <span class="token parameter variable">-y</span>

<span class="token comment"># 初始化内容</span>

<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> apt-transport-https <span class="token function">curl</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/apt/keyrings
<span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/apt/keyrings/mariadb-keyring.pgp <span class="token string">&#39;https://mariadb.org/mariadb_release_signing_key.pgp&#39;</span>

<span class="token comment"># apt没有自带mariadb需要写入存储库</span>

<span class="token function">vim</span> /etc/apt/sources.list.d/mariadb.sources

<span class="token comment"># 写入以下内容</span>

<span class="token comment"># MariaDB 10.11 repository list - created 2024-06-15 06:06 UTC</span>
<span class="token comment"># [https://mariadb.org/download/](https://mariadb.org/download/)</span>
X-Repolib-Name: MariaDB
Types: deb
<span class="token comment"># deb.mariadb.org is a dynamic mirror if your preferred mirror goes offline. See [https://mariadb.org/mirrorbits/](https://mariadb.org/mirrorbits/) for details.</span>
<span class="token comment"># URIs: [https://deb.mariadb.org/10.11/debian](https://deb.mariadb.org/10.11/debian)</span>
URIs: <span class="token punctuation">[</span>https://mirrors.xtom.com/mariadb/repo/10.11/debian<span class="token punctuation">]</span><span class="token punctuation">(</span>https://mirrors.xtom.com/mariadb/repo/10.11/debian<span class="token punctuation">)</span>
Suites: bookworm
Components: main
Signed-By: /etc/apt/keyrings/mariadb-keyring.pgp

<span class="token comment"># 阿里云的源</span>
<span class="token comment"># MariaDB 10.11 repository list - created 2024-08-01 14:43 UTC</span>
<span class="token comment"># [https://mariadb.org/download/](https://mariadb.org/download/)</span>
X-Repolib-Name: MariaDB
Types: deb
<span class="token comment"># deb.mariadb.org is a dynamic mirror if your preferred mirror goes offline. See [https://mariadb.org/mirrorbits/](https://mariadb.org/mirrorbits/) for details.</span>
<span class="token comment"># URIs: [https://deb.mariadb.org/10.11/debian](https://deb.mariadb.org/10.11/debian)</span>
URIs: <span class="token punctuation">[</span>https://mirrors.aliyun.com/mariadb/repo/10.11/debian<span class="token punctuation">]</span><span class="token punctuation">(</span>https://mirrors.aliyun.com/mariadb/repo/10.11/debian<span class="token punctuation">)</span>
Suites: bookworm
Components: main
Signed-By: /etc/apt/keyrings/mariadb-keyring.pgp

<span class="token comment"># 开始安装:</span>

<span class="token function">sudo</span> <span class="token function">apt</span> update
<span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> mariadb-server


<span class="token comment"># 安装完成以后开始初始化</span>


mysql_secure_installation

Enter current password <span class="token keyword">for</span> root <span class="token punctuation">(</span>enter <span class="token keyword">for</span> none<span class="token punctuation">)</span>: <span class="token comment"># 当前的root 密码 默认root密码为空直接回车即可</span>
Switch to unix_socket authentication <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> <span class="token comment">#是否使用unix_socket验证，建议否</span>
Set root password? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span>  <span class="token comment">#是否设置新的root密码</span>
New password: <span class="token comment">#输入新密码</span>
Re-enter new password: <span class="token comment">#确认密码</span>
Remove anonymous users? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span>  <span class="token comment">#是否移除匿名用户</span>
Disallow root login remotely? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> <span class="token comment">#是否启用root用户的远程访问</span>
Remove <span class="token builtin class-name">test</span> database and access to it? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> <span class="token comment">#是否删除测试数据库</span>
Reload privilege tables now? <span class="token punctuation">[</span>Y/n<span class="token punctuation">]</span> <span class="token comment">#是否立即刷新数据库配置</span>
Thanks <span class="token keyword">for</span> using MariaDB<span class="token operator">!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开启远程访问" tabindex="-1"><a class="header-anchor" href="#开启远程访问"><span>开启远程访问</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 登录</span>
mysql 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
grant all privileges on *.* to root@<span class="token string">&quot;%&quot;</span> identified by <span class="token string">&quot;pwd&quot;</span> with grant option<span class="token punctuation">;</span> flush privileges<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启配置中的远程连接" tabindex="-1"><a class="header-anchor" href="#开启配置中的远程连接"><span>开启配置中的远程连接</span></a></h3><p>vim /etc/mysql/mariadb.conf.d/50-server.cnf</p><p>bind-address = 127.0.0.1</p><p>修改成</p><p>bind-address = 0.0.0.0</p><h2 id="创建一个用户来远程访问" tabindex="-1"><a class="header-anchor" href="#创建一个用户来远程访问"><span>创建一个用户来远程访问</span></a></h2><div class="language-mysql line-numbers-mode" data-ext="mysql" data-title="mysql"><pre class="language-mysql"><code>
create user &#39;username&#39;@&#39;%&#39; identified by &#39;password&#39;;
grant all on database.* to &#39;username&#39;@&#39;%&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function m(u,v){const s=e("ExternalLinkIcon");return i(),t("div",null,[n("p",null,[n("a",c,[l("参考网站"),o(s)])]),p])}const k=a(d,[["render",m],["__file","DebiananzhuanghepeizhiMariadb.html.vue"]]),h=JSON.parse('{"path":"/blogs/Linux_Software/Mariadb/DebiananzhuanghepeizhiMariadb.html","title":"Debian安装和配置Mariadb","lang":"en-US","frontmatter":{"title":"Debian安装和配置Mariadb","categories":["mariadb"],"tags":["mariadb"],"date":"2024/05/28"},"headers":[{"level":2,"title":"开启远程访问","slug":"开启远程访问","link":"#开启远程访问","children":[{"level":3,"title":"开启配置中的远程连接","slug":"开启配置中的远程连接","link":"#开启配置中的远程连接","children":[]}]},{"level":2,"title":"创建一个用户来远程访问","slug":"创建一个用户来远程访问","link":"#创建一个用户来远程访问","children":[]}],"git":{"createdTime":1725768188000,"updatedTime":1725768188000,"contributors":[{"name":"abra","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/Linux&Software/Mariadb/Debian安装和配置Mariadb.md"}');export{k as comp,h as data};
