<template>
    <div class="container" :class="{ focused: focused }">
        <p class="label">{{ label }}</p>
        <input class="input" @focus="focused = true" @blur="focused = false" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'InputTextField',
    data() {
        return {
            focused: false,
        }
    },
    props: {
        label: {
            type: String,
            default: 'Label',
        },
    },
})
</script>
<style lang="scss" scoped>
.container {
    margin-bottom: 5px;
    margin-top: 5px;
}
.input {
    outline: none;
    border: none;
    border-bottom: 3px solid $grey;
    border-top: 3px solid transparent;

    font-size: 14px;
    font-weight: 600;
    padding: 5px 9px 5px 9px;
    background-color: $grey--light;
}
.container.focused .input {
    border: 3px solid $cyan;
}
.label {
    font-size: 12px;
    font-weight: 600;
}
</style>
