<template>
  <div>
    <TopBar />
    <Auth>
      <button v-if="isLogged" class="btn bg-secondary-dark" @click="signOut">Logout</button>
      <div class="relative min-h-screen flex">
        <!-- sidebar -->
        <Sidebar class="absolute inset-y-0 left-0 transform transition duration-200 ease-in-out border-t border-secondary-dark">
          <NavLink text="Home" exact to="/"/>
          <NavLink text="Login" to="/login"/>
          <NavLink text="Users" to="/users"/>
          <NavLink text="HelloWorld" to="/hello-world"/>
        </Sidebar>
        <!-- content -->
        <router-view class="flex-1 p-4"></router-view>
      </div>    
    </Auth>
  </div>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import Auth from './components/auth/Auth.vue'
  import Sidebar from './components/Sidebar.vue'
  import NavLink from './components/style/NavLink.vue'
  import { auth } from '../firebase.config'

  export default {
    components: {
      TopBar, Auth, Sidebar, NavLink
    },

    data() {
      return {
        isLogged: false
      }
    },

    methods: {
      signOut(){
        auth.signOut()
        .then(r => {
          console.log('unsigned!')
          this.$router.push('/login')
        })
        .catch(e => console.log(e))
      }
    },
    mounted() {
      auth.onAuthStateChanged(user => user ? this.isLogged = true : this.isLogged = false)
    }   
  }
</script>

