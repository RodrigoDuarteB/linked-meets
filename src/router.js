import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'
import Home from './components/Home'
import { auth } from '../firebase.config'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/login', name: 'Login', component: Login},
    {path: '/hello-world', name: 'HelloWorld', component: HelloWorld},
    {path: '/users', name: 'Users', component: Users, meta: {requiresAuth: true}},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuth = auth.currentUser
    if(requiresAuth && !isAuth){
        next('/login')
    }else{
        next()
    }
})

export default router
