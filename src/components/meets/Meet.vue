<template>
    <ul class="p-4 border rounded-md w-full my-2">
        <li>Nombre: {{ data.title }}</li>
        <li>Descripcion: {{ data.description }}</li>
        <li>Plataforma: {{ data.platform }}</li>
        <a :href="data.link" target="_blank" @click="minimize">Enlace: {{ data.link }}</a>
    </ul>
</template>

<script>
    import { minimize } from '../../utils/window'
    export default {
        props: ['data'],
        methods: {
            minimize() {
                minimize()
            }
        }
    }
</script>
