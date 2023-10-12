import { reactive } from 'vue';

export function useContactFormResultText() {
    const results = {
        progress: {
            text: "Submitting...",
            colorClass: "progress"
        },
        success: {
            text: "Success! We'll ping your inbox with our response soon.",
            colorClass: "success"
        },
        error: {
            text: "An error occured. Please retry submitting your request.",
            colorClass: "error"
        }
    };

    const resultText = reactive({
        text: "",
        colorClass: ""
    });

    const setResultText = status => {
        resultText.text = results[status].text;
        resultText.colorClass = results[status].colorClass;
    }

    return {resultText, setResultText}
}