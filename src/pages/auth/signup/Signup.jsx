
import SignupForm from "./SignupForm";
import AuthLayout from "../AuthLayout";
export default function Signup() {
  

  return (

          <AuthLayout 
          title="Welcome!"
          FormComponent={SignupForm}
          />
  );
}
