import{_ as i,c as l,a as s,b as n,d as e,e as t,o as p,r as c}from"./app-CgYSsB6L.js";const o={},r={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},d=s("p",null,"在vue2阶段的时候，使用vue-cli创建的项目就会包含webpack。webpack是现在前端工程化的重要工具之一。在平常的开发工作中用到webpack的devServer-proxy来处理跨域，加载一些loader来处理css预处理器等，配置build以后的打包路径等等。虽然日常使用到了非常多的webpack的各种配置项，但是对webpack的系统性的学习和归纳整理还没有。",-1),m=s("p",null,"前阵子也是帮朋友写一个基于工作量证明(PoW)的验证码系统，在github上找到了一个项目，一开始这个项目仅仅使用了简单的html，css，js来完成，后期引入了webpack，但是作者可能是还有未提交的commit或者每次都是执行build来更新代码，没有使用webpack的devServer来实现热更新与调试。在拉取代码进行调试以后，我给项目安装了webpack-devServer，大大提升了项目的开发和调试效率。 日常开发当中，sass或者是less的css预处理器已经是必不可少，浏览器无法直接分析sass或者是less，所以在这里需要用到webpack加载各种各样的loader来处理这些代码，在打包部署以后生成浏览器可读的代码。",-1),b=s("p",null,"在这个工作流程里，一个vue2项目，执行build以后输出一个dist目录，将代码部署到nginx容器中就可以进行访问。",-1),u=s("p",null,"打开官网可以看到目前最新的Webpack版本是5.x 接下去我打算从npm init开始创建一个webpack项目来学习webpack的各种配置。",-1),v={href:"https://webpack.js.org/guides/installation/",target:"_blank",rel:"noopener noreferrer"},k=t(`<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">--global</span> webpack <span class="token comment">#全局安装webpack</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建一个webpack项目，可以直接在空文件夹内去npm init后安装webpack或者是直接使用cli去创建webpack项目。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token comment"># 项目内去安装webpack</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 直接使用webpack 的cli来安装，这样可以获得许多选项来初始化项目，可以直接完成安装dev-server，sass预处理器以及配置。</span></span>
<span class="line">npx webpack init <span class="token punctuation">[</span>generation-path<span class="token punctuation">]</span> <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用webpack cli安装示例: <img src="https://raw.githubusercontent.com/InsHomePgup/blog-reco/main/imgs/cli_init.png" alt=""></p><p>不过作为学习，这里使用从0开始的项目内安装webpack。</p><p>空文件夹内执行</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>
<span class="line"><span class="token function">npm</span> init <span class="token parameter variable">-y</span></span>
<span class="line"></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> --save-dev webpack</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 这里初始化当前项目的git，后续可以看到记录代码更新复盘学习记录</span></span>
<span class="line"><span class="token function">git</span> init </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建.gitignore 添加node_modules</span></span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> </span>
<span class="line"></span>
<span class="line"><span class="token function">git</span> commit <span class="token string">&#39;init&#39;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根目录创建src目录、index.html文件，src内创建index.js</p><p>第一个场景，日常会使用到一些npm包，进行调试，这个场景下我们就可以使用webpack项目来进行调试使用，调用那些Api。</p>`,9);function h(g,w){const a=c("ExternalLinkIcon");return p(),l("div",null,[s("p",null,[s("a",r,[n("Webpack"),e(a)])]),d,m,b,u,s("p",null,[n("全局安装webpack "),s("a",v,[n("文档"),e(a)])]),k])}const f=i(o,[["render",h],["__file","start.html.vue"]]),x=JSON.parse('{"path":"/blogs/FrontEnd/Webpack/start.html","title":"webpack 学习-归纳-整理","lang":"en-US","frontmatter":{"title":"webpack 学习-归纳-整理","date":"2024/05/28","tags":["webpack"],"categories":["webpack"]},"headers":[],"git":{"createdTime":1716868235000,"updatedTime":1719224950000,"contributors":[{"name":"InsHomePgup","email":"7328234@gmail.com","commits":1}]},"filePathRelative":"blogs/FrontEnd/Webpack/start.md"}');export{f as comp,x as data};