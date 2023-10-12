<script setup>

const route = useRoute()

const isChildLegalRoute = ref(route.path.startsWith('/legal/') && route.path !== '/legal');

watch(route, (to, from) => {
    isChildLegalRoute.value = to.path.startsWith('/legal/') && to.path !== '/legal';
})

</script>

<template>
    <Head>
        <Title>Legal</Title>
    </Head>
    <section id="legal" v-show="!isChildLegalRoute">
        <h2>Legal</h2>
        <div class="documents">
            <div class="document">
                <h5>User Terms of Service</h5>
                <p>User is asked to accept this agreement when he registers at YourExample.</p>
                <NuxtLink to="/legal/terms" v-slot="{ navigate }" custom>
                    <Button theme="secondary" :feather-icon="{ position: 'trailing', name: 'arrow-right' }"
                        @click="navigate">
                        Read more on User Terms of Service
                    </Button>
                </NuxtLink>
            </div>
            <div class="document">
                <h5>Privacy Policy</h5>
                <p>This is about which information is collected at YourExample.</p>
                <NuxtLink to="/legal/policy" v-slot="{ navigate }" custom>
                    <Button theme="secondary" :feather-icon="{ position: 'trailing', name: 'arrow-right' }"
                        @click="navigate">
                        Read more on Privacy Policy
                    </Button>
                </NuxtLink>
            </div>
            <div class="document">
                <h5>Security</h5>
                <p>We describe how we protect & secure your YourExample usage.</p>

                <NuxtLink to="/legal/security" v-slot="{ navigate }" custom>
                    <Button theme="secondary" :feather-icon="{ position: 'trailing', name: 'arrow-right' }"
                        @click="navigate">
                        Read more on Security
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </section>
    <NuxtPage />
    <footer>
        <NuxtLink to="/legal" v-slot="{ navigate }" custom>
            <Button theme="secondary" :feather-icon="{ position: 'leading', name: 'arrow-left' }" v-show="isChildLegalRoute"
                @click="navigate" id="backToLegalBtn">
                Back to Legal
            </Button>
        </NuxtLink>
        <p class="copyright">© YourExample 2023. All rights reserved.</p>
    </footer>
</template>

<style lang="scss" scoped>
@use "sass:map";

@import "@/components/assets/colors.scss";
@import "@/components/assets/typography.scss";
@import "@/components/assets/responsive.scss";

#legal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;

    h2 {
        @extend %headline-geologica-xl-bold;
        color: map-get($colors, "primary");
    }

    .documents {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 48px;

        .document {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;

            h5 {
                margin: 0;

                @extend %headline-geologica-lg-medium;
                color: map-get($colors, "primary");
            }

            p {
                margin: 0;

                @extend %text-geologica-sm-light;
                color: map-get($colors, "primary");
            }
        }
    }
}

footer {
    padding-top: 20px;

    #backToLegalBtn {
        width: 100%;

        @include respond-to('large') {
            width: auto;
        }
    }
}
</style>

<style lang="scss">
@use "sass:map";

@import "@/components/assets/colors.scss";
@import "@/components/assets/typography.scss";
@import "@/components/assets/responsive.scss";

.document-open {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    width: 100%;

    background: #ffffff;

    h2 {
        @extend %headline-geologica-xl-bold;
        color: map-get($colors, "primary");
    }

    p {
        margin: 0;
        max-height: 260px;

        @include respond-to('large') {
            max-height: 400px;
        }

        overflow-y: auto;

        @extend %text-opensans-md-regular;
        color: map-get($colors, "text");

        border: 1px solid map-get($colors, "border");
        border-radius: 8px 0 0 8px;
        padding: 24px;
    }
}
</style>