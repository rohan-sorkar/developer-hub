import { FormHeader, FormLayout, InputTextField, LinkForm, SubmitButton } from "../../components/form";

const Register = () => {
  return (
    <FormLayout>
        <div className="max-w-md w-full space-y-4 md:space-y-8">
          <FormHeader headerText="Create your new account" />
          <form className="mt-8 space-y-4 md:space-y-6">
            <div className="rounded-md">
              <InputTextField type="text" name="name" label="Username" placeholder="Write your username.."/>
              <InputTextField type="email" name="email" label="Email address" placeholder="Write your email.."/>
              <InputTextField type="password" name="password" label="Password" placeholder="Write your password.."/>
              <InputTextField type="password" name="confirmPassword" label="Confirm password" placeholder="Write your confirm password.."/>
            </div>
            <LinkForm link="/login" linkText="Already have an account?"/>
            <SubmitButton buttonText="Sign Up" />
          </form>
        </div>
    </FormLayout>
  );
};

export default Register;