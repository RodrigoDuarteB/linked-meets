<template>
    <slot v-if="isReady"></slot>
    <Loading v-else/>
</template>

<script>
    import Loading from '../style/Loading.vue'
    import { auth } from '../../../firebase.config'
    export default {
        components: {
            Loading
        },
        data () {
            return {
                isReady: false
            }
        },
        created() {
            auth.onAuthStateChanged(user => this.isReady = true)
        }
    }
</script>
