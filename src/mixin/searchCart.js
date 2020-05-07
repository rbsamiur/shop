export default{
  computed:{
    filteredCartItems:function(){
      return this.$store.state.mycart.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}
