<script setup>

const props = defineProps({
    type: {
        type: String,
        validator(value) {
            return ["text", "email"].includes(value)
        }
    },
    label: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    modelValue: String,
    modelModifiers: { default: () => ({}) }
})

defineEmits(['update:modelValue'])

</script>

<template>
    <div class="input-container">
        <label :for="id" class="input-label">{{ props.label }}</label>
        <input :type="props.type" :id="id" :placeholder="placeholder" :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)" />
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "sass:map";

@import "./components/assets/colors.scss";
@import "./components/assets/typography.scss";
@import "./components/assets/responsive.scss";

.input-container {
    width: 100%;

    @include respond-to('large') {
        width: auto;
    }
}

.input-label {
    display: block;

    margin-bottom: 8px;

    @extend %text-geologica-sm-medium;
    color: map-get($colors, "primary");
}

input {
    box-sizing: border-box;

    height: 48px;
    width: 100%;

    @include respond-to('large') {
        min-width: 320px;
    }

    padding: 0 14px;

    color: map-get($colors, "primary");
    border: 1px solid map-get($colors, "border");
    border-radius: 8px;

    @extend %text-opensans-md-regular;

    &::placeholder {
        color: map-get($colors, "secondary");
    }

    &:focus-visible {
        outline-color: map-get($colors, "secondary");
    }
}
</style>