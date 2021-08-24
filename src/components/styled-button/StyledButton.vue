<template>
    <div class="mt-4">
        <button
            class="button"
            :class="{
                'bg-dark-blue focus:bg-blue': color == 'primary',
                'bg-green focus:bg-dark-green': color == 'secondary',
                'bg-light-yellow focus:bg-yellow': color == 'tertiary',
                'bg-gray-10 focus:bg-gray-9': color == 'quaternary',
                'py-2 px-2': size == 'small',
                'py-3 px-5': size == 'medium',
                'py-5 px-5': size == 'large',
            }"
        >
            <p class="text-white">{{ this.title }}</p>
        </button>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'StyledButton',
    props: {
        title: { requiured: true, type: String },
        color: {
            requiured: false,
            type: String,
            default: 'primary',
            validator: (value) => {
                return [
                    'primary',
                    'secondary',
                    'tertiary',
                    'quaternary',
                ].includes(value)
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
.button {
    background-color: $creamyellow;
}
</style>
