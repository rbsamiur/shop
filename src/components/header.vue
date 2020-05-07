<template>
  <nav>
    <ul>
      <li v-if="this.$store.state.authenticated"><router-link to="/cart">Cart</router-link></li>
      <li v-if="this.$store.state.authenticated"> <router-link to='/shopitems'>Shopping Item list</router-link></li>
    <button type="button" v-if="this.$store.state.authenticated" v-on:click="logout()">logout</button>
    </ul>
  </nav>

</template>
<script>
export default {
  data(){
    return{

    }
  },methods: {
    logout() {
      this.$router.replace({ name: "login" });
      this.$store.commit('setAuthentication',false);
    }
  }
}
</script>
<style scoped>

</style>
