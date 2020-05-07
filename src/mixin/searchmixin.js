export default{
  computed:{
    filteredItems:function(){
      return this.$store.state.products.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}

