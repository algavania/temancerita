import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/UserLogin.vue'
import Register from '../views/UserRegister.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/masuk',
        name: 'Login',
        component: Login
    },
    {
        path: '/daftar',
        name: 'Register',
        component: Register
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router