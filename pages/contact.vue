<script setup>

import { reactive } from 'vue';
import axios from 'axios';
import { useForm, useField } from 'vee-validate';

import Button from '~/components/Button.vue';
import InputField from '~/components/InputField.vue';
import TextareaField from '~/components/TextareaField.vue';

import { useContactFormResultText } from '~/components/composables/contactFormResults';
import { yupSchema } from '~/components/parts/contactFormValidation';
import { useContactFormVueArgs } from '~/components/composables/contactFormVueArgs';

const contactForm = reactive({
    yourName: "", yourEmail: "", yourRequest: ""
});

const contactFormValidator = useForm({
    validationSchema: yupSchema,
    initialValues: { ...contactForm.value },
});

const { value: yourName, errorMessage: yourNameError, handleBlur: yourNameBlur } = useField('yourName');
const { value: yourEmail, errorMessage: yourEmailError, handleBlur: yourEmailBlur } = useField('yourEmail');
const { value: yourRequest, errorMessage: yourRequestError, handleBlur: yourRequestBlur } = useField('yourRequest');

const { resultText, setResultText } = useContactFormResultText()

async function submitForm() {
    const { errors } = await contactFormValidator.validate();

    if (Object.keys(errors).length === 0) {
        setResultText('progress');

        try {
            let response = await axios.post('http://example.com/api/endpoint', contactForm)

            if (response.status === 200) {
                setResultText('success');
            } else {
                setResultText('error');
            }
        } catch (error) {
            setResultText('error');
        }
    }
}

const { inputArgs, textareaArgs } = useContactFormVueArgs(contactForm);

</script>

<template>
    <Head>
        <Title>Contact</Title>
    </Head>
    <section id="contact">
        <h2>Contact</h2>
        <form>
            <InputField v-bind="inputArgs.yourName" v-model="yourName" @blur="yourNameBlur">
                <p class="field-error" v-if="yourNameError">{{ yourNameError }}</p>
            </InputField>

            <InputField v-bind="inputArgs.yourEmail" v-model="yourEmail" @blur="yourEmailBlur">
                <p class="field-error" v-if="yourEmailError">{{ yourEmailError }}</p>
            </InputField>

            <TextareaField v-bind="textareaArgs" v-model="yourRequest" @blur="yourRequestBlur">
                <p class="field-error" v-if="yourRequestError">{{ yourRequestError }}</p>
            </TextareaField>
        </form>
    </section>
    <footer>
        <div class="submit-request">
            <Button theme="primary" :featherIcon="{ position: 'leading', name: 'send' }" @click="submitForm"
                id="submitContactForm">Submit</Button>
            <p :class="`submit-result ${resultText.colorClass}`">{{ resultText.text }}</p>
        </div>
        <p class="copyright">© YourExample 2023. All rights reserved.</p>
    </footer>
</template>

<style lang="scss">
@use "sass:map";

@import "@/components/assets/colors";
@import "@/components/assets/typography.scss";
@import "@/components/assets/responsive.scss";

#contact {
    width: 100%;

    h2 {
        @extend %headline-geologica-xl-bold;
        color: map-get($colors, "primary");
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 20px;

        @include respond-to('large') {
            gap: 32px;
        }

        .field-error {
            color: map-get($colors, "danger");
            @extend %text-geologica-sm-light;
            margin-top: 0.25em;
            margin-bottom: 0;
        }
    }
}

footer {
    .submit-request {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        width: 100%;

        @include respond-to('large') {
            width: auto;

            flex-direction: row;
            gap: 32px;
        }

        #submitContactForm {
            width: inherit;
        }

        .submit-result {
            margin: 0;

            @extend %text-geologica-sm-light;

            &.progress {
                color: map-get($colors, "primary");
            }

            &.success {
                color: map-get($colors, "success");
            }

            &.error {
                color: map-get($colors, "danger");
            }
        }
    }
}
</style>