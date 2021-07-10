<template>
    <slot v-if="isReady"></slot>
    <div v-else>
        <h1>Cargando...</h1>
    </div>
</template>

<script>
    import { auth } from '../../../firebase.config'
    export default {
        data () {
            return {
                isReady: false
            }
        },
        mounted() {
            auth.onAuthStateChanged(user => this.isReady = true)
        }
    }
</script>
