import { FormHeader, FormLayout, InputTextField, LinkForm, SubmitButton }
from "../../components/form";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'; 
import { useForm, SubmitHandler } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { validateRegisterSchema } from "./validateSchema";
import { RegisterInputs } from "../../types";
import { useRegisterMutation } from "../../features/auth/authApi";
import { useEffect, useState } from "react";
import ShowInputError from "../../components/ui/showInputError";
import Error from "../../components/ui/error";

const Register = () => {
  const {handleSubmit, register, formState: {errors}} = useForm<RegisterInputs>({resolver: yupResolver(validateRegisterSchema)});
  const [createUser, {isError, isLoading, error}] = useRegisterMutation();
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true);

  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    const user = {
      name: data.name.trim(),
      email: data.email,
      password: data.password
    }
    createUser(user);
  }

  useEffect(() => {
    if((error !== undefined) && 'data' in error) {
      setErrorMessage(error.data)
    }
  }, [isError, error]);

  return (
    <FormLayout>
        <div className="max-w-md w-full space-y-4 md:space-y-8">
          <FormHeader headerText="Create your new account" />
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4 md:space-y-6">
            <div className="rounded-md">
              <InputTextField register={register('name')} type="text" name="name" label="Username" placeholder="Write your username.."/>
              {errors.name && <ShowInputError message={errors.name.message}/>}

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

              <div className="relative">
              <InputTextField register={register('confirmPassword')} type={isHideConfirmPassword ? 'password' : 'text'} name="confirmPassword" label="Confirm password" placeholder="Enter confirm password.."/>
                {
                  isHideConfirmPassword ? <AiOutlineEye onClick={() => setIsHideConfirmPassword(false)} className="absolute right-5 top-9 text-2xl text-teal-600 cursor-pointer"/> :
                  <AiOutlineEyeInvisible onClick={() => setIsHideConfirmPassword(true)}  className="absolute right-5 top-9 text-2xl text-teal-600 cursor-pointer"/>
                }
              </div>
              {errors.confirmPassword && <ShowInputError message={errors.confirmPassword.message}/>}
            </div>
            {isError  && <Error message={errorMessage}/>}
            <LinkForm link="/login" linkText="Already have an account?"/>
            <SubmitButton disabled={isLoading} buttonText="Sign Up" />
          </form>
        </div>
    </FormLayout>
  );
};

export default Register;