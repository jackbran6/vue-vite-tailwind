<template>
    <div class="container">
        <button v-bind:class="[color, size]">
            <p class="text">{{ this.title }}</p>
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
            default: 'blue',
            validator: (value) => {
                return ['blue', 'yellow', 'green', 'gray'].includes(value)
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

<style lang="scss">
.container {
    margin: 10px;
}
.text {
    color: $white;
    font-weight: 600;
}

.green {
    background-color: $cyan;
    cursor: pointer;

    :hover {
        background-color: $dark--green;
    }
}
.blue {
    background-color: $blue;
    cursor: pointer;
    :hover {
        background-color: $dark--blue;
    }
}
.yellow {
    background-color: $creamy--yellow;
    cursor: pointer;
    :hover {
        background-color: $yellow;
    }
}
.gray {
    background-color: $grey;
    cursor: pointer;
    :hover {
        background-color: $grey--dark;
    }
}
.small {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 48px;
    padding-bottom: 5px;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
}
.medium {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 48px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
}
.large {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 48px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
}
</style>
