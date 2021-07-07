<template>
    <div class="w-full h-8 flex justify-between border-b">
        <div class="flex-1 draggable w-full h-full flex items-center">
            <h1 class="p-4">Linked Subjects</h1>
        </div>
        <div class="h-full flex items-center">
            <button class="h-full hover:bg-gray-400" @click="minimize" title="Minimizar">Minimizar</button>
            <button class="h-full hover:bg-gray-400" @click="maximize" title="Maximizar">Maximizar</button>
            <button class="h-full hover:bg-gray-400" @click="close" title="Cerrar">Cerrar</button>
        </div>
    </div>
</template>

<script>
    const { ipcRenderer } = window.require('electron')
    export default {
        methods: {
            close(){
                ipcRenderer.send('closeApp')
            },
            minimize(){
                ipcRenderer.send('minimizeApp')
            },
            maximize(){
                ipcRenderer.send('maximizeApp')
            }
        }
    }
</script>
