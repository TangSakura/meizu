import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Personal from './components/Personal.vue'
import HomePage from './components/HomePage.vue'
import UserMessage from './components/UserMessage.vue'
import Administrator from './components/Administrator.vue'
import user from './components/UserRepair.vue'
import shoppingcart from './components/ShoppingCart.vue'


export const routes = [
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    {path:'/personal',component:Personal},
    {path:'/',component:HomePage},
    {path:'/usermessage',component:UserMessage},
    {path:'/admin',component:Administrator},
    {path:'/user',component:user},
    {path:'/shoppingcart',component:shoppingcart},
]