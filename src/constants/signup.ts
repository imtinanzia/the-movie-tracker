import * as Yup from "yup";

export const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.mixed()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .nullable()
    .required("Confirm Password is required"),
});

export const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
