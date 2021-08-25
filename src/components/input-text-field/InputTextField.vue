<template>
    <div class="container" :class="{ focused: focused, error: error }">
        <p
            :class="
                this.error
                    ? 'error-label'
                    : disabled
                    ? 'disabled-label'
                    : 'label'
            "
        >
            {{ label }}
        </p>
        <input
            :disabled="disabled"
            @focus=";[(focused = true), (error = false)]"
            @blur="focused = false"
            :class="
                error ? 'input-error' : disabled ? 'disabled-input' : 'input'
            "
        />
        <div class="error-container">
            <p v-if="error" class="error-message">Error message here</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'InputTextField',
    data() {
        return {
            focused: false,
            error: false,
            disabled: false,
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
.input-error {
    outline: none;
    border: none;
    border: 2px solid $red;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 9px 5px 9px;
    background-color: $grey--light;
}
.label {
    font-size: 12px;
    font-weight: 600;
}
.error-container {
    min-height: 20px;
}
.error-message {
    font-size: 12px;
    font-weight: 600;
    color: $red;
}
.error-label {
    font-size: 12px;
    font-weight: 600;
    color: $red;
}
.disabled-label {
    opacity: 0.4;
    font-size: 12px;
    font-weight: 600;
}
.disabled-input {
    outline: none;
    border: none;
    border-bottom: 3px solid $grey;
    border-top: 3px solid transparent;
    font-size: 14px;
    font-weight: 600;
    padding: 5px 9px 5px 9px;
    background-color: $grey--light;
    opacity: 0.4;
}
</style>
