import{_ as s,o as e,c as a,e as t}from"./app-DqEpjd1R.js";const i={},n=t(`<h3 id="stash-的应用2" tabindex="-1"><a class="header-anchor" href="#stash-的应用2"><span>stash 的应用2</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git stash push # 替代save的命令
git stash branch [newBranchName] [stashName] # 创建一个新分支并且把stash应用到新分支上

git stash clear # 慎用！清除当前本地的所有stash，因为stash仅存在于本地也不是一次commit，所以如果清除的话，就等于放弃了stash的所有更改。

git stash drop [stashName | stashNumber] # 删除指定的stash

## 两个脚本命令
git stash create
git stash store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[n];function d(r,c){return e(),a("div",null,l)}const m=s(i,[["render",d],["__file","02.html.vue"]]),o=JSON.parse('{"path":"/blogs/Git/Commands/Stash/02/02.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"stash 的应用2","slug":"stash-的应用2","link":"#stash-的应用2","children":[]}],"git":{"createdTime":1734419164000,"updatedTime":1734419164000,"contributors":[{"name":"abra","email":"git","commits":1}]},"filePathRelative":"blogs/Git/Commands/Stash/02/02.md"}');export{m as comp,o as data};
