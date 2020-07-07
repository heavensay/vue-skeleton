import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/**
 *@parma {String} name 文件夹名称
 *@parma {String} component 视图组件名称
 */
const getComponent = (name, component) => () => import(`@/views/${name}/${component}.vue`);


const myRouter = new Router({
    routes: [
        // {
        //     path: '/',
        //     redirect: '/home',
        //     component: getComponent('login', 'index')
        // },
        {
            path: '/login',
            name: 'login',
            component: getComponent('login', 'index')
        },
        {
            path: '/',
            component: getComponent('layout', 'Layout'),
            children: [{
                path: '/home',
                name: 'home',
                component: getComponent('home', 'index'),
                meta: {title: '首页'}
                },
                {
                    path: '/news',
                    component: getComponent('news', 'news-info'),
                    name: 'icon',
                    meta: {title: '测试新闻'}
                },
                {
                    path: '/component/annex-upload',
                    component: getComponent('plugs/drag', 'annex-upload'),
                    name: 'icon',
                    meta: {title: '图片上传拖拽'}
                },
                {
                    path: '/component/vmodel',
                    component: getComponent('plugs/vmodel', 'vmodel'),
                    name: 'icon',
                    meta: {title: 'vmodel双向绑定'}
                },
            ]
        }]
})

export default myRouter
