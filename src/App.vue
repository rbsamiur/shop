<template>
  <div id="app">
    <Header></Header>
    <router-link to="/shopitems"></router-link>
    <router-view />
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  name: 'app',
  components: {
    Header:header
  },
  data(){
    return{
    }
  }
}
</script>

<style >

</style>
