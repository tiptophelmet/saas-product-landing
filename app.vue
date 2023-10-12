<script setup>

import HowToPattern from './components/HowToPattern.vue';
import Logo from './components/Logo.vue';
import NavMenu from './components/NavMenu.vue';

const routes = {
  About: "/about",
  Contact: "/contact",
  Legal: "/legal"
};

</script>

<template>
  <div class="container">
    <HowToPattern />
    <header>
      <NuxtLink to="/about">
        <Logo />
      </NuxtLink>
      <NavMenu :routes="routes" />
    </header>
    <NuxtPage />
  </div>
</template>

<style lang="scss">
@use "sass:map";

@import "./components/assets/colors.scss";
@import "./components/assets/typography.scss";
@import "./components/assets/responsive.scss";

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 16px;
  gap: 8px;

  @include respond-to('medium') {
    padding: 0 32px;
  }

  @include respond-to('large') {
    padding: 0 44px;
  }

  @include respond-to('xlarge') {
    padding: 0 64px;
  }

  height: 100%;

  header {
    z-index: 1;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    gap: 8px;

    align-self: stretch;

    @include respond-to('medium') {
      padding-top: 24px;
    }

    @include respond-to('large') {
      padding-top: 28px;
    }

    @include respond-to('xlarge') {
      padding-top: 32px;
    }
  }

  footer {
    width: 100%;
    padding-bottom: 20px;

    @include respond-to('medium') {
      padding-bottom: 24px;
    }

    @include respond-to('large') {
      padding-bottom: 28px;
    }

    @include respond-to('xlarge') {
      padding-bottom: 32px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @include respond-to('large') {
      flex-direction: row;
      justify-content: space-between;
    }

    @include respond-to('xlarge') {
      flex-direction: row;
      justify-content: space-between;
    }

    .copyright {
      margin: 0;

      @extend %text-geologica-sm-light;
      color: map-get($colors, "secondary");
    }
  }
}
</style>
