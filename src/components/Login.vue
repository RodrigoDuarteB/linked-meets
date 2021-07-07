<template>
    <Center>
        <Card>
            <div class="">
                <h2>Login</h2>
                <div class="grid grid-rows-2">
                    <div class="">
                        <label for="">Email</label>
                        <input type="text">
                    </div>

                    <div class="">
                        <label for="">Contraseña</label>
                        <input type="text">
                    </div>
                </div>
                <button @click="register">Registrarse</button>
                <button @click="login">Acceder</button>
                <button @click="loginWithGoogle">Acceder con Google</button>
            </div>
        </Card>
    </Center>
</template>

<script>
    import Center from './position/Center.vue'
    import Card from './style/Card.vue'
    import { auth } from './../../firebase.config'
    import firebase from 'firebase/app'

    export default {
        components: {
            Center, Card
        },
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            register(){
                auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(r => console.log('registered'))
                .catch(e => console.log(e))
            },

            login(){
                auth.signInWithEmailAndPassword(this.email, this.password)
                .then(r => console.log('logged'))
                .catch(e => console.log(e))
            },

            loginWithGoogle(){
                auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(r => console.log('logged'))
                .catch(e => console.log(e))
            }
        }
    }
</script>
