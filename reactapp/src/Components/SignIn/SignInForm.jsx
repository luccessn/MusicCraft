/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Label } from "../Ui/ForForms/Label";
import { Input } from "../Ui/ForForms/Input";
import { cn } from "../../Lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Form } from "@heroui/form";

import {
  validateEmail,
  validatePassword,
} from "../../Constants/Validations/FormValidaions";
import { authHandler } from "../../Api/Auth/ApiAuth";
import { authActions } from "../../Constants/auth/authActions";
import { useAppContext } from "../../Context/AppContextReducer";
import { logInAction } from "../../Context/AppActionsCreator";
// import { authHandler } from "../../auth/ApiAuth";
// import { authActions } from "../../Constants/auth/authActions";

export function SignInForm() {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    // userName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ChangeInput = (e) => {
    const { name, value } = e.target;

    // Update user state
    setUser((prev) => ({ ...prev, [name]: value }));

    // Clear any previous server error when user starts typing
    if (serverError) setServerError("");

    // Validate specific fields
    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: emailError }));
    }

    if (name === "password") {
      const passwordError = validatePassword(value);
      setErrors((prev) => ({ ...prev, password: passwordError }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset server error
    setServerError("");

    // Validate all fields
    const validationErrors = {};

    const emailError = validateEmail(user.email);
    if (emailError) validationErrors.email = emailError;

    const passwordError = validatePassword(user.password);
    if (passwordError) validationErrors.password = passwordError;

    // If there are validation errors, don't submit
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with form submission
    setIsLoading(true);

    authHandler(authActions.signIn, user)
      .then((data) => {
        // navigate("/", { state: { success: true } });
        // dispatch(logInAction(data));
        // setUser.userName === data.user.userName;
        if (data.message === "Success") {
          navigate("/", { state: { success: true } });
          dispatch(logInAction(data.user));
        }
        console.log(data);
        console.log(data.user);
      })
      .catch((err) => {
        // Handle different types of errors more explicitly
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-white dark:text-neutral-200">
        Welcome to Aceternity
      </h2>

      {/* Server Error Display */}
      {serverError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <span className="block sm:inline">{serverError}</span>
        </div>
      )}

      <Form
        validationBehavior="native"
        validationErrors={errors}
        className="my-8"
        onSubmit={handleSubmit}
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white text-left">
            Email Address
          </Label>
          <Input
            placeholder="projectmayhem@fc.com"
            type="email"
            className={`bg-zinc-800 text-zinc-200 ${
              errors.email ? "border-2 border-red-500" : ""
            }`}
            name="email"
            value={user.email}
            onChange={ChangeInput}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password" className="text-white text-left">
            Password
          </Label>
          <Input
            placeholder="••••••••"
            type="text"
            className={`bg-zinc-800 text-zinc-200 ${
              errors.password ? "border-2 border-red-500" : ""
            }`}
            name="password"
            value={user.password}
            onChange={ChangeInput}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br bg-zinc-900 from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign In &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              GitHub
            </span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              Google
            </span>
            <BottomGradient />
          </button>
        </div>
      </Form>

      <button onClick={goHome} className="mt-4 text-white">
        Go Home
      </button>

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
// "use strict";
// module.exports = require("./plugin");
