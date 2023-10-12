import * as yup from 'yup';

export const yupSchema = yup.object({
    yourName: yup.string()
        .required('Please enter your name')
        .matches(/^[A-Z]/, 'Your name must start with a capital letter'),
    yourEmail: yup.string()
        .email('Please enter a valid email')
        .required('Please enter your email')
        .matches(/@[\w.]+\.[A-Za-z]{2,}$/, 'Please enter a valid email'),
    yourRequest: yup.string()
        .required('Please enter your request')
        .min(50, 'Your request must be at least 50 characters')
});
