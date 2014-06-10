yogurt [ˈjəʊgət]
======================

todo

##  服务端处理流程图

![workflow](./flow.jpg)

## 目录规范

整体开发分两个流程，前端开发与后端开发。前端开发主要集中在 html 和 js 的编写，所有页面和数据通过 fis 模拟快速提供。后端开发主要集中在数据获取和页面逻辑编写上。

### 前端目录

```bash
├── page                    # 页面 tpl
├── static                  # 静态资源
├── widget                  # 各类组件
├── test                    # 数据与页面模拟目录
├── fis-conf.js             # fis 编译配置
```

### 后端目录

#### app 模块

```bash
├── config                    # 配置文件
│   ├── config.json           # 默认配置
│   └── development.json      # 开发期配置项，便于调试。
├── controllers               # 控制器
│   └── ...                   # routes
├── locales                   # 多语言
├── models                    # model
│   └── ...
│── server.js                 # server 入口
```

#### 完整项目目录

```bash
│── app
│   ├── config                    # 配置文件
│   │   ├── config.json           # 默认配置
│   │   └── development.json      # 开发期配置项，便于调试。
│   ├── controllers               # 控制器
│   │   └── ...                   # routes
│   ├── locales                   # 多语言
│   ├── models                    # model
│   │   └── ...
│   │── server.js                 # server 入口
│── UI-A
│   ├── static 
│   ├── views 
│   └── config/map.json           # 静态资源表。 
│── UI-B
│   ├── static 
│   ├── views 
│   └── config/map.json           # 静态资源表。
```


### 前后端一体 （！！！备份， 不采用）

```bash
├── config                    # 配置文件
│   ├── config.json           # 默认配置
│   └── development.json      # 开发期配置项，便于调试。
├── controllers               # 控制器
│   ├── development           # 支持 json
│   └── ...                   # routes
├── locales                   # 多语言
├── models                    # model
│   ├── development           # 数据模拟，允许 json 文件直接模拟 model. 
│   └── ...
├── public                    # 静态资源
├── views                     # 模板
├── fis-conf.js               # fis 编译配置
└── app.js                    # server 入口
```

## 模板扩展

基于 [swig](http://paularmstrong.github.io/swig/) 扩展 html、head、body、style、script、require、uri 等标签，方便组织代码和静态资源引用，自动完成 js、css 优化输出。

layout.html

```markup
<!doctype html>
{% html lang="en" %}
    {% head %}
        <meta charset="UTF-8">
        <title>{% title %}</title>
        {% require "common:static/js/jquery.js" %}
        
        {% style %}
            body { color: white;}
        {% endstyle %}
        
        {% style %}
            console.log('hello yogurt');
        {% endstyle %}
    
    {% endhead %}

    {% body %}
        <div id="wrap">
            {% block content %}
            This will be override.
            {% endblock %}
        </div>
    {% endbody %}
{% endhtml %}
```

index.html

```markup
{% extends 'layout.html' %}

{% block content %}
<p>This is just an awesome page.</p>
{% endblock %}
```




