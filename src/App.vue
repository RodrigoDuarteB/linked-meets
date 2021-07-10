<template>
  <div>
    <TopBar />
    <Auth>
      <div class="space-x-2">
        <router-link exact to="/">Home</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/hello-world">Hello-world</router-link>
        <button v-if="isLogged" class="btn bg-secondary-dark" @click="signOut">Logout</button>
      </div>
      <router-view></router-view>
    </Auth>
  </div>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import Auth from './components/auth/Auth.vue'
  import { auth } from '../firebase.config'

  export default {
    components: {
      TopBar, Auth
    },

    data() {
      return {
        isLogged: auth.currentUser
      }
    },

    methods: {
      signOut(){
        auth.signOut()
        .then(r => {
          console.log('unsigned!')
          this.$router.push('/')
        })
        .catch(e => console.log(e))
      }
    },
    mounted() {
      
    }   
  }
</script>

