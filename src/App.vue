<template>
  <div id="app">
    <div>
      123132
    </div>
    <Header/>
    <router-view></router-view>
    <!--    可以这么写，但是如果后期很多个页面不需要，则太过于麻烦-->
    <!--    <Footer v-show="$route.path !== '/login' && $route.path !== '/register'"/>-->
    <Footer v-show="!$route.meta.isHidden"></Footer>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    //这里是测试mock
    const baseurl = 'https://www.fastmock.site/mock/dd94c6b113866e273d0b3b63158664a2/api'

    axios.get(`${baseurl}/test`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    //这里是测试mock


  }
}
</script>

<style scoped>

</style>
