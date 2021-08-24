<template>
    <div>
        <label class="label" :for="inputId">{{ labelName }}</label>
        <input
            :id="inputId"
            :class="[
                'text',
                errors.length > 0 && 'text--error',
                errors.length > 0 && 'text--icon',
                disabled && 'disabled',
            ]"
            :type="type"
            :name="fieldName"
            :placeholder="placeholder"
            :required="required"
            :value="value"
            :disabled="disabled"
            :maxlength="maxlength"
            @input="$emit('input', $event.target.value)"
        />
        <span v-if="errors.length > 0" class="field-after-error">
            {{ errors[0] }}
        </span>
        <div v-if="tooltip" class="tooltip--icon" data-status="helper">
            <span class="icon"></span>
        </div>
        <div v-if="tooltip" class="tooltip--message" data-status="helper">
            {{ tooltip }}
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    props: {
        inputId: {
            type: String,
            default: 'text',
        },
        labelName: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: '',
        },
        // fieldName: {
        //     type: String,
        //     default() {
        //         return this.inputId
        //     },
        // },
        placeholder: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        errors: {
            type: Array,
            default: () => [],
        },
        tooltip: {
            type: String,
            default: '',
        },
        tooltipStatus: {
            type: String,
            default: '',
        },
        maxlength: {
            type: Number,
            default: 255,
        },
        value: {
            type: [String, Number],
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
})
</script>

<style lang="scss" scoped>
.tooltip {
    border-radius: 5px;
    line-height: 20px;
    padding: 0.5rem;
    position: absolute;
    z-index: 300;
}
.tooltip--message,
.tooltip--icon {
    border-radius: 5px;
    right: 9px;
    top: 37px;
    transition: background-color ease 200ms;
    z-index: 300;
}
.tooltip--message {
    background-repeat: no-repeat;
    border-radius: 5px;
    display: none;
    font-size: 13px;
    left: 7px;
    line-height: 18px;
    padding: 0.7rem;
    padding-top: 32px;
    padding-top: 35px;
    position: absolute;
}
.tooltip--icon {
    height: 25px;
    position: absolute;
    right: 9px;
    width: 25px;
    z-index: 20;
    :hover {
        cursor: pointer;
    }
    .icon {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 12px;
        height: 100%;
        position: absolute;
        transform-origin: 50% 50%;
        width: 100%;
    }
}
.tooltip--icon .icon,
.tooltip--message {
    background-size: 12px;
}
</style>
