<template>
    <div class="border-b border-green-100 hover:border-green-300 py-2 my-1">
        <label :for="name" class="hover:text-green-300">{{ name }}</label>
        <input class="appearance-none bg-transparent border-none w-full text-secondary p-2 leading-tight focus:outline-none focus:bg-primary-light rounded-md" :type="type" :placeholder="`Ingrese ${name}`" aria-label="Full name" :id="name" v-model="value"/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                value: ''
            }
        },
        props: ['type', 'name', 'data'],
        watch: {
            value(value){
                this.data(value)
            }
        }
    }
</script>

