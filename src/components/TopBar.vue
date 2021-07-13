<template>
    <div class="w-full h-12 flex justify-between bg-primary-light sticky top-0">
        <div class="flex-1 draggable w-full h-full flex items-center">
            <h1 class="p-4 text-2xl font-semibold">Linked Meets</h1>
        </div>
        <div class="h-full flex items-center">
            <IconButton title="Minimizar" icon="window-minimize" size="sm" @click="minimize"/>
            <IconButton title="Maximizar" :icon="isMaximized ? 'compress' : 'window-maximize'" size="sm" @click="maximize"/>
            <IconButton title="Cerrar" icon="times" size="sm" @click="close"/>
        </div>
    </div>
</template>

<script>
    import IconButton from './style/IconButton.vue'
    const { ipcRenderer } = window.require('electron')
    export default {
        components: {
            IconButton
        },
        data(){
            return {
                isMaximized: false
            }
        },
        methods: {
            close(){
                ipcRenderer.send('closeApp')
            },
            minimize(){
                ipcRenderer.send('minimizeApp')
            },
            maximize(){
                ipcRenderer.send('maximizeApp')
                this.isMaximized = !this.isMaximized
            }
        }
    }
</script>
