import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)

//向外暴露一个路由器对象
import Home from '@/pages/Home'
import Search from '@/pages/Home'
import Register from '@/pages/Home'
import Login from '@/pages/Home'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/search',
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
        {   //重定向路由
            path:'/',
            redirect:'/home'
        }
    ]
})
