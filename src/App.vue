<template>
    <TopBar />
    <Auth>
      <div class="grid">
       <!-- Navbar -->
        <Navbar>
          <template v-slot:default>
            <NavbarLink text="Home" exact to="/"/>
            <NavbarLink v-if="!isLogged" text="Login" to="/login"/>
            <NavbarLink v-if="isLogged" text="Meets" :to="`/${user_id}/meets`"/>
          </template>
          <template v-slot:right v-if="isLogged">
              <p>{{ user.displayName ? user.displayName : user.email }}</p>
              <button class="btn bg-secondary-dark text-primary" @click="signOut">Logout</button>
          </template>
        </Navbar>
        <!-- content -->
        <router-view class="p-4"></router-view>
      </div>    
    </Auth>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import Auth from './components/auth/Auth.vue'
  import Navbar from './components/Navbar.vue'
  import NavbarLink from './components/NavbarLink.vue'

  import { auth } from '../firebase.config'
  import { logout } from './utils/notifications'

  export default {
    components: {
      TopBar, Auth, Navbar, NavbarLink
    },

    data() {
      return {
        isLogged: false,
        user: null,
        user_id: ''
      }
    },

    methods: {
      signOut(){
        auth.signOut()
        .then(r => {
          console.log('unsigned!')
          this.$router.push('/login')
          this.user = null
          logout()
        })
        .catch(e => console.log(e))
      }
    },

    mounted() {
      
    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    created() {
      auth.onAuthStateChanged(user => {
        if(user){
          this.isLogged = true
          this.user = user
          this.user_id = user.uid
        }else{
          this.isLogged = false
        }
      })
    },
    beforeMount() {
      console.log("beforeMount")
    },
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    updated() {
      console.log("updated")
    },
    beforeDestroy() {
      console.log("beforeDestroy")
    },
    destroyed() {
      console.log("destroyed")
    }
  }
</script>
