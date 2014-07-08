yogurt [ˈjoɡət]
======================

基于 [fis](http://fis.baidu.com) 扩展针对服务端为 [express.js](http://expressjs.com/) 的前端集成解决方案。

在阅读此文档之前，希望你最好对 [fis](http://fis.baidu.com) 有一定的了解。此工具主要负责前端编译与环境模拟，让你更专注、更快速地开发前端部分，关于后端 express 框架部分，请查看 [yog](https://github.com/fex-team/yog)。

## 特点

* 扩展 [swig](http://paularmstrong.github.io/swig/) 模板引擎，提供易用的 `html`、`head`、`body`、`widget`、`script`、`style` 等等标签。基于这些标签后端可以自动完成对页面的性能优化。
* 基于 `widget` 标签，可以轻松实现让 `widget` 以 BigPipe 模式渲染，详情请查看[这里](https://github.com/fex-team/yog-bigpipe)。
* 提供便利的环境、数据和页面模拟。tpl 自动与 json 数据文件关联，本地就能预览线上效果。
* 此工具负责生成 tpl 和关联的静态资源。后端只需关注页面逻辑，数据获取以及渲染模板即可，无需关心前端领域。


## 目录规范

```
├── page                    # 页面 tpl
├── static                  # 静态资源
├── widget                  # 各类组件
├── test                    # 数据与页面模拟目录
├── fis-conf.js             # fis 编译配置
```

### page

所有页面级别的模板文件，放在此目录。此tpl 可以直接在浏览器中预览。比如 page/index.tpl 可以通过 http://127.0.0.1:8080/{{ projectname }}/page/index 访问。 其中 {{ projectname }} 为此项目的名称。

需要强调的的是，模板引擎采用的是 [swig](http://paularmstrong.github.io/swig/), 可以采用模板继承机制来实现模板复用。

layout.tpl

```tpl
<!doctype html>
{% html lang="en" framework="example:static/js/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="/favicon.ico">
        <title>{{ title }}</title>

        {% require "example:static/css/bootstrap.css" %}
        {% require "example:static/css/bootstrap-theme.css" %}
        {% require "example:static/css/style.css" %}
        {% require "example:static/js/bigpipe.js" %}
        {% require "example:static/js/jquery-1.10.2.js" %}
        {% require "example:static/js/bootstrap.js" %}
    {% endhead %}

    {% body %}
        <div id="wrapper">
            {% widget "example:widget/header/header.tpl" %}

            {% block beforecontent %}
            {% endblock %}
            
            <div class="container">
                {% block content %}
                {% endblock %}
            </div>

            {% block aftercontent %}
            {% endblock %}

            {% widget "example:widget/footer/footer.tpl" %}
        </div>

    {% endbody %}

    {% require "example:page/layout.tpl" %}
{% endhtml %}
```

index.tpl

```tpl
{% extends 'example:page/layout.tpl' %}

{% block beforecontent %}
    {% widget "example:widget/pagelets/jumbotron/jumbotron.tpl" %}
{% endblock %}

{% block content %}
    This is content!
{% endblock %}
```