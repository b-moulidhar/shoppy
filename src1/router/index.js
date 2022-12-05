// import HeaderOne from '../components/HeaderOne.vue'
// import CartApp from '../components/cart.vue'
// import NameApp from '../App.vue'
import { createWebHistory, createRouter } from "vue-router";
// import App from '../App.vue'
const routes = [
    // {
    //     path:"/",
    //     name : "Home",
    //     component : NameApp
    // },
    // {
    //     path:"/cart",
    //     name : "CartApp",
    //     component : CartApp
    // }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router
