<template>
    <div>
        <h1>My meets</h1>
        <Loading v-if="meets.length <= 0"/>
        <Meet v-else v-for="meet in meets" v-bind:key="meet.id" :data="meet"/>
        <NewMeet />
    </div>
</template>

<script>
    import { store } from '../../../firebase.config'
    import Loading from '../style/Loading.vue'
    import Meet from './Meet.vue'
    import NewMeet from './NewMeet.vue'

    export default {
        components: {
            Meet, Loading, NewMeet
        },
        data(){
            return {
                meets: []
            }
        },
        created() {
            //fetch user's meets
            store.collection('meets').where('user_id', '==', this.$route.params.id)
            .onSnapshot(({ docs }) => {
                this.meets = []
                docs.map(doc => {
                    this.meets.push({id: doc.id, ...doc.data()}) 
                })
            })
        },
        mounted() {
            
        }
    }
</script>
