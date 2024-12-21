import{_ as a,o as e,c as n,e as s}from"./app-ni5seZb4.js";const i={},t=s(`<h3 id="推送本地所有tags" tabindex="-1"><a class="header-anchor" href="#推送本地所有tags"><span>推送本地所有tags</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push origin --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看" tabindex="-1"><a class="header-anchor" href="#查看"><span>查看</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加" tabindex="-1"><a class="header-anchor" href="#添加"><span>添加</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 给当前commit 添加tag</span>
<span class="token function">git</span> tag v1.0.0

<span class="token comment"># 给历史commit 添加tag</span>

<span class="token function">git</span> tag v0.0.1 <span class="token punctuation">[</span>commitId<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除本地" tabindex="-1"><a class="header-anchor" href="#删除本地"><span>删除本地</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除远程" tabindex="-1"><a class="header-anchor" href="#删除远程"><span>删除远程</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin :refs/tags/v1.0.0
<span class="token comment"># 删除的时候git push [目标仓库名称] :refs/tags/[标签名称]  这里的refs 和tags后面都有s</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="切换到一个tag所在的commit" tabindex="-1"><a class="header-anchor" href="#切换到一个tag所在的commit"><span>切换到一个tag所在的commit</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout v0.0.1

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="得到了一些提示" tabindex="-1"><a class="header-anchor" href="#得到了一些提示"><span>得到了一些提示</span></a></h5><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Note: switching to &#39;v0.0.1&#39;.

You are in &#39;detached HEAD&#39; state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c &lt;new-branch-name&gt;

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 625ec7f 提交git练习记录文件

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="把这个tag所在的这次-commit-变成一个分支" tabindex="-1"><a class="header-anchor" href="#把这个tag所在的这次-commit-变成一个分支"><span>把这个tag所在的这次 commit 变成一个分支</span></a></h4><p>毕竟分支更好操作，现在我们已经在一个游离状态，那么，去创建一个分支。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> switch <span class="token parameter variable">-c</span> tag-temp
\`\`\`x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),d=[t];function l(c,r){return e(),n("div",null,d)}const m=a(i,[["render",l],["__file","01.html.vue"]]),v=JSON.parse('{"path":"/blogs/Git/Skills/Tag/01/01.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"推送本地所有tags","slug":"推送本地所有tags","link":"#推送本地所有tags","children":[]}],"git":{"createdTime":1734342707000,"updatedTime":1734342707000,"contributors":[{"name":"abra","email":"git","commits":1}]},"filePathRelative":"blogs/Git/Skills/Tag/01/01.md"}');export{m as comp,v as data};
