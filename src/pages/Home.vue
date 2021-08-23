<template>
    <h1>Basic setup with styling and nonsense removed</h1>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
    name: 'Home',
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
    setup: () => {
        const count = ref(0)
        return { count }
    },
})
</script>
