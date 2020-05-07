import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store= new Vuex.Store({
  state:{
    products:[
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
    ],
    authenticated: false,
    mycart:[],
    totalAmount:0,
  },
  mutations:{
    setAuthentication(state,status){
      state.authenticated=status;
    }
  }
});
