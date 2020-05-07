<template>
  <div >
   <div  v-if="!okOrNot">
     <h1>Items you have Ordered</h1>
     <h2>Recipt</h2>
      <div v-for="item in items">
       <h4>{{item.name}}</h4>
       <p> {{item.price}} tk/pc</p>
       </div>
       <h3>Total amount {{priceSum}} </h3>
       <button type="button" v-on:click="checkoutCart" >Order</button>
     </div>
     <div v-else>
       <h1>Your Order has been Placed</h1>
     </div>
   </div>

</template>
<script>


export default {
  name:'checkout',
  data () {
    return {
      okOrNot:false,
      items: this.$store.state.mycart,
      priceSum:this.priceSum=this.$store.state.totalAmount
    }
  },
  methods:{
    checkoutCart(){
      if (confirm("Place Order?")) {
        this.okOrNot=true;
        this.$store.state.mycart=[];
        console.log(this.$store.state.mycart);
      } else {
        console.log(this.$store.state.mycart);
      }
      // alert("Are you sure!"
    }

  }

}
</script>

<style>

</style>
