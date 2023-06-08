import { FormHeader, FormLayout, InputTextField, LinkForm, SubmitButton } from "../../components/form";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'; 
import { loginInputs } from "../../types";
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, SubmitHandler} from 'react-hook-form';
import { validateLoginSchema } from "./validateSchema";
import { useLoginMutation } from "../../features/auth/authApi";
import { useState } from "react";
import Error from "../../components/ui/error";
import ShowInputError from "../../components/ui/showInputError";

const Login = () => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const {handleSubmit, register, formState: {errors}} = useForm<loginInputs>({resolver: yupResolver(validateLoginSchema)});
  const [signIn, {isError, isLoading}] = useLoginMutation();

  const onSubmit: SubmitHandler<loginInputs> = (data) => {
      signIn({email: data.email, password: data.password});
  }

  return (
    <FormLayout>
        <div className="max-w-md w-full space-y-4 md:space-y-8">
          <FormHeader headerText="Sign in to your account" />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="rounded-md">
            <InputTextField register={register('email')} type="email" name="email" label="Email address" placeholder="Write your email.."/>
              {errors.email && <ShowInputError message={errors.email.message}/>}

              <div className="relative">
                <InputTextField register={register('password')} type={isHidePassword ? 'password' : 'text'} name="password" label="Password" placeholder="Write your password.."/>
                {
                  isHidePassword ? <AiOutlineEye onClick={() => setIsHidePassword(false)} className="absolute right-5 top-9 text-2xl text-teal-600 cursor-pointer"/> :
                  <AiOutlineEyeInvisible onClick={() => setIsHidePassword(true)}  className="absolute right-5 top-9 text-2xl text-teal-600 cursor-pointer"/>
                }
              </div>
              {errors.password && <ShowInputError message={errors.password.message}/>}
            </div>
            {isError  && <Error/>}
            <LinkForm link="/register" linkText="Don't have an account?"/>
            <SubmitButton isLoading={isLoading} buttonText="Sign In" />
          </form>
        </div>
    </FormLayout>
  );
};

export default Login;
