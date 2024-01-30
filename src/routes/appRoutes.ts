import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import login from '../components/UserLogin.vue'

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

const router = createRouter({
    history: createWebHistory('/crud'),
    routes: [
      {
        path: "/register",
        name: "register",
        component: HelloWorld,
    
      },   
      {
        path: "/",
        name: "login",
        component: login,
      },   
    
    
    ]
})
export default router