<script setup>

import { replace as prepareFeatherIcons, icons as featherIconsList } from 'feather-icons';

const props = defineProps({
    name: {
        type: String,
        default: "circle",
        validator: (value) => {
            return Object.keys(featherIconsList).includes(value)
        },
    }
})

onMounted(() => {
    prepareFeatherIcons()
})

</script>

<template>
    <i :data-feather="props.name" class="feather-icon"></i>
</template>

<style lang="scss">
.feather-icon {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
}
</style>