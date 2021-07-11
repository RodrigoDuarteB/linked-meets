import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import Home from './components/Home'
import Subjects from './components/subjects/Subjects'
import { auth } from '../firebase.config'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login, meta: {requiresNoAuth: true}},
    {path: '/hello-world', name: 'HelloWorld', component: HelloWorld},
    {path: '/users', name: 'Users', component: Users, meta: {requiresAuth: true}},
    {path: '/:id/subjects', name: 'Subjects', component: Subjects, meta: {requiresAuth: true}},
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
