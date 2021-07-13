import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//这两个写法是差不多的
// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
    el: '#app',
    render: h => h(App)
})