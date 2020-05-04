<template>
  <div >
    <h1>List of all Items in Cart</h1>
    <input type="text" v-model="search" placeholder="Search Items in Cart">
    <div v-for="item in this.items">
    <h2 >{{item.name}}</h2>
    <p>{{item.price}} tk/pc</p>
    <button type="button" v-on:click="removeFromCart(item)">Remove from cart</button>
    </div>
  </div>
</template>

<script>
//import searchCart from "../mixin/searchCart";

export default {
  name:'Cart',
  props:{
    cart:Array
  },
  data () {
    return{
      // cart:this.cart,
      items:this.cart,
      search:""
    }
  },
  methods:{
    removeFromCart(spitem){
    console.log(this.items);
     this.items.splice(this.items.indexOf(spitem), 1);
      }

 }//,
  // mixins: [searchCart]

}
</script>

<style>

</style>
