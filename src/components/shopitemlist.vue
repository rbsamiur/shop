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
    <cart :cart="this.mycart" v-show="'true'">
    </cart>
   </div>
</template>

<script>
import searchMixin from "../mixin/searchMixin";
import cart from "../components/cart";
export default {
    name:'Cart',
    components: {
      cart:cart
    },
    data () {
      return {
          items:[],
          search:"",
          mycart:[]
      }
    },
    methods:{
      addToCart(item){
        this.mycart.push(item);
        console.log(this.mycart);
      },
      checkCart(){
        this.$router.replace({name:'Cart'});
      }
    },
    created() {
      //do something after creating vue instance
      this.items=[
        {name:'banana',price:15},
        {name:'mango',price:35},
        {name:'peach',price:45},
        {name:'daal',price:55},
        {name:'vaat',price:75},
        {name:'alu',price:85},
        {name:'gom',price:95},
        {name:'vutta',price:85},
        {name:'shakalaka',price:75},
        {name:'orrhe',price:65},
        {name:'acccha',price:45},

      ]
    },
    mixins: [searchMixin]

}
</script>

<style>

</style>
