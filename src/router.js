import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login'
import HelloWorld from './components/HelloWorld'
import Users from './components/Users'

const routes = [
    {path: '/', name: 'Login', component: Login},
    {path: '/hello-world', name: 'HelloWorld', component: HelloWorld},
    {path: '/users', name: 'Users', component: Users},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
