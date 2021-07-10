<template>
    <div class="flex">
        <div class="w-3 rounded-tl-md" :class="handleType().strong"/>
        <div class="p-1 w-full h-auto rounded-br-md" :class="handleType().bg">
            <ul>
                <li v-for="message in messages" v-bind:key="message.text" class="text-sm" :class="handleType().text">
                    <span class="text-2xl mr-1">*</span><strong>{{ message.text }}</strong>
                    <hr class="my-1"/>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
    export default {
        props: ['type', 'messages'],
        methods: {
            handleType(){
                switch(this.$props.type){
                    case 'error':
                        return {strong: 'bg-red-800', bg: 'bg-red-500', text: 'text-red-100'}
                    case 'sucess':
                        return {strong: 'bg-red-800', bg: 'bg-green-500', text: 'text-green-100'}
                }
            }
        }
    }
</script>
