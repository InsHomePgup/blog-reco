import{_ as n,o as s,c as e,d as a}from"./app-ClyKmoKW.js";const i={},l=a(`<p>配置好了 nvm 以及对应的 node 源以后可以快乐的使用各个版本的 nodejs 了。 nvm 在不同的平台上表现还是不一样的。 Windows use 以后在后续的终端里也是会维持之前的版本。 Mac 这边需要单独配置以后才能设为默认版本，不然都会使用默认版本。</p><p>不得不说近几年的 nodejs 版本有点像 java 的版本一样，疯狂的升级，不过我印象里之前最坚挺的还是 node16 的版本。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
nvm <span class="token function">install</span> <span class="token number">22</span>  <span class="token comment">#安装 nodejs 22 版本</span>
nvm <span class="token function">install</span> <span class="token number">20</span> <span class="token comment"># 安装 20 的版本</span>

nvm ls-remote <span class="token comment"># 查看远程的所有版本</span>

nvm <span class="token builtin class-name">alias</span> default <span class="token number">18</span> <span class="token comment"># 设置默认的版本，终端的默认版本</span>

nvm use <span class="token number">20</span> <span class="token comment"># 使用 20 的版本</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function c(d,o){return s(),e("div",null,t)}const r=n(i,[["render",c],["__file","NVMdejiandanshiyong.html.vue"]]),p=JSON.parse('{"path":"/blogs/Nodejs/NVM/NVMdejiandanshiyong.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"createdTime":1727182454000,"updatedTime":1727182454000,"contributors":[{"name":"abra","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/Nodejs/NVM/NVM的简单使用.md"}');export{r as comp,p as data};
