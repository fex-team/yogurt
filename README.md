yogurt [ˈjəʊgət]
======================

todo

##  服务端处理流程图

![workflow](./flow.jpg)

## 目录规范

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
