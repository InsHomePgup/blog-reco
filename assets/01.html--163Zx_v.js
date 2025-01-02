import{_ as l,c as t,a as s,b as n,d as i,e as a,o as c,r as d}from"./app-CgYSsB6L.js";const r={},p=a(`<p>在git初始化的时候可以进行一些配置。 我在用的主要的配置有这两个文件。</p><h3 id="gitconfig" tabindex="-1"><a class="header-anchor" href="#gitconfig"><span>.gitconfig</span></a></h3><p>git 核心配置的部分。 下面是我的常用配置,一次配置，以后可以一直使用，这个配置也可以添加到git去管理。 这样在多设备的时候都可以使用这一套配置。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">[core]</span>
<span class="line">    ignorecase = false</span>
<span class="line">	quotepath = false</span>
<span class="line">	excludesfile=C:/Users/user/.gitignore #指定全局的ignore的配置文件</span>
<span class="line">[user]</span>
<span class="line">	email = email</span>
<span class="line">	name = name</span>
<span class="line">[alias]</span>
<span class="line">	ad = add</span>
<span class="line">	br = branch</span>
<span class="line">	cc = checkout --</span>
<span class="line">	cf = config</span>
<span class="line">	ck = checkout</span>
<span class="line">	cm = commit</span>
<span class="line">	cl = clone</span>
<span class="line">	df = diff</span>
<span class="line">	fe = fetch</span>
<span class="line">	ps = push</span>
<span class="line">	me = merge</span>
<span class="line">	pl = pull</span>
<span class="line">	sb = submodule</span>
<span class="line">	ss = status</span>
<span class="line">	sw = switch</span>
<span class="line">	re = remote </span>
<span class="line">	unstage = reset HEAD</span>
<span class="line">	last = log -1</span>
<span class="line">	lg = log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore"><span>.gitignore</span></a></h3><p>全局ignore配置 有些公共的忽略文件可以添加到这里，比如前端常见的dist 和 node_modules</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">dist</span>
<span class="line">node_modules</span>
<span class="line"></span>
<span class="line"># ide相关的ignore可以全局配置，这样省的到每个项目里都去ignore一遍，不过其实最好还是在项目里有自己的gitignore去配置，毕竟还是要多端多设备配置的嘛，不过也可以把配置都用git进行管理。</span>
<span class="line">.idea</span>
<span class="line">.vscode/*</span>
<span class="line">!.vscode/extensions.json</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},v=s("p",null,"初始化必配置的ssh config",-1),m=s("h3",{id:"ssh-config",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ssh-config"},[s("span",null,"~/.ssh/config")])],-1),g=s("p",null,"不算是git的但是很重要一个配置，ssh连接配置,不用账号密码就能拉项目，快乐管理项目。 用一个ssh key 管理所有的git站点，然后就可以快乐的开始push & pull了。",-1),u={href:"https://www.ssh.com/academy/ssh/config",target:"_blank",rel:"noopener noreferrer"},h=a(`<h5 id="github-ssh-挂代理" tabindex="-1"><a class="header-anchor" href="#github-ssh-挂代理"><span>github ssh 挂代理</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">Host github.com</span>
<span class="line">User git</span>
<span class="line">Hostname github.com</span>
<span class="line">IdentityFile ~/.ssh/[你的ssh_key]</span>
<span class="line">ProxyCommand ncat --verbose --proxy-type socks5 --proxy 127.0.0.1:10808 %h %p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(f,_){const e=d("ExternalLinkIcon");return c(),t("div",null,[p,s("p",null,[n("git ignore 文档 "),s("a",o,[n("gitignore"),i(e)])]),v,m,g,s("p",null,[n("参考配置文件 "),s("a",u,[n("ssh client config"),i(e)])]),h])}const k=l(r,[["render",b],["__file","01.html.vue"]]),y=JSON.parse('{"path":"/blogs/Git/Config/01.html","title":"git config 常见配置","lang":"en-US","frontmatter":{"title":"git config 常见配置","categories":["git"]},"headers":[{"level":3,"title":".gitconfig","slug":"gitconfig","link":"#gitconfig","children":[]},{"level":3,"title":".gitignore","slug":"gitignore","link":"#gitignore","children":[]},{"level":3,"title":"~/.ssh/config","slug":"ssh-config","link":"#ssh-config","children":[]}],"git":{"createdTime":1734079809000,"updatedTime":1734660871000,"contributors":[{"name":"abra","email":"git","commits":3},{"name":"Abraham K.","email":"47906083+InsHomePgup@users.noreply.github.com","commits":1}]},"filePathRelative":"blogs/Git/Config/01.md"}');export{k as comp,y as data};
