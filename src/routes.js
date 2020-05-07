import Vue from "vue"
import VueRouter from 'vue-router'

import Login from './components/login.vue';
import shopItem from './components/shopitemlist.vue';
import Cart from './components/cart.vue';
import checkout from './components/checkout.vue';
import {store} from './store/Store'

Vue.use(VueRouter);

export const router= new VueRouter({
  routes:[
      { path: '/login',
        name:'login',
        component: Login
      },
      { path: '/shopitems',
        name:'shopItem',
        component: shopItem,
        beforeEnter:(to, from, next)=>{
          if(store.state.authenticated == false) {
            next({path: '/login', name:'login'});
          }else{
            next();
          }
        }
      },
      { path: '/cart',
         name:'cart',
         component: Cart,
         beforeEnter:(to, from, next)=>{
           if(store.state.authenticated == false) {
             next({path: '/login', name:'login'});
           }else{
             next();
           }
         }
      },
      { path: '/checkout',
        name:'checkout',
        component: checkout,
        beforeEnter:(to, from, next)=>{
          if(store.state.authenticated == false) {
            next({path: '/login', name:'login'});
          }else{
            next();
          }
        }
      }
  ],
  mode:'history'
});
