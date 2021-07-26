import {reqCategoryList} from "@/api";
//这个是home的vuex的模块
const state = {
    //存数据
    categoryList: []
}

const mutations = {
//直接修改数据
    RECEIVE_CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    //与组件当中与用户对接
    //一般是异步发请求
    //提交mutations
    async getCategoryList({commit}) {  //这里是直接使用解构赋值
        //发送请求拿数据，提交给mutations，存储到state
        //await和async作用
        /*可以通过同步代码实现异步效果，可读性强*/
        //.then().catch()不是说不能用，可读性不强，里面还是有异步代码(异步回调函数)
        const result = await reqCategoryList()
        if (result.code === 200) {
            commit('RECEIVE_CATEGORYLIST',result.data)
        }

    }
}
const getters = {
    //后面用来简化数据的操作
}

export default {
    state,
    mutations,
    actions,
    getters
}
