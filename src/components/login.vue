<template>
  <div id="add-blog">
    <h1>Shopper Login</h1>
    <p>to login please enter the details</p>
    <form>
      <label>userId</label>
      <input type="text" v-model="userInfo.userId" required/>
      <label>Password</label>
      <input type="password" v-model="userInfo.password" required/>
      <button type="button" v-on:click="enter">login
      </button>

    </form>
  </div>

</template>
<script>
export default {
  name:'login',
  data () {
    return {
      userInfo:{
        userId:"",
        password:""
      }
    }
  },
  methods:{
    enter:function(){

      if (this.userInfo.userId=='admin'&& this.userInfo.password =='admin') {
        this.$store.commit('setAuthentication',true);
        this.$router.replace({ name: "shopItem" });
        console.log(this.userInfo.userId);
        console.log(this.userInfo.password);
      }

    }
  }
}
</script>

<style>

</style>
