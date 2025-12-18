import AuthLayout from "../AuthLayout";

import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPassword() {
  return(
    <AuthLayout 
     title="Welcome back!"
     FormComponent={ForgotPasswordForm}
     />
  )
}
