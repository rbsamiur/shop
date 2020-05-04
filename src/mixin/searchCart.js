export default{
  computed:{
    filteredCartItems:function(){
      return this.mycart.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}
