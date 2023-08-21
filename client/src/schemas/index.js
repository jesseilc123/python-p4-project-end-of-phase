import * as yup from "yup"

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
export const basicSchema = yup.object().shape({
    username: yup.string("Please enter a valid name").required("Required"),
    password: yup.string().min(5).matches(passwordRules, {message: "Must contain 1 uppercase and 1 number"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required")
})
