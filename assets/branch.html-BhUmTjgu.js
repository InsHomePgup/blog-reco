import{_ as n,c as s,o as a,e}from"./app-CgYSsB6L.js";const i={},l=e(`<p>Git Branch</p><h5 id="创建与切换分支" tabindex="-1"><a class="header-anchor" href="#创建与切换分支"><span>创建与切换分支</span></a></h5><p>git checkout 也有一些分支的操作，更推荐使用switch来切换分支。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 切换分支</span></span>
<span class="line"><span class="token function">git</span> switch <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> checkout <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建并切换到一个新分支</span></span>
<span class="line"><span class="token function">git</span> switch <span class="token parameter variable">-c</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查看本地分支和远程分支" tabindex="-1"><a class="header-anchor" href="#查看本地分支和远程分支"><span>查看本地分支和远程分支</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看本地分支</span></span>
<span class="line"><span class="token function">git</span> branch</span>
<span class="line"></span>
<span class="line"><span class="token comment">#查看远程分支  -r remote</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-r</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看全部分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-a</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="删除本地分支和删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除本地分支和删除远程分支"><span>删除本地分支和删除远程分支</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 删除本地分支</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 强制删除分支，未合并的分支也会删除</span></span>
<span class="line"><span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除远程分支</span></span>
<span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">-d</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> push origin <span class="token parameter variable">--delete</span> <span class="token punctuation">[</span>branchName<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除远程已经删除但是本地还存在的分支</span></span>
<span class="line"><span class="token function">git</span> remote prune origin</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="重命名分支" tabindex="-1"><a class="header-anchor" href="#重命名分支"><span>重命名分支</span></a></h5><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> sw <span class="token parameter variable">-c</span> feat/A</span>
<span class="line"><span class="token comment"># Switched to a new branch &#39;feat/A&#39;</span></span>
<span class="line"><span class="token function">git</span> br <span class="token parameter variable">-m</span> feat/A feat/B</span>
<span class="line"></span>
<span class="line"><span class="token comment"># move  -m 类似linux下的mv 重命名</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[l];function t(p,r){return a(),s("div",null,c)}const o=n(i,[["render",t],["__file","branch.html.vue"]]),m=JSON.parse('{"path":"/blogs/Git/Commands/Branch/branch.html","title":"How to use git branch","lang":"en-US","frontmatter":{"title":"How to use git branch","date":"2024/05/09","tags":["git"],"categories":["git"],"sticky":1},"headers":[],"git":{"createdTime":1734332807000,"updatedTime":1735782410000,"contributors":[{"name":"GeekAb","email":"47906083+InsHomePgup@users.noreply.github.com","commits":3},{"name":"abra","email":"git","commits":1}]},"filePathRelative":"blogs/Git/Commands/Branch/branch.md"}');export{o as comp,m as data};
