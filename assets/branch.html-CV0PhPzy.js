import{_ as n,o as a,c as s,e}from"./app-DqEpjd1R.js";const i={},t=e(`<p>Git Branch</p><h5 id="创建与切换分支" tabindex="-1"><a class="header-anchor" href="#创建与切换分支"><span>创建与切换分支</span></a></h5><p>git checkout 也有一些分支的操作，更推荐使用switch来切换分支。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token comment"># 切换分支</span>
<span class="token function">git</span> switch <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>

<span class="token function">git</span> checkout <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>

<span class="token comment"># 创建并切换到一个新分支</span>
<span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查看本地分支和远程分支" tabindex="-1"><a class="header-anchor" href="#查看本地分支和远程分支"><span>查看本地分支和远程分支</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 本地</span>
<span class="token function">git</span> branch
<span class="token comment">#远程</span>
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除本地分支和删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除本地分支和删除远程分支"><span>删除本地分支和删除远程分支</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 删除本地分支</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>

<span class="token comment"># 删除远程分支</span>
<span class="token function">git</span> push origin <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>
<span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[t];function l(p,o){return a(),s("div",null,c)}const d=n(i,[["render",l],["__file","branch.html.vue"]]),u=JSON.parse('{"path":"/blogs/Git/Commands/Branch/branch.html","title":"How to use git branch","lang":"en-US","frontmatter":{"title":"How to use git branch","date":"2024/05/09","tags":["git"],"categories":["git"],"sticky":1},"headers":[],"git":{"createdTime":1734419164000,"updatedTime":1734419164000,"contributors":[{"name":"abra","email":"git","commits":1}]},"filePathRelative":"blogs/Git/Commands/Branch/branch.md"}');export{d as comp,u as data};
