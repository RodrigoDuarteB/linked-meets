<template>
  <h1 v-if="state.count >= 1">{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>
  <div class="grid grid-rows-4">
    <p>count is: {{ state.count }}</p>
    <button type="button" @click="state.count++; state.action = 'sumando'">add</button>
    <button type="button" @click="state.count--; state.action = 'restando'">res</button>
    <p v-if="state.action">Estas {{ state.action }}</p>
  </div>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <input type="text" v-model="msg" class="text-center border-2 border-gray-900 rounded-md">
</template>

<script setup>
  import { reactive } from 'vue'

  defineProps({
    msg: String
  })

  const state = reactive({ count: 0, action: '' })
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>
