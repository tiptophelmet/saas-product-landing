<script setup>

import { computed } from 'vue'

import FeatherIcon from './FeatherIcon.vue';

const props = defineProps({
    theme: {
        type: String,
        default: "primary",
        validator(value) {
            return ["primary", "secondary", "borderless"].includes(value)
        }
    },
    featherIcon: {
        type: Object,
        validator(featherIcon) {
            const positionOk = ["false", "leading", "trailing", "only"].includes(featherIcon.position)
            const nameIsStr = typeof featherIcon.name === 'string'

            return positionOk && nameIsStr
        },
        default() {
            return { position: "leading", name: "circle" }
        }
    },
})

const auxClasses = computed(() => ({
    reversed: props.featherIcon.position === "trailing",
    "icon-only": props.featherIcon.position === "only",
}));

</script>

<template>
    <button :class="[props.theme, { ...auxClasses }]">
        <FeatherIcon v-if="props.featherIcon.position !== 'false'" :name="props.featherIcon.name" />
        <slot v-if="props.featherIcon.position !== 'only'">Button CTA</slot>
    </button>
</template>

<style lang="scss">
@use "sass:map";

@import "./assets/colors.scss";
@import "./assets/typography.scss";

button {
    /* Auto layout */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 16px;
    gap: 8px;

    cursor: pointer;
    border-radius: 8px;

    @extend %text-geologica-sm-medium;

    &.reversed {
        flex-direction: row-reverse;
    }

    &.icon-only {
        padding: 8px 10px;
    }

    $transition-duration: 0.2s;
    $highlight-border-width: 4px;

    &.primary {
        transition: all $transition-duration;

        background: map-get($colors, "primary");
        color: #ffffff;

        &:hover {
            background-color: map-get($colors, "highlight");
            transition: all $transition-duration;
        }

        &:focus {
            outline: $highlight-border-width solid rgba(51, 51, 51, 0.2);
            transition: all $transition-duration;
        }
    }

    &.secondary {
        transition: all $transition-duration;

        border: 0;

        background: map-get($colors, "btn-bg");
        color: map-get($colors, "primary");

        &:hover {
            background: map-get($colors, "btn-bg-hover");
            color: map-get($colors, "highlight");
            transition: all $transition-duration;
        }

        &:focus {
            outline: $highlight-border-width solid rgba(52, 52, 52, 0.1);
            transition: all $transition-duration;
        }
    }

    &.borderless {
        transition: all $transition-duration;

        border: 0;

        background: #ffffff;
        color: map-get($colors, "primary");

        &:hover {
            background: map-get($colors, "btn-bg");
            color: map-get($colors, "highlight");
            transition: all $transition-duration;
        }

        &:focus {
            background: #ffffff;
            outline: $highlight-border-width solid rgba(52, 52, 52, 0.1);
            transition: all $transition-duration;
        }
    }
}
</style>