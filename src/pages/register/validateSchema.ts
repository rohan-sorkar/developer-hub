import * as Yup from 'yup';

export const validateRegisterSchema = Yup.object({
    name: Yup.string().required("Name field is required!"),
    email: Yup
      .string()
      .required("Email field is required!")
      .email("This email is not a valid email"),
    password: Yup
      .string()
      .required("Password field is required!")
      .min(6, "password must be at least 6 characters")
      .max(12, "Password is too long!"),
    confirmPassword: Yup
      .string()
      .required("Confirm Password field is required!")
      .oneOf([Yup.ref("password")], "Confirm password is not matched!"),
});