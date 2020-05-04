export default{
  computed:{
    filteredItems:function(){
      return this.items.filter((item)=>{
        return item.name.match(this.search);
      })
    }
  }
}
