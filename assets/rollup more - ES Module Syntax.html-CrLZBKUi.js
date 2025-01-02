import{_ as n,c as s,o as a,e}from"./app-CgYSsB6L.js";const l={},i=e(`<p>ES6 - ECMAScript 2015 的导入导出的一些方法。</p><h3 id="named-imports" tabindex="-1"><a class="header-anchor" href="#named-imports"><span>Named Imports</span></a></h3><p>具名的导入导出</p><p>这里是针对单个变量，或者函数的导入导出。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line">export const numA = 2;</span>
<span class="line"></span>
<span class="line">export function sum(){  </span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">import {numA,sum} from &quot;./foo.ts&quot;;</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="namespace-imports" tabindex="-1"><a class="header-anchor" href="#namespace-imports"><span>Namespace Imports</span></a></h3><p>命名空间导入导出</p><p>首先我们有一个foo.ts</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  </span>
<span class="line">export const numA = 2;  </span>
<span class="line">  </span>
<span class="line">export function sum(){  </span>
<span class="line">  </span>
<span class="line">}  </span>
<span class="line">  </span>
<span class="line">const abc = 5;  </span>
<span class="line">  </span>
<span class="line">export default &#39;hello world!&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There have three exports , two named exports, one default export.</p><p>Now , let&#39;s show the fooModule.</p><p>使用命名空间导入。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">import * as fooModule from &#39;./foo.ts&#39;;</span>
<span class="line"></span>
<span class="line">console.log(fooModule)</span>
<span class="line">[Module: null prototype] {</span>
<span class="line">  __esModule: true,</span>
<span class="line">  default: &#39;hello world!&#39;,</span>
<span class="line">  numA: 2,</span>
<span class="line">  sum: [Function: sum]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只能看到被exports的内容。</p><h3 id="default-import" tabindex="-1"><a class="header-anchor" href="#default-import"><span>Default Import</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// foo.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token string">&#39;hello world!&#39;</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token keyword">import</span> foo <span class="token keyword">from</span> <span class="token string">&#39;./foo.ts&#39;</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span> <span class="token comment">// hello world!</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>只能拿到default 关键字导出的内容。</p><h3 id="dynamic-import" tabindex="-1"><a class="header-anchor" href="#dynamic-import"><span>Dynamic Import</span></a></h3><p>需在rollup config内开启一个配置</p><img src="https://raw.githubusercontent.com/InsHomePgup/pic_go_img/main/blog/20241220133147887.png" width="50%"><p>nodejs 的commonjs 是不支持动态import导入的 去package.json开启type = module</p><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre><code><span class="line"><span class="token comment">// main.ts</span></span>
<span class="line"><span class="token comment">// 还是加载之前的foo.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  </span>
<span class="line">    <span class="token keyword">try</span><span class="token punctuation">{</span>  </span>
<span class="line">        <span class="token keyword">const</span> fooModule <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./foo.ts&#39;</span><span class="token punctuation">)</span>  </span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooModule<span class="token punctuation">)</span>  </span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;import module error &quot;</span><span class="token punctuation">)</span>  </span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">}</span>  </span>
<span class="line"><span class="token function">loadFoo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  </span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Abc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">打印出来的模块</span>
<span class="line">[Module: null prototype] {</span>
<span class="line">  default: &#39;hello world!&#39;,</span>
<span class="line">  numA: 2,</span>
<span class="line">  sum: [Function: sum]</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[i];function p(o,c){return a(),s("div",null,t)}const r=n(l,[["render",p],["__file","rollup more - ES Module Syntax.html.vue"]]),u=JSON.parse('{"path":"/blogs/FrontEnd/Rollup/rollup more - ES Module Syntax.html","title":"rollup more - ES Module Syntax ES6导入导出方法","lang":"en-US","frontmatter":{"title":"rollup more - ES Module Syntax ES6导入导出方法","tags":["ES6","rollup"],"categories":["JavaScript"]},"headers":[{"level":3,"title":"Named Imports","slug":"named-imports","link":"#named-imports","children":[]},{"level":3,"title":"Namespace Imports","slug":"namespace-imports","link":"#namespace-imports","children":[]},{"level":3,"title":"Default Import","slug":"default-import","link":"#default-import","children":[]},{"level":3,"title":"Dynamic Import","slug":"dynamic-import","link":"#dynamic-import","children":[]}],"git":{"createdTime":1734673896000,"updatedTime":1734673896000,"contributors":[{"name":"Abraham K.","email":"47906083+InsHomePgup@users.noreply.github.com","commits":1}]},"filePathRelative":"blogs/FrontEnd/Rollup/rollup more - ES Module Syntax.md"}');export{r as comp,u as data};
