<template>
  <div class="">
    <Header />
    <h1>Hola</h1>
    <User v-for="user in users" v-bind:key="user.id" :name="user.name" :username="user.username" :email="user.email"/>
    <Login />
    <!-- <Footer /> -->
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import User from './components/Usuario.vue'
  import Login from './components/Login.vue'

  import axios from 'axios'

  export default {
    components: {
      Header, Footer, User, Login
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

