import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TanyaMentor from '../views/Mentor.vue'
import Artikel from "../views/ArticlePage.vue"
import Login from '../views/UserLogin.vue'
import Register from '../views/UserRegister.vue'

import hasLogin from '../middlewares/hasLogin'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/masuk',
        name: 'Login',
        component: Login,
        meta: {
            middleware: hasLogin
        }
    },
    {
        path: '/daftar',
        name: 'Register',
        component: Register,
        meta: {
            middleware: hasLogin
        }
    },
    {
        path: '/layanan',
        name: 'TanyaMentor',
        component: TanyaMentor
    },
    {
        path: '/artikel',
        name: 'Artikel',
        component: Artikel
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router