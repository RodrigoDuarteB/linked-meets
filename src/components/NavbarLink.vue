<template>
    <router-link class="p-3 text-center hover:bg-secondary-dark hover:text-primary-light transition duration-200" active-class="bg-primary">{{ text }}</router-link>
</template>

<script>
    export default {
        props: ['text']
    }
</script>
