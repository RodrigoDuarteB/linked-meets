<template>
    <div class="w-full h-12 flex justify-between bg-primary-light">
        <div class="flex-1 draggable w-full h-full flex items-center">
            <h1 class="p-4 text-2xl font-semibold">Linked Subjects</h1>
        </div>
        <div class="h-full flex items-center">
            <button class="window-btn hover:bg-gray-400" @click="minimize" title="Minimizar">
                <Fa icon="window-minimize" size="sm"/>
            </button>
            <button class="window-btn hover:bg-gray-400" @click="maximize" title="Maximizar">
                <Fa icon="window-maximize" size="sm" v-if="!isMaximized"/>
                <Fa icon="compress" size="sm" v-if="isMaximized"/>
            </button>
            <button class="window-btn hover:bg-gray-400" @click="close" title="Cerrar">
                <Fa icon="times" size="sm"/>
            </button>
        </div>
    </div>
</template>

<script>
    const { ipcRenderer } = window.require('electron')
    export default {
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
