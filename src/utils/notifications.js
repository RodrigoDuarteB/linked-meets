import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

const logout = () => createToast({
    title: 'Desvínculado Correctamente',
    description: 'redirigiendo..'
},{
    timeout: 2000,
    showIcon: true,
    position: 'bottom-right',
    type: 'danger',
})
export { logout }


const login = () => createToast({
    title: 'Logeado correctamente!',
    description: 'redirigiendo..'
},{
    timeout: 2000,
    showIcon: true,
    position: 'bottom-right',
    type: 'success',
})
export { login }


const meetSaved = () => createToast({
    title: 'Reunión Creada Correctamente!',
},{
    timeout: 2000,
    showIcon: true,
    position: 'bottom-center',
    type: 'success',
})
export { meetSaved }