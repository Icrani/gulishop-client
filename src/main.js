import Vue from 'vue'
import App from "@/App";
// @是一个别名，代表的就是src的路径

Vue.config.productionTip = false

//这两个写法是差不多的
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
    el: '#app',
    render: h => h(App)
})
