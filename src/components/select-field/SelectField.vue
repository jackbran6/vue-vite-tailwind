<template>
    <div>
        <label class="label" :for="inputId">{{ labelName }}</label>

        <select
            :id="inputId"
            class="select select--icon select--default"
            :class="className"
            :name="fieldName"
            :required="required"
            :multiple="multiple"
            :data-ajax="isAjax"
            :data-key="isAjax && defaultKey"
            :value="value"
            :data-placeholder="
                multiple && placeholder.length > 0 && placeholder
            "
            :disabled="disabled"
            @input="$emit('input', $event.target.value)"
        >
            <option
                v-if="!multiple || (!multiple && placeholder.length > 0)"
                value=""
                disabled
                :selected="defaultKey.length < 1"
            >
                {{ placeholder }}
            </option>

            <!-- {{-- Field data WITHOUT default_key or defaul_keys --}} -->
            <template v-if="fieldData && defaultKeys.length < 1">
                <!-- @foreach($field_data as $key => $value) -->
                <option
                    v-for="(option, key) in fieldData"
                    :key="key"
                    :value="key"
                    :selected="defaultKey.length > 0 && defaultKey === key"
                >
                    {{ option }}
                </option>
            </template>

            <!-- {{-- Field data with MULTIPLE default_keys --}} -->
            <template v-else-if="fieldData && defaultKeys.length > 0">
                <option
                    v-for="(option, key) in fieldData"
                    :key="key"
                    :value="key"
                    :selected="defaultKeys.includes(key)"
                    :disabled="key === '--'"
                >
                    {{ option }}
                </option>
            </template>

            <!-- {{-- Field data with SINGLE default_key --}} -->
            <template v-else-if="fieldData && defaultKey.length > 0">
                <option
                    v-for="(option, key) in fieldData"
                    :key="key"
                    :value="key"
                    :selected="defaultKey === key"
                    :disabled="'--' === key"
                >
                    {{ option }}
                </option>
            </template>
        </select>
        <span v-if="errors.length > 0" class="field-after-error">
            {{ errors[0] }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        inputId: {
            type: String,
            default: '',
        },
        labelName: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
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
        multiple: {
            type: Boolean,
            default: false,
        },
        isAjax: {
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
        value: {
            type: [String, Array],
            default: '',
        },
        className: {
            type: String,
            default: '',
        },
        defaultKey: {
            type: String,
            default: '',
        },
        defaultKeys: {
            type: Array,
            default: () => [],
        },
        fieldData: {
            type: [Object, Array],
            default: () => ({}),
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
