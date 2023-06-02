import * as Yup from 'yup';

export const validateLoginSchema = Yup.object({
    email: Yup
      .string()
      .required("Email field is required!")
      .email("This email is not a valid email"),
    password: Yup
      .string()
      .required("Password field is required!")
      .min(6, "password must be at least 6 characters")
      .max(12, "Password is too long!"),
});