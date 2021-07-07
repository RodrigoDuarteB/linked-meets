<template>
    <div>
        <h1>Users</h1>
        <Usuario v-for="user in users" v-bind:key="user.id" :name="user.name" :username="user.username" :email="user.email"/>  
    </div>
</template>

<script>
    import Usuario from './Usuario.vue'
    import axios from 'axios'

    export default {
        components: {
            Usuario
        },
        data() {
            return {
                users: []
            }
        },
        methods: {
            getUsers(){
                axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => this.users = res.data)
                .catch(e => console.log(e))
            },
        },
        mounted() {
            this.getUsers()
        }
    }
</script>
