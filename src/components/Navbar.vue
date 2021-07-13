<template>
    <div class="flex justify-between bg-primary-dark">
        <div>
            <slot></slot>
        </div>
        <div class="flex justify-between space-x-2 items-center">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
