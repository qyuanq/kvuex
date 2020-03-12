<template>
  <div id="app">
   <!-- <vueTest></vueTest> -->
   <kvuexTest></kvuexTest>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import vueTest from './components/vueTest'
import kvuexTest from './components/kvuexTest'

export default {
  name: 'App',
  components:{vueTest,kvuexTest}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
