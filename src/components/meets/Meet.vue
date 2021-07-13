<template>
    <ul class="p-4 border rounded-md w-full my-2">
        <li>Nombre: {{ data.title }}</li>
        <li>Descripcion: {{ data.description }}</li>
        <li>Plataforma: {{ data.platform }}</li>
        <li>Enlace: {{ data.link }}</li>
    </ul>
</template>

<script>
    export default {
        props: ['data']
    }
</script>
