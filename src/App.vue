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
