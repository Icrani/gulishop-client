import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//     return VueRouterPush.call(this, to).catch(err => err)
// }


//向外暴露一个路由器对象
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'

export default new VueRouter({
    routes: [
        {   //重定向路由
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            name: 'home'
        },
        {
            path: '/search/:keyword?',
            component: Search,
            name: 'search',//命名路由
            //这个props是我们在路由组件当中操作params参数和query参数的简化方法
            // props: true, //会默认的把传递过来的params参数，额外的映射为组件当中的属性去操作
            // props:{username:'test'}  //传递一个对象，传递的是额外你需要的静态数据，不需要就不用
            props: (route) => {
                return {
                    keyword: route.params.keyword,
                    keyword1: route.query.keyword1
                }
            }
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            //路由当中的元配置项，可以配置我们所需要的任何数据
            meta: {
                isHidden: true
            }
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {
                isHidden: true
            }
        },

    ]
})
