import LoginForm from "./LoginForm";

import AuthLayout from "../AuthLayout";
export default function Login() {

  return (
      <AuthLayout 
      title="Welcome back!"
      FormComponent={LoginForm}
      />

  );
}
