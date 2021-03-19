import Vue from 'vue'

import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TanyaMentor from '../views/Mentor.vue'
import Artikel from "../views/ArticlePage.vue"
import Forum from "../views/Forum.vue"
import Login from '../views/UserLogin.vue'
import Register from '../views/UserRegister.vue'
import UserProfile from '../views/UserProfile.vue'
import Mentoring from '../views/Mentoring.vue'
import PaymentPackage from '../views/PaymentPackage.vue'
import PembayaranRekening from '../views/PembayaranRekening.vue'
import ChatPatient from '../views/ChatPatient.vue'

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
    {
        path: '/informasi',
        name: 'Forum',
        component: Forum
    },
    {
        path: '/profile',
        name: 'UserProfile',
        component: UserProfile
    },
    {
        path: '/mentoring',
        name: 'Mentoring',
        component: Mentoring
    },
    {
        path: '/payment',
        name: 'Payment',
        component: PaymentPackage
    },
    {
        path: '/subscribe',
        name: 'Rekening',
        component: PembayaranRekening
    },
    {
        path: '/chat',
        name: 'Chat',
        component: ChatPatient
    },
]

const router = new VueRouter({
    routes,
    mode: "history",
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
})

export default router