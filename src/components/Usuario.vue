<template>
    <div class="p-4">
        <hr>
        <p>Nombre: <strong>{{ name }}</strong></p>    
        <p>Usuario: <strong>{{ username }}</strong></p>    
        <p>email: <strong>{{ email }}</strong></p>    
        <hr>
    </div>
</template>

<script setup>
    defineProps({
        name: String,
        username: String,
        email: String
    })
</script>
