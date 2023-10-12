export function useContactFormVueArgs(contactForm) {
    if (!isReactive(contactForm)) {
        console.error("contactForm must be reactive!");
    }

    return {
        inputArgs: {
            yourName: {
                type: "text",
                id: "yourNameInput",
                label: "🙂 Tell us how we can call you",
                placeholder: "Your name",
                "v-model.lazy.trim": contactForm.yourName,
            },
            yourEmail: {
                type: "email",
                id: "yourEmailInput",
                label: "📫 Enter your email",
                placeholder: "Your email",
                "v-model.lazy.trim": contactForm.yourEmail,
            }
        },
        textareaArgs: {
            id: "yourRequestText",
            label: "🖋️ Please, describe your request.",
            placeholder: "Your question goes here...",
            "v-model.lazy.trim": contactForm.yourRequest,
        }
    }
}
