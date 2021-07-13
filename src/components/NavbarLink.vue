<template>
    <router-link class="h-full p-3 text-center hover:bg-secondary-dark hover:text-primary-light transition duration-200" active-class="border-b-4 border-teal-200">{{ text }}</router-link>
</template>

<script>
    export default {
        props: ['text']
    }
</script>
