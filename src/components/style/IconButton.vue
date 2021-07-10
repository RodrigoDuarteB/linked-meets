<template>
    <button class="window-btn hover:bg-gray-400 transition duration-150" :title="title">
        <Fa :icon="icon" :size="size"/>
    </button>
</template>

<script>
    export default {
        props: ['title', 'icon', 'size']
    }
</script>
