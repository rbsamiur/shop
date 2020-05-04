import Login from './components/login.vue';
import shopItem from './components/shopitemlist.vue';
import Cart from './components/cart.vue';
export default [
    { path: '/login',name:'login', component: Login},
    { path: '/cart',name:'Cart', component: Cart},
    { path: '/shopitems',name:'shopItem', component: shopItem}
]
