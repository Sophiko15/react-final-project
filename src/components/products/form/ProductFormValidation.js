import * as yup from "yup"

export const saveProductValidationSchema = yup.object({
  name: yup.string().required().min(3, "name should be at least 3 characters"),
  description: yup
    .string()
    .required()
    .min(3, "descrioption should be at least 3 characters"),
  brand: yup
    .string()
    .required()
    .min(3, "brand should be at least 3 characters"),
  category: yup
    .string()
    .min(6, "category should be at least 6 characters")
    .required(),
  price: yup
    .number()
    .min(1, "price should be at least 1 characters")
    .required(),
});