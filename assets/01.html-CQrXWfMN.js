import{_ as l,r as a,o as d,c as r,a as e,b as i,d as s,e as t}from"./app-DqEpjd1R.js";const c={},o=t(`<p>在git初始化的时候可以进行一些配置。 我在用的主要的配置有这两个文件。</p><h3 id="gitconfig" tabindex="-1"><a class="header-anchor" href="#gitconfig"><span>.gitconfig</span></a></h3><p>git 核心配置的部分。 下面是我的常用配置,一次配置，以后可以一直使用，这个配置也可以添加到git去管理。 这样在多设备的时候都可以使用这一套配置。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
[core]
    ignorecase = false
	quotepath = false
	excludesfile=C:/Users/user/.gitignore #指定全局的ignore的配置文件
[user]
	email = git
	name = abra
[alias]
	ad = add
	br = branch
	cc = checkout --
	cf = config
	ck = checkout
	cm = commit
	cl = clone
	df = diff
	fe = fetch
	ps = push
	me = merge
	pl = pull
	sb = submodule
	ss = status
	sw = switch
	re = remote 
	unstage = reset HEAD
	last = log -1
	lg = log --color --graph --pretty=format:&#39;%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset&#39; --abbrev-commit


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gitignore" tabindex="-1"><a class="header-anchor" href="#gitignore"><span>.gitignore</span></a></h3><p>全局ignore配置 有些公共的忽略文件可以添加到这里，比如前端常见的dist 和 node_modules</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
dist
node_modules

# ide相关的ignore可以全局配置，这样省的到每个项目里都去ignore一遍，不过其实最好还是在项目里有自己的gitignore去配置，毕竟还是要多端多设备配置的嘛，不过也可以把配置都用git进行管理。
.idea
.vscode/*
!.vscode/extensions.json

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v={href:"https://git-scm.com/docs/gitignore",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"初始化必配置的ssh config",-1),u=e("h3",{id:"ssh-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ssh-config"},[e("span",null,"~/.ssh/config")])],-1),m=e("p",null,"不算是git的但是很重要一个配置，ssh连接配置,不用账号密码就能拉项目，快乐管理项目。 用一个ssh key 管理所有的git站点，然后就可以快乐的开始push & pull了。",-1),b={href:"https://www.ssh.com/academy/ssh/config",target:"_blank",rel:"noopener noreferrer"},h=t(`<h5 id="github-ssh-挂代理" tabindex="-1"><a class="header-anchor" href="#github-ssh-挂代理"><span>github ssh 挂代理</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>
Host github.com
User git
Hostname github.com
IdentityFile ~/.ssh/[你的ssh_key]
ProxyCommand ncat --verbose --proxy-type socks5 --proxy 127.0.0.1:10808 %h %p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function p(f,_){const n=a("ExternalLinkIcon");return d(),r("div",null,[o,e("p",null,[i("git ignore 文档 "),e("a",v,[i("gitignore"),s(n)])]),g,u,m,e("p",null,[i("参考配置文件 "),e("a",b,[i("ssh client config"),s(n)])]),h])}const k=l(c,[["render",p],["__file","01.html.vue"]]),C=JSON.parse('{"path":"/blogs/Git/Config/01.html","title":"git config 常见配置","lang":"en-US","frontmatter":{"title":"git config 常见配置","categories":["git"]},"headers":[{"level":3,"title":".gitconfig","slug":"gitconfig","link":"#gitconfig","children":[]},{"level":3,"title":".gitignore","slug":"gitignore","link":"#gitignore","children":[]},{"level":3,"title":"~/.ssh/config","slug":"ssh-config","link":"#ssh-config","children":[]}],"git":{"createdTime":1734079809000,"updatedTime":1734317363000,"contributors":[{"name":"abra","email":"git","commits":3}]},"filePathRelative":"blogs/Git/Config/01.md"}');export{k as comp,C as data};
