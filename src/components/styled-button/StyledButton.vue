<template>
    <div class="mt-4">
        <div class="bg-blue-black">
            <h1>{{ this.title }}</h1>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'StyledButton',
    props: {
        title: {
            type: String,
            default: 'button',
        },
    },
})
</script>

<style></style>
