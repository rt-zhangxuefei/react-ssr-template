# react-ssr-template

> 基于 react,react-router,redux,redux-saga,express 等搭建的 ssr 服务端渲染的项目架构

# 运行(根目录下)
```
npm run dev // 启动后访问：http://localhost:3000/
node .\mock\apiserver.js //启动mock api服务
```

# 为啥做这个？

> 有了 next.js 框架以后，干嘛自己折腾 ssr，主要为了自己体验下整个过程，这里面遇到一些坑，记录在我的博客

# 预渲染？

> 如果不是对首屏 time-to-first-page 特别要求，仅仅为了 SEO，可以考虑下 prerender

# 还未解决的问题

> 按需加载（使用 react-loadable 实现过程中遇到一些问题尚未解决）

> 重复渲染 css（服务端渲染了 css 输出到浏览器端以后，浏览器端 js 执行以后仍然会生成 css 插入到 style 标签）

# 特别感谢

> [慕课网的 DellLee](https://www.imooc.com/t/1975036)
