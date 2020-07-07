# vue-multipage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


##vue多页面项目demo

###多页面目录结构:

```
我们首先需要重构工程目录，可以基于以下或自身的需求进行考虑：
通过一个pages目录来存放不同的入口，每个入口包含：index.html、main.js，pages，其中文件夹名即路由名
src目录下可以存放项目的通用组件和静态资源，每个入口单独管理自己独有的资源
...
├── public
│   └── favicon.ico
├── src
│   ├── assets
│   ├── components
│   └── pages
│       └── page1
│           ├── App.vue
│           ├── assets
│           │   └── logo.png
│           ├── components
│           │   └── HelloWorld.vue
│           ├── index.html
│           └── main.js
│       └── page2
│           ├── ...
```

