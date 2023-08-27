import * as yup from "yup";

export const LoginValidationSchema  = yup.object({
    email: yup.string().email("nvalid email format").required(),
    password: yup
    .string()
    .min(6, "password should be at least 6characrs")
    .max(50, "password should not be more than 50 characters")
    .required(),
})