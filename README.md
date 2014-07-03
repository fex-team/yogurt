yogurt [ˈjoɡət]
======================

基于 [fis](http://fis.baidu.com) 扩展针对服务端为 [express.js](http://expressjs.com/) 的前端集成解决方案。

在阅读此文档之前，希望你最好对 [fis](http://fis.baidu.com) 有一定的了解。此工具主要负责前端编译与环境模拟，让你更专注、更快速地开发前端部分，关于后端 express 框架部分，请查看 [yog](https://github.com/fex-team/yog)。

## 特点

* 扩展 [swig](http://paularmstrong.github.io/swig/) 模板引擎，提供易用的 `html`、`head`、`body`、`widget`、`script`、`style` 等等标签。基于这些标签后端可以自动完成对页面的性能优化。
* 基于 `widget` 标签，可以轻松实现以 BigPipe 模式渲染，详情请查看[这里](https://github.com/fex-team/yog-bigpipe)。
* 提供便利的环境、数据和页面模拟。tpl 自动与 json 数据文件关联，本地就能预览线上效果。
* 此工具将生成 tpl 和使用的静态资源，后端只需关注页面逻辑，数据获取以及渲染模板即可，无需搅和到前端领域的东西。


## 目录规范

```
├── page                    # 页面 tpl
├── static                  # 静态资源
├── widget                  # 各类组件
├── test                    # 数据与页面模拟目录
├── fis-conf.js             # fis 编译配置
```