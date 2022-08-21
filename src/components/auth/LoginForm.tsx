import { useMemo } from "react";
import classNames from "classnames";

// validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../libs/schema";

import type { SubmitHandler } from "react-hook-form";

export interface FormFieldValues {
  email: string;
  password: string;
}

function LoginForm() {
  const isLoading = false;
  const resolverSchema = useMemo(() => schema.signin(), []);

  const { handleSubmit, register } = useForm<FormFieldValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(resolverSchema),
    criteriaMode: "firstError",
    defaultValues: {
      email: "test@email.io",
      password: "1q2w3e4r!@",
    },
  });

  const onSubmit: SubmitHandler<FormFieldValues> = (input) => {
    console.log(input);
  };

  return (
    <div className="col-[1/-1] flex flex-col lg:col-span-6">
      <h1 className="flex flex-col text-center font-sans text-4xl font-extrabold text-gray-900">
        <span className="bg-gradient-to-tr from-[#3466F6] to-[#7c3aed] box-decoration-clone bg-clip-text text-transparent">
          Log in
        </span>
      </h1>
      <form
        className="mb-4 mt-9 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="font-semibold text-black">
            Email
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email address"
              className="mb-2 mt-2 w-full rounded-md border bg-white p-3 outline outline-2 outline-offset-2 outline-transparent focus:border-blue-600 md:p-4 md:text-base"
              {...register("email")}
            />
          </label>
          <label className="font-semibold text-black">
            Password
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="mb-2 mt-2 w-full rounded-md border  bg-white p-3 outline outline-2 outline-offset-2 outline-transparent focus:border-blue-600 md:p-4 md:text-base"
              {...register("password")}
            />
          </label>
        </div>
        <button
          className={classNames(
            "mt-6 inline-flex w-full flex-row items-center justify-center self-center rounded-full border border-blue-600 bg-blue-600 py-2 px-20 text-center text-sm font-semibold text-white outline outline-2 outline-offset-2 outline-transparent md:py-2.5 md:text-base",
            {
              "cursor-not-allowed": isLoading,
            }
          )}
          type="submit"
          disabled={isLoading}
        >
          submit
        </button>
      </form>

      <hr className="mt-2 border-t" />

      <button
        type="button"
        className="mt-6 inline-flex flex-row items-center justify-center self-center rounded-full px-3 py-1 text-center text-base font-semibold text-white outline outline-2 outline-offset-2 outline-transparent"
      >
        <span className="text-blue-600">Continue with Signup -&gt;</span>
      </button>
    </div>
  );
}

export default LoginForm;
