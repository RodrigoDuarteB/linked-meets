<template>
    <Center class="mt-4">
        <Card>
            <h2 class="text-center text-xl font-semibold">Login</h2>
            <Alert :messages="errors" type="error" v-show="errors.length > 0" class="my-3"/>
            <div class="grid grid-rows-2">
                <FormField name="Email" type="text" :data="getEmail"/>
                <FormField name="Contraseña" type="password" :data="getPassword"/>
            </div>
            <div class="grid mt-4">
                <Button text="Registrarse" class="mb-2 hover:bg-primary-light" @click="register"/>
                <Button text="Acceder" class="mb-2 hover:bg-primary-light" @click="login"/>
                <Button text="Acceder con Google" class="hover:bg-primary-light"/>
            </div>
        </Card>
    </Center>
</template>

<script>
    import Center from './position/Center.vue'
    import Card from './style/Card.vue'
    import Alert from './style/Alert.vue'
    import Button from './style/Button.vue'
    import FormField from './style/FormField.vue'

    import { auth } from './../../firebase.config'
    import firebase from 'firebase/app'

    export default {
        components: {
            Center, Card, Alert, Button, FormField
        },
        data() {
            return {
                email: '',
                password: '',
                errors: []
            }
        },
        methods: {
            handleErrors(e){
                this.resetErrors()
                //email
                if(e.code == "auth/invalid-email"){
                    this.errors = [...this.errors, {text: "El formato de email es inválido"}]
                }
                if(e.code == "auth/user-not-found"){
                    this.errors = [...this.errors, {text: "El email no está registrado en el sistema, registrese primero"}]
                }
                if(e.code == "auth/email-already-in-use"){
                    this.errors = [...this.errors, {text: "El email ya está registrado en el sistema, ingrese con el botón acceder"}]
                }
                //password
                if(e.code == "auth/weak-password" || this.password.length < 6){
                    this.errors = [...this.errors, {text: "La contraseña debe tener al menos 5 caracteres"}]
                }
                if(e.code == "auth/wrong-password"){
                    this.errors = [...this.errors, {text: "La contraseña es incorrecta, no coincide"}]
                }
            },

            resetErrors(){
                this.errors = []
            },

            register(){
                auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(r => {
                    console.log('registered')
                    this.$router.push('/')
                })
                .catch(e => {
                    console.log(e)
                    this.handleErrors(e)
                })
            },

            login(){
                auth.signInWithEmailAndPassword(this.email, this.password)
                .then(r => {
                    console.log('logged')
                    this.$router.push('/')
                })
                .catch(e => {
                    console.log(e)
                    this.handleErrors(e)
                })        
            },

            loginWithGoogle(){
                auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(r => console.log('logged'))
                .catch(e => console.log(e))
            },

            getEmail(email){
                this.email = email
            },

            getPassword(pass){
                this.password = pass
            }
        },
        watch: {
            email(value, oldValue){
                this.resetErrors()
            },
            password(value, oldValue){
                this.resetErrors()
            },
        }
    }
</script>
