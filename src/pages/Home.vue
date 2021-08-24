<template>
    <div class="container mx-auto">
        <text-input />
        <styled-button title="medium button" color="blue" />
        <styled-button title="medium button" color="yellow" />
        <styled-button title="medium button" color="green" />
        <styled-button title="medium button" color="gray" />
        <styled-button title="small button" color="yellow" size="small" />
        <styled-button title="medium button" color="green" size="medium" />
        <styled-button title="large button" color="blue" size="large" />
        <icon-button title="Medium button" icon="accept" />
        <icon-button title="Medium button" icon="decline" />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import IconButton from '../components/icon-button/IconButton.vue'
import StyledButton from '../components/styled-button/StyledButton.vue'

import TextInput from '../components/text-input/TextInput.vue'
export default defineComponent({
    components: { TextInput, StyledButton, IconButton },
    name: 'Home',
})
</script>
