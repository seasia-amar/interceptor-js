import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import login from '../components/login.vue'

// 1. Define route components.
// These can be imported from other files


// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.

export  const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/register', component: HelloWorld },
        { path: '/login', component: login },
    ]
})
