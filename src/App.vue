<template>
    <home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Home from './pages/Home.vue'

export default defineComponent({
    name: 'App',
    components: {
        Home,
    },
})
</script>

<style lang="scss">
@include type(14px, 18px);
</style>
