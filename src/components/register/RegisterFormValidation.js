import * as yup from "yup";

export const registerValidationSchema = yup.object({
        firstName: yup
            .string()
            .required()
            .min(3, "firstname should be at least 3 characters")
            .max(50, "max 50 charachters"),
        lastName: yup
            .string()
            .required()
            .min(3, "lastname should be at least 3 characters"),
        email: yup
        .string()
        .email("ivalid email format")
        .required(),
        password: yup
            .string()
            .min(6, "password should be at least 6 characters")
            .max(50, "password should not be more than 50 charcters")
            .required(),
    });