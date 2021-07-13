import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Meets from './components/meets/Meets'
import { auth } from '../firebase.config'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login, meta: {requiresNoAuth: true}},
    {path: '/:id/meets', name: 'Meets', component: Meets, meta: {requiresAuth: true}},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const requiresNoAuth = to.matched.some(record => record.meta.requiresNoAuth)
    //const isAuth = auth.currentUser
    auth.onAuthStateChanged(user => {
        if(requiresAuth && !user){
            next('/login')
        }else if(requiresNoAuth && user){
            next('/')
        }else{
            next()
        }
    })
    /* if(requiresAuth && !isAuth){
        next('/login')
    }else if(requiresNoAuth && isAuth){
        next('/')
    }else{
        next()
    } */
})

export default router
