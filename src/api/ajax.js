//这个文件是对axios进行二次封装
//额外的让axios发请求的时候，具有其它的功能

//配置基础路径和超时限制
/*
baseURL: 设置，当前项目当中所有接口路径的公共路径部分，基础路径
timeout: 当ajax请求超过设置的这个时间就会跑错
*/

//添加进度条信息  nprogress

//返回的响应不再需要从data属性当中拿数据，而响应就是我们要的数据

//同意处理请求错误，具体请求也可以选择处理或不处理

/*------------------------------------*/

import axios from "axios";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
//以后只要是对axios二次封装，不会再axios身上直接去封装，而是创建一个新的axios实例进行封装
//axios.create()创建一个新的和axios具有相同功能的一个实例
const service = axios.create({
    //配置基础路径和超时限制
    baseURL: '/api',
    timeout: 20000,
});

//添加进度条信息  nprogress
//以后如果想对axios添加额外的功能或者是给请求头添加额外的信息
//必然用到axios的请求拦截器和响应拦截器

// 请求拦截器，每一个ajax请求都要经过这个拦截器去拦截
/* //github上原格式
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) { //一般情况请求拦截器失败的函数是不写的，失败了就没意义了
    // Do something with request error
    return Promise.reject(error);
});
*/
//请求拦截器一般情况写法
service.interceptors.request.use(
    (config) => {
        //config其实就是我们的请求报文
        //这个请求报文一定要返回，因为还要几区往下走

        //在这里我们可以添加额外的功能，也可以给请求头添加需要的数据
        NProgress.start();
        return config
    },
    //请求拦截器当中失败的回调一般不写，因为失败了，也就没有下文了
    // ()=>{}
)

//返回的响应不再需要从data属性当中拿数据，而响应就是我们要的数据
// 响应拦截器
/*//github上原格式
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});*/
//响应拦截器一般情况写法
service.interceptors.response.use(
    (response) => {
        // response其实就是我们的响应报文
        //我们也是可以添加额外的功能或者对响应报文进行处理
        NProgress.done(); //停止进度条

        return response.data//返回的响应不再需要懂data属性中拿数据，而是响应就是我们要的数据
    },
    (error) => {
        NProgress.done();
        //同意处理请求错误，具体请求也可以选择处理或不处理

        //统一处理
        alert("发送ajax请求失败"+error.message||"未知错误")

        //统一处理完成之后，这个错误可以让后面继续处理
        // return Promise.reject(new Error('发送ajax请求失败')) //后面想继续处理这个错误，返回失败的promise

        //也可以不让后面继续处理，中断promise链
        return new Promise(()=>{})  //返回的是pending状态的promise，代表中断promise链，后期也就没有办法处理了
    }
)

export default service //把封装号的axios暴露出去，后面去用
