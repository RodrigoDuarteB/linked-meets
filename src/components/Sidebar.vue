<template>
    <div class="bg-primary-light w-40 space-y-2 p-2" :class="hide()">
        <!-- logo -->
        <div class="flex space-x-3 items-center">
            <IconButton icon="angle-double-left" size="md" title="Esconder" @click="hidden = !hidden"/>
           <!--  <Fa icon="align-left"/> -->
            <p>Linked Subjects</p>
        </div>
        <hr>
        <!-- nav -->
        <nav class="grid space-y-2">
            <slot></slot>
        </nav>
    </div>
</template>

<script>
    import IconButton from './style/IconButton.vue'
    export default {
        data(){
            return {
                hidden: false
            }
        },
        components: {
            IconButton
        },
        methods: {
            hide(){
                if(this.hidden){
                    return 'absolute -translate-x-20'
                }
                return 'relative translate-x-0'
            }
        }
    }
</script>

