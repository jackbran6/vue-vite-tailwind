<template>
    <div class="link-container">
        <p class="link" v-bind:class="[color, size]">{{ label }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Link',

    props: {
        label: {
            type: String,
            default: 'This is more a link than a button',
        },
        color: {
            requiured: false,
            type: String,
            default: 'blue',
            validator: (value) => {
                return ['green', 'yellow', 'black'].includes(value)
            },
        },
        size: {
            requiured: false,
            type: String,
            default: 'medium',
            validator: (value) => {
                return ['small', 'medium', 'large'].includes(value)
            },
        },
    },
})
</script>
<style lang="scss" scoped>
.container {
    margin-bottom: 5px;
    margin-top: 5px;
    display: flex;
}
.black {
    border-bottom: 3px solid #000;
    flex: wrap;
}
.green {
    border-bottom: 3px solid $cyan;
}
.yellow {
    border-bottom: 3px solid $yellow;
}
</style>
