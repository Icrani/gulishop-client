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
    routes:[
        {   //重定向路由
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search/:keyword',
            component:Search
        },
        {
            path:'/login',
            component:Login,
            //路由当中的元配置项，可以配置我们所需要的任何数据
            meta:{
                isHidden:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden: true
            }
        },

    ]
})
