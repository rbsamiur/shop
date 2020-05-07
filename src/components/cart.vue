<template>
  <div >
    <h1>List of all Items in Cart</h1>
    <input type="text" v-model="search" placeholder="Search Items in Cart">
    <div v-for="item in filteredCartItems">
    <h2 >{{item.name}}</h2>
    <p>{{item.price}} tk/pc</p>
    <button type="button" v-on:click="removeFromCart(item)">Remove from cart</button>
    </div>
    <h1>Check Your Cart</h1>
    <button type="button" v-on:click="checkOutCart" >CheckOut</button>
  </div>

</template>
<script>

import searchCart from "../mixin/searchCart";

export default {
  name:'Cart',
  data () {
    return {
        search:"",
    }
  },
  computed:{
    items(){
      this.$store.state.mycart;
    },
    price(){
      this.priceSum=this.$store.state.totalAmount
    // this.totalPrice=this.$store.state.totalAmount;
        console.log(this.$store.state.totalAmount);
         console.log(this.priceSum);
    }
  },
  methods:{
    removeFromCart(spitem){
      this.$store.state.totalAmount-=spitem.price;
      console.log(this.$store.state.mycart);
      this.$store.state.mycart.splice(this.$store.state.mycart.indexOf(spitem), 1);
    },
    checkOutCart(){
      this.$router.replace({name: "checkout"});

    }

  },
  mixins:[searchCart]

}
</script>

<style>

</style>
