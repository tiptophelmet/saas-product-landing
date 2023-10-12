<script setup>
import { onMounted, onUnmounted } from 'vue';

import Typed from 'typed.js';

const typedHeadlines = [
    '✏️ Begin your journey within seconds.',
    '⚡ Embark on Your Adventure in a Flash!',
    '🌀 Get Rolling in the Blink of an Eye!',
    '✍️ Explore, Refine, and Shine - Your Adventure Awaits!',
    '🕐 Start Your Exploration in No Time!',
    '🖊️ Wonders, Captured in Seconds!',
    '📜 Craft Your Dreams Swiftly and Smoothly!',
    '⏩ Jumpstart Your Creation in an Instant!',
    '💡 Engage in Wonders - It Only Takes Seconds!',
    '🧠 Unleash Your Genius - It\'s Just Seconds Away!',
    '🎉 Wisdom Awaits - Get Started in a Snap!',
];

let typed = null;

onMounted(() => {
    typed = new Typed('#typedHeadline', {
        strings: typedHeadlines,
        typeSpeed: 60,
        backDelay: 2000,
        backSpeed: 10,
        loop: true,
        smartBackspace: true,
        shuffle: true,
    });
})

onUnmounted(() => {
    typed.destroy()
})

const navigateToApp = async () => {
    await navigateTo('https://app.yourexample.io/', {
        open: {
            target: '_blank',
        },
        external: true
    })
}

</script>

<template>
    <Head>
        <Title>YourExample</Title>
    </Head>
    <section id="headlines">
        <h1 id="typedHeadline"></h1>
        <div class="motto">
            <p class="motto__barebone">Barebone.</p>
            <p class="motto__ingenious">Ingenious.</p>
            <p class="motto__uncomplicated">Uncomplicated.</p>
        </div>
    </section>
    <footer>
        <div class="to-yourexample">
            <Button theme="primary" :feather-icon="{ position: 'leading', name: 'zap' }" @click="navigateToApp"
                id="goToYourExample">
                Go to YourExample
            </Button>
            <p class="note">No initial registration required.</p>
        </div>
        <p class="copyright">© YourExample 2023. All rights reserved.</p>
    </footer>
</template>

<style lang="scss">
@use "sass:map";

@import "@/components/assets/colors.scss";
@import "@/components/assets/typography.scss";
@import "@/components/assets/responsive.scss";

#headlines {
    .typed-cursor {
        @extend %headline-geologica-xxl-extrabold;
        font-size: 32px;

        color: map-get($colors, "cursor");

        @include respond-to('medium') {
            font-size: 40px;
        }

        @include respond-to('large') {
            font-size: 44px;
        }

        @include respond-to('xlarge') {
            font-size: 48px;
        }
    }

    h1 {
        @extend %headline-geologica-xxl-extrabold;
        font-size: 32px;

        color: map-get($colors, "primary");
        display: inline;

        position: relative;

        @include respond-to('medium') {
            font-size: 40px;
        }

        @include respond-to('large') {
            font-size: 44px;
        }

        @include respond-to('xlarge') {
            font-size: 48px;
        }
    }

    .motto {
        margin-top: 32px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 20px;

        p {
            margin: 0;
        }

        @include respond-to('medium') {
            flex-direction: column;
            gap: 24px;
        }

        @include respond-to('large') {
            flex-direction: row;
            gap: 28px;
        }

        @include respond-to('xlarge') {
            flex-direction: row;
            gap: 32px;
        }

        .motto__barebone {
            @extend %text-opensans-md;
            font-style: normal;
            font-weight: 800;
            color: map-get($colors, "secondary");
        }

        .motto__ingenious {
            @extend %text-opensans-md;
            font-style: italic;
            font-weight: 300;
            color: map-get($colors, "secondary");
        }

        .motto__uncomplicated {
            @extend %text-opensans-md;
            font-style: normal;
            font-weight: 400;
            color: map-get($colors, "secondary");
        }
    }
}

footer {
    .to-yourexample {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        @include respond-to('medium') {
            width: 100%;

            flex-direction: column;
            gap: 16px;
        }

        @include respond-to('large') {
            width: auto;

            flex-direction: row;
            gap: 32px;
        }

        @include respond-to('xlarge') {
            width: auto;

            flex-direction: row;
            gap: 32px;
        }

        #goToYourExample {
            width: 100%;

            @include respond-to('large') {
                width: auto;
            }
        }

        .note {
            @include respond-to('large') {
                margin: 0;
            }

            @extend %text-geologica-sm-light;
            color: map-get($colors, "primary");
        }
    }
}
</style>