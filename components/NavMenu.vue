<script setup>

import { ref, computed } from 'vue';

const props = defineProps({
    routes: {
        type: Object,
        validator(routesObj) {
            for (let name in routesObj) {
                if (name === undefined) {
                    return false;
                }

                if (typeof routesObj[name] !== "string") {
                    return false;
                }
            }

            return true;
        }
    }
});

const [dropdownMenuBtn, isDropdownOpen] = [ref(null), ref(false)];

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
    dropdownMenuBtn.value.$el.blur()
}

const auxClasses = computed(() => ({
    "dropdown-open": isDropdownOpen.value,
}));

</script>

<template>
    <Button theme="borderless" :feather-icon="{ position: 'only', name: isDropdownOpen ? 'x' : 'menu' }"
        id="dropdownMenuBtn" @click="toggleDropdown" ref="dropdownMenuBtn" />
    <!-- Render dropdown menu responsively -->
    <nav :class="{ ...auxClasses }">
        <ul id="navMenu">
            <li v-for="(path, name) in props.routes">
                <NuxtLink :to="`${path}`" @click="isDropdownOpen = false">{{ name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@use "sass:map";

@import "./components/assets/colors.scss";
@import "./components/assets/typography.scss";
@import "./components/assets/responsive.scss";

#dropdownMenuBtn {
    z-index: 1000;

    display: flex;

    @include respond-to('large') {
        z-index: auto;

        display: none;
    }

    &:focus {
        outline: none;
    }
}

nav {
    z-index: 1;

    box-sizing: border-box;

    display: none;

    width: 100%;
    height: 100%;

    padding: 20px 24px;

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;

    background-color: #ffffff;

    &.dropdown-open {
        display: block;
        opacity: 0;

        transform: translateY(-100%);

        transition: opacity 0.5s ease, transform 0.5s ease;

        @keyframes fade-in-slide-down {
            0% {
                opacity: 0;
                transform: translateY(-100%);
            }

            100% {
                opacity: 1;
                transform: translateY(0%);
            }
        }

        animation: fade-in-slide-down 0.5s ease both;

        @include respond-to('medium') {
            padding: 24px 32px;
        }

        @include respond-to('large') {
            padding: 28px 44px;
        }

        @include respond-to('xlarge') {
            padding: 32px 64px;
        }
    }

    @include respond-to('large') {
        z-index: auto;

        display: block;

        position: static;
        width: auto;
        margin-left: 0;
        padding: 0;
    }

    #navMenu {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 32px;

        list-style: none;

        @include respond-to('large') {
            flex-direction: row;
            gap: 32px;
        }

        $transition-duration: 0.2s;

        li {
            @extend %text-geologica-sm-regular;
            font-size: 16px;

            @include respond-to('large') {
                font-size: 14px;
            }

            color: map-get($colors, "secondary");
            transition: all $transition-duration;

            &:hover {
                color: map-get($colors, "primary");
                transition: all $transition-duration;
            }

            a {
                text-decoration: none;
                color: inherit;
                outline: none;

                &.router-link-exact-active {
                    color: map-get($colors, "primary");
                }
            }
        }
    }
}
</style>