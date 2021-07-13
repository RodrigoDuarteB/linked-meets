<template>
    <router-link class="p-2 text-center hover:bg-secondary-dark rounded-md hover:text-primary-light transition duration-200">
        {{ text }}
    </router-link>
</template>

<script>
    export default {
        props: ['text']
    }
</script>

