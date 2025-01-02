import{_ as s,c as a,o as n,e}from"./app-CgYSsB6L.js";const i={},l=e(`<h3 id="推送本地所有tags" tabindex="-1"><a class="header-anchor" href="#推送本地所有tags"><span>推送本地所有tags</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git push origin --tags</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="查看" tabindex="-1"><a class="header-anchor" href="#查看"><span>查看</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> tag</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="添加" tabindex="-1"><a class="header-anchor" href="#添加"><span>添加</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 给当前commit 添加tag</span></span>
<span class="line"><span class="token function">git</span> tag v1.0.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 给历史commit 添加tag</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> tag v0.0.1 <span class="token punctuation">[</span>commitId<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除本地" tabindex="-1"><a class="header-anchor" href="#删除本地"><span>删除本地</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> tag <span class="token parameter variable">-d</span> v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="删除远程" tabindex="-1"><a class="header-anchor" href="#删除远程"><span>删除远程</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> push origin :refs/tags/v1.0.0</span>
<span class="line"><span class="token comment"># 删除的时候git push [目标仓库名称] :refs/tags/[标签名称]  这里的refs 和tags后面都有s</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="切换到一个tag所在的commit" tabindex="-1"><a class="header-anchor" href="#切换到一个tag所在的commit"><span>切换到一个tag所在的commit</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> checkout v0.0.1</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="得到了一些提示" tabindex="-1"><a class="header-anchor" href="#得到了一些提示"><span>得到了一些提示</span></a></h5><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Note: switching to &#39;v0.0.1&#39;.</span>
<span class="line"></span>
<span class="line">You are in &#39;detached HEAD&#39; state. You can look around, make experimental</span>
<span class="line">changes and commit them, and you can discard any commits you make in this</span>
<span class="line">state without impacting any branches by switching back to a branch.</span>
<span class="line"></span>
<span class="line">If you want to create a new branch to retain commits you create, you may</span>
<span class="line">do so (now or later) by using -c with the switch command. Example:</span>
<span class="line"></span>
<span class="line">  git switch -c &lt;new-branch-name&gt;</span>
<span class="line"></span>
<span class="line">Or undo this operation with:</span>
<span class="line"></span>
<span class="line">  git switch -</span>
<span class="line"></span>
<span class="line">Turn off this advice by setting config variable advice.detachedHead to false</span>
<span class="line"></span>
<span class="line">HEAD is now at 625ec7f 提交git练习记录文件</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="把这个tag所在的这次-commit-变成一个分支" tabindex="-1"><a class="header-anchor" href="#把这个tag所在的这次-commit-变成一个分支"><span>把这个tag所在的这次 commit 变成一个分支</span></a></h4><p>毕竟分支更好操作，现在我们已经在一个游离状态，那么，去创建一个分支。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">git</span> switch <span class="token parameter variable">-c</span> tag-temp</span>
<span class="line">\`\`\`x</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),t=[l];function c(d,r){return n(),a("div",null,t)}const m=s(i,[["render",c],["__file","01.html.vue"]]),o=JSON.parse('{"path":"/blogs/Git/Skills/Tag/01/01.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"推送本地所有tags","slug":"推送本地所有tags","link":"#推送本地所有tags","children":[]}],"git":{"createdTime":1734079809000,"updatedTime":1734342707000,"contributors":[{"name":"abra","email":"git","commits":1}]},"filePathRelative":"blogs/Git/Skills/Tag/01/01.md"}');export{m as comp,o as data};
