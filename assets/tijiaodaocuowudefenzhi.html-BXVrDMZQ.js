import{_ as s,c as n,o as a,e}from"./app-CgYSsB6L.js";const i={},l=e(`<h4 id="本地提交错分支的时候" tabindex="-1"><a class="header-anchor" href="#本地提交错分支的时候"><span>本地提交错分支的时候</span></a></h4><h5 id="有一个场景是有时候紧急fix但是提交到了错误分支。" tabindex="-1"><a class="header-anchor" href="#有一个场景是有时候紧急fix但是提交到了错误分支。"><span>有一个场景是有时候紧急fix但是提交到了错误分支。</span></a></h5><h6 id="使用reset-soft把内容退回到工作区。" tabindex="-1"><a class="header-anchor" href="#使用reset-soft把内容退回到工作区。"><span>使用reset soft把内容退回到工作区。</span></a></h6><p>方案一：</p><p>reset + stash reset 还原代码到工作区，stash暂存代码，切换到正确的分支以后再把stash代码回归到工作区。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"> <span class="token comment"># 回退到上个版本，并且把修改的内容回到工作区</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> reset HEAD^ <span class="token parameter variable">--soft</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">#暂存当前的所有修改，tree clean</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> stash save zero</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 确认等会儿需要恢复的stash</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> stash list</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> switch target</span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> stash pop <span class="token number">0</span> <span class="token comment"># apply &amp; drop</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> commit <span class="token parameter variable">-am</span> <span class="token string">&#39;feat:...&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方案二：</p><p>正确的分支使用cherry-pick，合并提交错误的那一次commit。 在错误的分支上</p><h4 id="远程提交错分支" tabindex="-1"><a class="header-anchor" href="#远程提交错分支"><span>远程提交错分支</span></a></h4><p>提交到远程了以后要覆盖commit 只能是push -f了。 本地已经是提交到错误的分支了，然后又推送到远程的情况下。</p>`,10),t=[l];function c(p,r){return a(),n("div",null,t)}const o=s(i,[["render",c],["__file","tijiaodaocuowudefenzhi.html.vue"]]),m=JSON.parse('{"path":"/blogs/Git/Skills/Commit/tijiaodaocuowudefenzhi.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1734079809000,"updatedTime":1734402116000,"contributors":[{"name":"abra","email":"git","commits":2}]},"filePathRelative":"blogs/Git/Skills/Commit/提交到错误的分支.md"}');export{o as comp,m as data};
