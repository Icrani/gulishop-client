<template>
  <div id="app">
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
// import axios from "axios";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    this.$store.dispatch('getCategoryList');
  }
}
</script>

<style scoped>

</style>
