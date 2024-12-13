import{_ as n,o as s,c as a,d as t}from"./app-ClyKmoKW.js";const p={},e=t(`<h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>\\</p><h3 id="创建组件" tabindex="-1"><a class="header-anchor" href="#创建组件"><span>创建组件</span></a></h3><blockquote><p>函数组件</p></blockquote><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token punctuation">(</span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token punctuation">)</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">export</span> <span class="token keyword">default</span> App

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类组件</p></blockquote><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token comment">/** 
	1. 组件名称首字母大写 区分组件和普通元素
	2. 继承Component
	3. 实现render函数
	4. 
**/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>  
  
<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token punctuation">(</span>  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
        <span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token comment">/**
	组件取消根元素的一种实现。
**/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">,</span> Fragment<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>  
  
<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token punctuation">(</span>  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">About</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Fragment</span></span><span class="token punctuation">&gt;</span></span>  
        <span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="组件接收数据-props的使用" tabindex="-1"><a class="header-anchor" href="#组件接收数据-props的使用"><span>组件接收数据 props的使用</span></a></h3><blockquote><p>简单值传递</p></blockquote><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token comment">/** 属性传简单值 **/</span>
<span class="token comment">/** 父组件 **/</span>

<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About.tsx&quot;</span><span class="token punctuation">;</span>  
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token punctuation">(</span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token attr-name">name</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">About</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token punctuation">)</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">export</span> <span class="token keyword">default</span> App
<span class="token comment">/**
  自组件
  直接this.props.xxx这样调用props
**/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>  
<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> <span class="token punctuation">(</span>  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                    About  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            
                    </span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
        <span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对象值传递</p></blockquote><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code>
<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About.tsx&quot;</span><span class="token punctuation">;</span>  
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">const</span> personA <span class="token operator">=</span> <span class="token punctuation">{</span>  
        name<span class="token operator">:</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>  
        age<span class="token operator">:</span><span class="token number">20</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">return</span> <span class="token punctuation">(</span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>personA<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">About</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token punctuation">)</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">export</span> <span class="token keyword">default</span> App


<span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>  
<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span>age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token punctuation">(</span>  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                    About  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                    </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token plain-text">  
                    </span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
        <span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token comment">/**
	函数组件的props
	这里我们在组件引用的地方使用属性赋值一个title
**/</span>

<span class="token keyword">import</span> About <span class="token keyword">from</span> <span class="token string">&quot;./components/About.tsx&quot;</span><span class="token punctuation">;</span>  
  
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span>props<span class="token operator">:</span> <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">const</span> <span class="token punctuation">{</span>title<span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>  
    <span class="token keyword">const</span> personA <span class="token operator">=</span> <span class="token punctuation">{</span>  
        name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>  
        age<span class="token operator">:</span> <span class="token number">20</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">return</span> <span class="token punctuation">(</span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>personA<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">About</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token punctuation">)</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">export</span> <span class="token keyword">default</span> App

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props-设置默认值" tabindex="-1"><a class="header-anchor" href="#props-设置默认值"><span>props 设置默认值</span></a></h3><p>\\</p><blockquote><p>函数组件默认值以及参数校验</p></blockquote><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code>  
<span class="token comment">// 这里定义类型  </span>
<span class="token keyword">interface</span> <span class="token class-name">props</span><span class="token punctuation">{</span>  
    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  
  
<span class="token comment">// 这里初始化默认值  </span>
<span class="token keyword">function</span> <span class="token function">Home</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title <span class="token operator">=</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">}</span><span class="token operator">:</span> props<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> <span class="token punctuation">(</span>  
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token punctuation">{</span>title<span class="token punctuation">}</span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token punctuation">)</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">export</span> <span class="token keyword">default</span> Home

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>类组件默认值以及参数校验</p></blockquote><div class="language-tsx line-numbers-mode" data-ext="tsx" data-title="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>  
<span class="token comment">// 这里声明Props的类型</span>
<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>  
    name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>  
    age<span class="token operator">:</span> <span class="token builtin">number</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">class</span> <span class="token class-name">About</span> <span class="token keyword">extends</span> <span class="token class-name">Component<span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>  
<span class="token comment">// 这里给Props赋默认值</span>
    <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>  
        name<span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>  
        age<span class="token operator">:</span> <span class="token number">100</span>  
    <span class="token punctuation">}</span>  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">const</span> <span class="token punctuation">{</span>name<span class="token punctuation">,</span> age<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>  
        <span class="token keyword">return</span> <span class="token punctuation">(</span>  
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                    About  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
                    </span><span class="token punctuation">{</span>name<span class="token punctuation">}</span><span class="token plain-text">  
                    </span><span class="token punctuation">{</span>age<span class="token punctuation">}</span><span class="token plain-text">  
                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
        <span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),l=[e];function o(c,i){return s(),a("div",null,l)}const k=n(p,[["render",o],["__file","react02.html.vue"]]),d=JSON.parse('{"path":"/blogs/FrontEnd/React/react02.html","title":"React02 组件的使用","lang":"en-US","frontmatter":{"title":"React02 组件的使用","date":"2024/06/06","tags":["react","jsx","tsx"],"categories":["react"]},"headers":[{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"创建组件","slug":"创建组件","link":"#创建组件","children":[]},{"level":3,"title":"组件接收数据 props的使用","slug":"组件接收数据-props的使用","link":"#组件接收数据-props的使用","children":[]},{"level":3,"title":"props 设置默认值","slug":"props-设置默认值","link":"#props-设置默认值","children":[]}]}],"git":{"createdTime":1719224950000,"updatedTime":1719224950000,"contributors":[{"name":"InsHomePgup","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/FrontEnd/React/react02.md"}');export{k as comp,d as data};
