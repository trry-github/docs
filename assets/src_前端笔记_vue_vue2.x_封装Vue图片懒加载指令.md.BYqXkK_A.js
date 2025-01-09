import{_ as s,h as n,j as a,O as p}from"./chunks/framework.CU_KtCqm.js";const e=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/前端笔记/vue/vue2.x/封装Vue图片懒加载指令.md","filePath":"src/前端笔记/vue/vue2.x/封装Vue图片懒加载指令.md","lastUpdated":1683717698000}');const l=s({name:"src/前端笔记/vue/vue2.x/封装Vue图片懒加载指令.md"},[["render",function(s,e,l,i,t,r){return n(),a("div",null,e[0]||(e[0]=[p('<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>ok，兄弟们。前面一篇文章就说过要用指令的方式来实现图片的懒加载。其实，前端发展这么多年，要实现图片懒加载非常简单，配合上Vue的指令，30行轻轻松松实现一个高复用的Vue指令。一起来看看吧。</p><h3 id="v-imglazy" tabindex="-1">v-imgLazy <a class="header-anchor" href="#v-imglazy" aria-label="Permalink to &quot;v-imgLazy&quot;">​</a></h3><p>这里我是用intersectionObserber API去实现的。</p><blockquote><p>intersectionObserver 对象的observe()方法向intersectionObserver对象监听的目标集合添加一个元素。一个监听者有一组阈值和一个根，但是可以监视多个目标元素，以查看这些元素可见区域的变化。</p></blockquote><p>简单来说可以监听dom元素进出可视区域，并且可以控制具体的变化。</p><p>具体的使用请看<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noreferrer">IntersectionObserver API</a></p><p>新建一个directive用来存放自定义指令</p><blockquote><p>directive/imgLazy.js</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import baseImg form &#39;@/assets/logo.png&#39;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>// 创建一个监听器</span></span>\n<span class="line"><span>let obserer = new IntersectionObserver((entries)=&gt;{</span></span>\n<span class="line"><span>    // entries 是所有呗监听对象的集合</span></span>\n<span class="line"><span>    entries.forEach(entry) =&gt; {</span></span>\n<span class="line"><span>        if(entry.isIntersecting){</span></span>\n<span class="line"><span>            // 当被监听元素到临界值且未加载图片时触发。</span></span>\n<span class="line"><span>            !entry.target.isLoaded &amp;&amp; showImage(entry.target,entry.target.data_src)</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>})</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>function showImage(el,imgSrc){</span></span>\n<span class="line"><span>    const img = new Image();</span></span>\n<span class="line"><span>    img.src = imgSrc;</span></span>\n<span class="line"><span>    img.onload = () =&gt;{</span></span>\n<span class="line"><span>        el.src = imgSrc;</span></span>\n<span class="line"><span>        el.isLoaded = true;</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>export default {</span></span>\n<span class="line"><span>    // 这里用inserted 和 bind 都行，因为IntersectionObserver时异步的，以防意外还是用inserted好一点</span></span>\n<span class="line"><span>    //inserted和bind的区别在于inserted时元素已经插入页面，能够直接获取到dom元素的位置信息。</span></span>\n<span class="line"><span>    inserted(el,binding) {</span></span>\n<span class="line"><span>        // 初始化时展示默认图片</span></span>\n<span class="line"><span>        el.src = baseImg;</span></span>\n<span class="line"><span>        // 将需要加载的图片地址绑定在dom上</span></span>\n<span class="line"><span>        el.data_src = binding.value;</span></span>\n<span class="line"><span>        observer.observe(el)</span></span>\n<span class="line"><span>    },</span></span>\n<span class="line"><span>    unbind(){</span></span>\n<span class="line"><span>        // 停止监听</span></span>\n<span class="line"><span>        observer.disconnect();</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>在main.js中使用，注册全局指令</p><blockquote><p>main.js</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import imgLazy from &#39;@/directive/imgLazy.js&#39;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>Vue.directive(&#39;imgLazy&#39;,imgLazy)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>在组件中定义directives使用，给当前组件注册指令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import imgLazy from &#39;@/directive/imgLazy.js&#39;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>export default {</span></span>\n<span class="line"><span>    //...</span></span>\n<span class="line"><span>    directives: {</span></span>\n<span class="line"><span>        imgLazy: imgLazy,</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>组件中使用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;template&gt;</span></span>\n<span class="line"><span>    &lt;div class=&#39;container&#39;&gt; </span></span>\n<span class="line"><span>        &lt;div v-for=&quot;(item,index) in imgSrc&quot; :key=&quot;index&quot; &gt;</span></span>\n<span class="line"><span>            &lt;img v-imgLazy=&quot;item&quot;  /&gt;</span></span>\n<span class="line"><span>        &lt;/div&gt;</span></span>\n<span class="line"><span>    &lt;/div&gt;</span></span>\n<span class="line"><span>&lt;/template&gt;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>&lt;script&gt;</span></span>\n<span class="line"><span>import imgLazy from &#39;@/directive/imgLazy.js&#39;</span></span>\n<span class="line"><span>export default {</span></span>\n<span class="line"><span>    directives: { imgLazy: imgLazy,},</span></span>\n<span class="line"><span>    data() {</span></span>\n<span class="line"><span>        return {</span></span>\n<span class="line"><span>            imgSrc: [&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1091405991,859863778&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2396395246,715775841&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=224866248,765861809&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2670715487,1547868437&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2988957523,3295751190&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2698110318,782174384&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102788601,953675482&amp;fm=26&amp;gp=0.jpg&quot;,&quot;https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2004055534,3969071219&amp;fm=26&amp;gp=0.jpg&quot;,]</span></span>\n<span class="line"><span>        }</span></span>\n<span class="line"><span>    }</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span>&lt;/script&gt;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>&lt;style lang=&quot;scss&quot; scoped&gt;</span></span>\n<span class="line"><span>img {</span></span>\n<span class="line"><span>    width: 200px;</span></span>\n<span class="line"><span>    height: 200px;</span></span>\n<span class="line"><span>}</span></span>\n<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>intersectionObserver API 的兼容性方面基本上处理ie都兼容，所以说你如果想要在ie上实现懒加载就只能自己计算每一个元素了。</p>',18)]))}]]);export{e as __pageData,l as default};
