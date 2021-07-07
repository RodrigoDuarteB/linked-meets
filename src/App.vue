<template>
  <div>
    <TopBar />    
    <div class="space-x-2">
      <router-link exact to="/">Login</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/hello-world">Hello-world</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import TopBar from './components/TopBar.vue'

  export default {
    components: {
      TopBar
    },

    data() {
      return {

      }
    },

    methods: {

    },

    mounted() {

    }   
  }
</script>

