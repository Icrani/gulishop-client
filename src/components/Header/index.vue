<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/home">
          <img src="./images/logo.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" v-model="keyword" class="input-error input-xxlarge"/>
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    toSearch() {
      // this.$router.push('/search/' + this.keyword + '?keyword1=' + this.keyword.toUpperCase())
      /*
        一、路由传参的种类
            *params和query
              params参数是属于路径的一部分，路由当中匹配的时候，是要照顾到
              query参数是在路径后面，以？分割，？后面的a=b&c=d就是query参数
              query参数不属于路径的一部分，路由匹配的时候，不需要关系这个参数

          */

      //二、路由路径带参数的三种写法
      //1.字符串写法
      //   this.$router.push('/search/' + this.keyword + '?keyword1=' + this.keyword.toUpperCase())
      //2.模板字符串
      //   this.$router.push(`/search/${this.keyword}?keyword1=${this.keyword.toUpperCase()}`)
      //3.对象写法(重点)
      this.$router.push({
        name: 'search',
        params: {keyword: this.keyword || undefined},
        query: {keyword1: this.keyword.toUpperCase()}
      },)





      //面试1：
      //指定params参数是可不可以用path和params配置的组合？（对象写法）
      //* 不可以用path和params配置组合，只能用name和params配置的组合，query配置可以与path或name进行组合使用
      //如果传递的参数只有query参数，没有params参数，那么我们可以不用name，可以使用path
      //注：如果传递的参数包含了params，就不能使用path，只能使用name去使用
      /*        this.$router.push({
                path:'/search',
                query:{keyword1:this.keyword.toUpperCase()}
              })*/


      //面试2：
      //如何让params参数可传可不传？
      //* path:'/search/:keyword?'
      //后期在工作中在path路径后面加“?”用的会比较多


      //面试3：
      //如果指定name与params配置，但params中数据是一个""，无法跳转，路径会出问题
      //* 1.不传params参数
      //* 2.首先在params参数可传可不传的前提下,当传递的参数是空串的时候，传递成undefined，就不出问题
      /*      this.$router.push({
              name:'search',
              params:{keyword:'' || undefined},
              query:{keyword1:this.keyword.toUpperCase()}
            })*/

      //面试4：
      //路由组件能不能传递props数据？
        //* 可以：可以将query或params参数映射/转换成props传递给路由组件对象
      /* props:(route)=>({keyword1:route.params.keyword,keyword2:route.query.keyword})*/

      //面试：
      //vue-router使用的是3.1.0以上的版本，如果多次点击使用编程式导航，二参数没发生变化，会报NavigationDuplicated的警告错误

        //* 1.但是不是太好
          /* 注：这是处理编程式导航多次点击参数不修改抛出一个失败的promise，但是每一次都需要写catch，所以考虑可以写到push原型上。建议写到router下index.js中使整个项目都能调用
           this.$router.push({
             name: 'search',
             params: {keyword: this.keyword || undefined},
             query: {keyword1: this.keyword.toUpperCase()}
           },).catch(()=>{})*/
        //* 2.

    }
  }
}
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }

      }

    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
