<template>
    <div class="mt-4">
        <label for="price" class="block text-sm font-medium text-gray-9"
            >Label</label
        >
        <div class="mt-1 relative">
            <div
                class="
                    absolute
                    inset-y-0
                    left-0
                    pl-3
                    flex
                    items-center
                    pointer-events-none
                "
            ></div>
            <input
                name="price"
                id="price"
                class="
                    block
                    bg-gray-2
                    px-5
                    py-2
                    border-4 border-gray-11
                    focus:border-green focus:border-b-4
                    flex-1
                    sm:text-sm
                    appearance-none
                    outline-none
                "
                placeholder="Place holder text"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'TextInput',
    props: {
        label: {
            type: String,
            default: 'Label text',
        },
        placeholder: {
            type: String,
            default: 'Placeholder text',
        },
        name: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            default: '',
        },
    },
})
</script>

<style></style>
