<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <page2/>
  </div>
</template>

<script>
import Page2 from './page2.vue'

export default {
  name: 'app',
  components: {
    Page2
  }
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
