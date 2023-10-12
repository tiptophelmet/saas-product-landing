<script setup>

const props = defineProps({
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
    <div class="textarea-container">
        <label :for="id" class="input-label">{{ props.label }}</label>
        <textarea :id="id" :placeholder="placeholder" :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"></textarea>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
@use "sass:map";

@import "./components/assets/colors.scss";
@import "./components/assets/typography.scss";
@import "./components/assets/responsive.scss";

.textarea-container {
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

textarea {
    box-sizing: border-box;

    width: 100%;

    @include respond-to('large') {
        min-width: 320px;
        width: 440px;
        max-width: 440px;
    }

    height: 140px;
    max-height: 140px;

    padding: 10px 14px;

    color: map-get($colors, "primary");

    border: 1px solid map-get($colors, "border");
    border-radius: 8px;

    @extend %text-opensans-md-regular;

    &::placeholder {
        color: map-get($colors, "secondary");
    }

    overflow-y: auto;

    &:focus-visible {
        outline-color: map-get($colors, "secondary");
    }
}
</style>