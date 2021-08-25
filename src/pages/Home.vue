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
        <input-text-field />
        <select-field :labelName="'Testing'" />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import IconButton from '../components/icon-button/IconButton.vue'
import InputTextField from '../components/input-text-field/InputTextField.vue'
import SelectField from '../components/select-field/SelectField.vue'
import StyledButton from '../components/styled-button/StyledButton.vue'

export default defineComponent({
    components: { StyledButton, IconButton, InputTextField, SelectField },
    name: 'Home',
})
</script>
