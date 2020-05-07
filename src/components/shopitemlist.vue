<template>
  <div >
    <h1>List of all Items</h1>
    <input type="text" v-model="search" placeholder="Search Items">
    <div v-for="item in filteredItems">
      <h1 >{{item.name}}</h1>
      <p>{{item.price}} tk/pc</p>
      <button type="button" v-on:click="addToCart(item)">add to cart</button>
    </div>
    <h1>Check Your Cart</h1>
    <button type="button" v-on:click="checkCart" >Cart</button>
   </div>
</template>

<script>
import searchMixin from "../mixin/searchMixin";

export default {
    name:'shopItem',
    data () {
      return {
          search:"",
      }
    },
    computed:{
      items(){
        this.$store.state.products;
      }
    },
    methods:{
      addToCart(item){
        this.$store.state.totalAmount+=item.price;
        console.log(item.price);
        console.log(this.$store.state.totalAmount);

        this.$store.state.mycart.push(item);
        console.log(this.$store.state.mycart);
      },
      checkCart(){
         this.$router.replace({name: "cart"});
      }
    },
    mixins: [searchMixin]

}
</script>

<style>

</style>
