let path=require('path');
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    /** 区分打包环境与开发环境
     * process.env.NODE_ENV==='production'  (打包环境)
     * process.env.NODE_ENV==='development' (开发环境)
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */

    //基本路径
    //baseUrl: './',//vue-cli3.3以下版本使用
    publicPath:'./',//vue-cli3.3+新版本使用

    // baseUrl: "/", // 构建好的文件输出到哪里
    outputDir: "dist", // where to put static assets (js/css/img/font/...) // 是否在保存时使用‘eslint-loader’进行检查 // 有效值: true | false | 'error' // 当设置为‘error’时，检查出的错误会触发编译失败
    chainWebpack: config => {
        //设置别名
        config.resolve.alias
            .set('@',resolve('src'))
    },
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        hotOnly: true, // 热更新
        open:true  //打开浏览器窗口
    },
    //定义scss全局变量
    css: {
        // loaderOptions: {
        //     sass: {
        //         data: `@import "@/assets/scss/global.scss";`
        //     }
        // }
    },

    // 第三方插件配置
    pluginOptions: {
        // ...
    },

    pages: {
        index: {
            // page 的入口
            entry: 'src/pages/page1/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            // chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        page2: {
            entry: 'src/pages/page2/main.js',
            template: 'public/page2.html',
            filename: 'page2.html',
            title: 'Page2',

        },
    }
}