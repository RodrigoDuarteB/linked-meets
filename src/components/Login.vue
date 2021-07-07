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
            </div>
        </Card>
    </Center>
</template>

<script>
    import Center from './position/Center.vue'
    import Card from './style/Card.vue'

    export default {
        methods: {
            register(){
                
            },

            login(){

            },

            loginWithGoogle(){

            }
        }
    }
</script>
