<template>
    <TopBar />
    <Auth>
      <div class="grid">
        <!-- sidebar -->
        <!-- <Sidebar class="absolute inset-y-0 left-0 transform transition duration-200 ease-in-out border-t border-secondary-dark">
          <NavLink text="Home" exact to="/"/>
          <NavLink text="Login" to="/login"/>
          <NavLink text="Users" to="/users"/>
          <NavLink text="HelloWorld" to="/hello-world"/>
        </Sidebar> -->

        <!-- Navbar -->
        <Navbar>
          <div class="flex justify-between">
            <div>
              <NavbarLink text="Home" exact to="/"/>
              <NavbarLink v-if="!isLogged" text="Login" to="/login"/>
              <NavbarLink v-if="isLogged" text="Subjects" to="/:id/subjects"/>
            </div>
            <button v-if="isLogged" class="btn bg-secondary-dark h-12"   @click="signOut">Logout</button>
          </div>
        </Navbar>
        <!-- content -->
        <router-view class="flex-1 p-4"></router-view>
      </div>    
    </Auth>
</template>

<script>
  import TopBar from './components/TopBar.vue'
  import Auth from './components/auth/Auth.vue'
  import Sidebar from './components/Sidebar.vue'
  import NavLink from './components/style/NavLink.vue'
  import Navbar from './components/Navbar.vue'
  import { auth } from '../firebase.config'
  import NavbarLink from './components/NavbarLink.vue'

  export default {
    components: {
      TopBar, Auth, Sidebar, NavLink, Navbar, NavbarLink
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
