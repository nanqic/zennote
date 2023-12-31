---
slug: para-anchor-dev
title: para-anchor开发记录
authors: xn
tags: [开发]
---

## 前景
前段时间在慧灯禅修看法本时，遇到长页面加载慢，想开发一个编译时运行的插件。

之前没有系统的看 remark 工作流程，随便找了一个教程，简单做了一下就着手开发，结果浪费了近一天时间，也没做出想要的结果来。

今天晚上又碰到慧灯禅修的长页面不显示段号的问题，于是又有了开发一个新的插件的想法。

## 思路
首先网上搜了几篇开发 remark 插件的文章，里提到用 unified。

我的思路是，在 markdown 转 html 之前，对每个普通段落开头添加［p 数字］（#p数字）这样的格式，数字从1开始，遍历时递增。

这一步要在拿到mdast
之后，判断段落，然后对段落修改，再返回修改的结果，交给后续处理。


## 心得
学乐器，做3D动画都是这样，不可能稀里糊涂就把事情做好的，一定要把原理搞明白，通过不断串习达到娴熟，再去做自己想要实现的，就会一路顺风了。

由此想到修行也是这样，首先闻思，生成定解，再到坐上修，通过闻思修次第实修，努力变成好的修行人。
想要一开始就学一个实修法，然后努力的修，可能跟我不清楚流程就着急做插件一样，浪费时间精力。
修行的时间本来就难得宝贵，哪敢这样试错浪费！

---
## 后记
第二天上午，用了几个小时开发出来了，虽然没有用 unified 而是用 visit，没有用 mdast 而是用 hdst，但是处理思路是正确的，最终做出了预期的插件，在编译时解决了段落号显示的问题。