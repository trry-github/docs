# Chrome DevTools中的这些骚操作，你都知道吗？

## **引言 🏂**

作为开发人员，平时用的最多的就是`Chrome devtools`了，但是可能很多同学都像我一样平时用的最多也就只是`Console`和`Elements`面板了。

我整理了一些我平时用的比较多的一些调试小技巧，相信对提高你的工作效率能起到不小的帮助！

## **命令（`Command`） 菜单 🏈**

“命令”菜单是最最常用的，本文也会多次用到，所以这里先说一下打开方式:

按`Cmd + Shift + P`（如果使用`Windows`，则按`Ctrl + Shift + P`）打开“命令”菜单。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1d5c4275?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## **截图`DOM`元素 🏉**

当你只想对一个特别的 `DOM` 节点进行截图时，你可能需要使用其他工具弄半天，但现在你直接选中那个节点，打开 命令（`Command`） 菜单并且使用 `节点截图` 就可以了。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1d8cd947?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)截取特定节点对应上图命令是`Screenshot Capture node screenshot`。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1c3c6a34?imageslim)

截取特定`DOM`元素示例：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a1fef81b5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

不只是这样，你同样可以用这种方式 实现`全屏截图` ：通过 `Screenshot Capture full size screenshot` 命令。

> ❝
>
> 请注意，这里说的是全屏，并不只是页面可视区域，而是包含滚动条在内的所有页面内容。
>
> ❞

对应截取全屏示例：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a235a2d1a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## **在控制台中使用上次操作的值 🎃**

我是最近才发现这个技巧。使用`$_`可以引用在控制台执行的前一步操作的返回值。如果您正在控制台调试一些`JavaScript`代码，并且需要引用先前的返回值，那么这可能非常方便。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a25f05d88?imageslim)

## **重新发起`xhr`请求 🚀**

在平时和后端联调时，我们用的最多的可能就是`Network`面板了。但是每次想重新查看一个请求，我们往往都是通过刷新页面、点击按钮等方式去触发`xhr`请求，这种方式有时显得会比较麻烦，我们可以通过`google`提供的`Replay XHR`的方式去发起一条新的请求，这样对于我们开发效率的提升是有所帮助的。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a510e2d22?imageslim)

## **编辑页面上的任何文本 ✍**

在控制台输入`document.body.contentEditable="true"`或者`document.designMode = 'on'`就可以实现对网页的编辑了。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a55292857?imageslim)其实这个还是比较实用的，比如你要测试一个`DOM`节点文字太长时，样式是否会混乱，或者要去直接修改页面元素去满足一些业务需求时。（我之前是在`Elements`面板一个一个去修改的，，，）

## **网络面板（`Network`）的幻灯片模式 🌇**

启动`Network` 面板下的`Capture screenshots`就可以在页面加载时捕捉屏幕截图。有点`幻灯片`的感觉。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a5b2852d5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)单击每一帧截图，显示的就是对应时刻发生的网络请求。这种可视化的展现形式会让你更加清楚每一时刻发生的网络请求情况。

![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93ab6581edd?imageslim)

## **动画检查 🎏**

`DevTools` 中有一个动画面板，默认情况下它是关闭的，很多人可能不太清楚这个功能。它可以让你控制和操纵 `CSS` 动画，并且可视化这些动画是如何工作的。

要打开该面板，可以在 `DevTools` 右上角菜单 → `More tools` 中打开 `Animations` ：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a72203c05?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

默认情况下，`DevTools` 会“监听”动画。一旦触发，它们将被添加到列表中。你能看到这些动画块如何显示。在动画本身上，`DevTools` 会向我们展示哪些属性正在更改，例如 `background-color` 或 `transform`。

然后，我们可以通过使用鼠标拖动或调整时间轴来修改该动画：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a7b4442c9?imageslim)

## **递增/递减 CSS 属性值 🃏**

作为前端开发，平时少不了通过`Elements`面板去查找元素以及它的`css`样式。有时调整像素`px`会比较麻烦一点，这时就可以使用快捷键去帮你完成：

```
* 增量0.1
  * Mac： Option +向上和Option +向下
  * Windows： Alt +向上和Alt +向下
* 增量1
  * Mac：向上+向下
  * Windows：向上+向下
* 增量10
  * Mac：⇧+向上和⇧+向下
  * Windows：⇧+向上和⇧+向下
* 递增100
  * Mac： ⌘+向上和⌘+向下
  * Windows： Ctrl +向上和Ctrl +向下

```

## **在低端设备和弱网情况下进行测试 📱**

我们平时开发一般都是在办公室（wifi 网速加快），而且设备一般都是市面上较新的。但是产品的研发和推广，一定要考虑低设备人群和弱网的情况。

在`Chrome DevTools`中可以轻松调节`CPU`功能和`网络速度`。这样，我们就可以测试 Web 应用程序性能并进行相应优化。

具体打开方式是：在`Chrome DevTools`中通过`CMD/Ctrl + Shift + p`打开命令菜单。然后输入`Show Performance`打开性能面板。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93a95bc8ece?imageslim)

## **copying & saving 📜**

在调试的过程中，我们总会有对 `Dev Tools` 里面的数据进行 `复制` 或者 `保存` 的操作，其实他们也是有一些小技巧的！

### copy()

可以通过全局的方法 `copy()` 在 `console` 里 `copy` 任何你能拿到的资源![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93aa2c22452?imageslim)

### Store as global variable

如果在`console`中打印了一堆数据，想对这堆数据做额外的操作，可以将它存储为一个全局变量。只需要右击它，并选择 “Store as global variable”选项。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93aa81da076?imageslim)第一次使用的话，它会创建一个名为 `temp1` 的变量，第二次创建 `temp2`，第三次 ... 。通过使用这些变量来操作对应的数据，不用再担心影响到他们原来的值。

## **自定义 devtools 🌈**

![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93ab6302535?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

大家平时用的最多的`Chrome 主题`可能就是白色/黑色这两种了，但用的久了，难免想尝试像`IDE`一样切换主题。

### 打开方式

- 首先需要启用实验模式中的`Allow custom UI themes`

  - 地址栏输入如下`url`

  ```
  chrome://flags/#enable-devtools-experiments # 启用实验功能
  
  ```

  - 启用实验功能，并重启浏览器![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b02b8c157?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
  - 控制台中使用快捷键`F1`打开设置，切换到`Experiments` 选项
  - 启用`Allow custom UI themes`![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b039018f7?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 从`Chrome`商店安装`Material DevTools Theme Collection`扩展程序![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93af710ee3b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

- 选择你喜欢的主题即可![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b0604e734?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## **CSS/JS 覆盖率 ✅**

`Chrome DevTools` 中的`Coverage`功能可以帮助我们查看代码的覆盖率。

### 打开方式

- 打开调试面板，用快捷键 `shift+command+P （mac）`输入 `Show Coverage`调出相应面板![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b0fdce938?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
- 点击`reload` 按钮开始检测![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b3ed6edda?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
- 点击相应文件即可查看具体的覆盖情况（绿色的为用到的代码，红色表示没有用到的代码）![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b6e99b826?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

最后同样用一个动图做下展示：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b4564c113?imageslim)

## **自定义代码片段 Snippets 🌰**

在平常开发过程中，我们经常有些 `JavaScript` 的代码想在 `Chrome Devtools`中调试，直接在 `console` 下 写比较麻烦，或者我们经常有些代码片段(防抖、节流、获取地址栏参数等)想保存起来，每次打开 `Devtools` 都能获取到这些代码片段，而不用再去`google`，正好`Chrome Devtool` 就提供了这种功能。

如图所示，在 `Sources` 这个`tab`栏下，有个 `Snippets` 标签，在里面可以添加一些常用的代码片段。![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b457b30a4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## **将图片复制为数据 URI 🦊**

### 打开方式

- 选择`Network`面板
- 在资源面板中选择`Img`
- 右键单击将其复制为数据`URI`（已编码为`base 64`）![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b51195416?imageslim)

## **媒体查询 🔭**

媒体查询是自适应网页设计的基本部分。在`Chrome Devtools`中的`设备模式`下，在三圆点菜单中点击 `Show Media queries`即可启用：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b59840a11?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)`Devtools`会在样式表中检测媒体查询，并在顶端标尺中将它们显示为彩色条形:![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b5f1f9a5a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)那怎么使用呢？其实也很简单：

- 点击媒体查询条形，调整视口大小和预览适合目标屏幕大小的样式
- 右键点击某个条形，查看媒体查询在 `CSS` 中何处定义并跳到源代码中的定义

![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b7e64c956?imageslim)

## **keys/values 🎯**

这个是`Devtools`提供的快速查看一个对象的`key`、`values`的`API`。用起来也很简单：![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b89bad104?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

> ❝
>
> 你可能会说`Object.keys()`和`Object.values()`也可以实现啊，但这个不是更简单点吗 🤠
>
> ❞

## **table 🦐**

`Devtools`提供的用于将对象数组记录为表格的`API`:![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93b9db53e5b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)![img](https://user-gold-cdn.xitu.io/2020/5/19/1722a93ba3535f1d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
