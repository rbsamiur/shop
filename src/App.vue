<template>
  <div id="app">
    <Header></Header>
    <router-link to="{name:'shopItem'}"></router-link>
    <router-view />
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  name: 'app',
  components: {
    Header:header
  }
}
</script>

<style >
</style>
