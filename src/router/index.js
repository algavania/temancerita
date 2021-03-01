import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TanyaMentor from '../views/Mentor.vue'
import Artikel from "../views/ArticlePage.vue"
import Forum from "../views/Forum.vue"
import Login from '../views/UserLogin.vue'
import Register from '../views/UserRegister.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    // {
    //     path: '/masuk',
    //     name: 'Login',
    //     component: Login
    // },
    // {
    //     path: '/daftar',
    //     name: 'Register',
    //     component: Register
    // },
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
    {
        path: '/informasi',
        name: 'Forum',
        component: Forum
    },
    {
        path: '/userprofile',
        name: 'UserProfile',
        component: UserProfile
    },
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router