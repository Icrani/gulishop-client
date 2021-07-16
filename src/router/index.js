import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

//VueRouter 是路由器对象的构造函数
//this.$router.push 调用的是路由器对象的方法，这个方法并不是路由器实例化对象的方法，而是这个对象原型的方法
//这个实例化对象原型的方法，就是VueRouter的显式原型的方法
//this.$router是实例化对象  是VueRouter的实例化对象


//解决编程式导航多次点击参数不修改抛出一个失败的promise
//将原有的push方法，保存起来，后期还能拿到原来的
const VueRouterPush = VueRouter.prototype.push
//可以打单的去修改原型的push，让原来的push指向另一个函数
/*VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}*/
//下面是完整的写法
VueRouter.prototype.push = function(location,onResolved,onRejected){
    if (onResolved === undefined && onRejected === undefined){
        return VueRouterPush.call(this,location).catch(()=>{})
    }else {
        //证明调用的时候传递了成功或者失败的回调，或者都有
        return VueRouterPush.call(this,location,onResolved,onRejected)
    }
}


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
