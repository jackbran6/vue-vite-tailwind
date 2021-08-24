<template>
    <div class="mt-4">
        <button
            class="justify-center flex hover:shadow-lg py-3 px-5"
            :class="{
                'bg-dark-blue focus:bg-blue': icon == 'accept',
                'bg-white border-2': icon == 'decline',
            }"
        >
            <p class="text-white">{{ this.title }}</p>
        </button>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'IconButton',
    props: {
        title: { requiured: true, type: String },
        icon: {
            requiured: false,
            type: String,
            default: 'accept',
            validator: (value) => {
                return ['accept', 'decline'].includes(value)
            },
        },
    },
})
</script>

<style></style>
