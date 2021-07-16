import Vue from 'vue'
import App from "@/App";
import router from '@/router'
// @是一个别名，代表的就是src的路径
import TypeNav from '@/components/TypeNav'



//全局注册的组件，如果一个非路由组件被多个组件使用，那么定义在components中，注册在全局main.js中
Vue.component('TypeNav',TypeNav)


Vue.config.productionTip = false


//这两个写法是差不多的
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
    el: '#app',
    render: h => h(App),
    router  //所有组件内部都可以使用this.$route和this.$router
})
