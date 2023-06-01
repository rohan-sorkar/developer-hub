import { FormHeader, FormLayout, InputTextField, LinkForm, SubmitButton } from "../../components/form";

const Login = () => {
  return (
    <FormLayout>
        <div className="max-w-md w-full space-y-4 md:space-y-8">
          <FormHeader headerText="Sign in to your account" />
          <form className="space-y-4 md:space-y-6">
            <div className="rounded-md">
              <InputTextField type="email" name="email" label="Email address" placeholder="Write your email.."/>
              <InputTextField type="password" name="password" label="Password" placeholder="Write your password.."/>
            </div>
            <LinkForm link="/register" linkText="Don't have an account?"/>
            <SubmitButton buttonText="Sign In" />
          </form>
        </div>
    </FormLayout>
  );
};

export default Login;
