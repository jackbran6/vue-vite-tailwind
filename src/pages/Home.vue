<template>
    <div class="container mx-auto">
        <text-input />
        <styled-button />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import StyledButton from '../components/styled-button/StyledButton.vue'
import TextInput from '../components/text-input/TextInput.vue'
export default defineComponent({
    components: { TextInput, StyledButton },
    name: 'Home',
})
</script>
