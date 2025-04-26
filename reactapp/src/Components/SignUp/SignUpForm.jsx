/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { Label } from "../Ui/ForForms/Label";
import { Input } from "../Ui/ForForms/Input";
import { cn } from "../../Lib/utils";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { Form } from "@heroui/form";

import { authHandler } from "../../Api/Auth/ApiAuth";
import { authActions } from "../../Constants/auth/authActions";
import ErrorForm from "../Error/ErrorForm";
// import { authHandler } from "../../auth/ApiAuth";
// import { authActions } from "../../Constants/auth/authActions";

export function SignUpForm() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [ErrorInfo, setErrorInfo] = useState("");

  // Comprehensive validation functions
  const validateUsername = (username) => {
    if (!username) return "Username is required";
    if (username.length < 3)
      return "Username must be at least 3 characters long";
    if (username.toLowerCase() === "admin")
      return "Choose a different username";
    if (!/^[a-zA-Z0-9_]+$/.test(username))
      return "Username can only contain letters, numbers, and underscores";
    return null;
  };

  const validateEmail = (email) => {
    if (!email) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Invalid email format";
    return null;
  };

  const validatePassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 8)
      return "Password must be at least 8 characters long";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least 1 uppercase letter";
    if (!/[a-z]/.test(password))
      return "Password must contain at least 1 lowercase letter";
    if (!/[0-9]/.test(password))
      return "Password must contain at least 1 number";
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return "Password must contain at least 1 special character";
    return null;
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return "Please confirm your password";
    if (password !== confirmPassword) return "Passwords do not match";
    return null;
  };

  const ChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));

    // Immediate validation for the changed field
    if (name === "userName") {
      const usernameError = validateUsername(value);
      setErrors((prev) => ({ ...prev, userName: usernameError }));
    }
    if (name === "email") {
      const emailError = validateEmail(value);
      setErrors((prev) => ({ ...prev, email: emailError }));
    }
    if (name === "password") {
      const passwordError = validatePassword(value);
      setErrors((prev) => ({ ...prev, password: passwordError }));
    }
    if (name === "confirmPassword") {
      const confirmPasswordError = validateConfirmPassword(
        user.password,
        value
      );
      setErrors((prev) => ({ ...prev, confirmPassword: confirmPasswordError }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const validationErrors = {};

    const usernameError = validateUsername(user.userName);
    if (usernameError) validationErrors.userName = usernameError;

    const emailError = validateEmail(user.email);
    if (emailError) validationErrors.email = emailError;

    const passwordError = validatePassword(user.password);
    if (passwordError) validationErrors.password = passwordError;

    const confirmPasswordError = validateConfirmPassword(
      user.password,
      user.confirmPassword
    );
    if (confirmPasswordError)
      validationErrors.confirmPassword = confirmPasswordError;

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Proceed with form submission
    setIsLoading(true);
    authHandler(authActions.signUp, user)
      .then((user) => {
        console.log(user);
        navigate("/signin", { state: { success: true } });
      })
      .catch((error) => {
        setErrorInfo(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (ErrorInfo) {
    return <ErrorForm error={ErrorInfo} />;
  }
  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-white dark:text-neutral-200">
        Welcome to Aceternity
      </h2>
      <Form
        validationBehavior="native"
        validationErrors={errors}
        onSubmit={handleSubmit}
        className="my-8"
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="userName" className="text-white text-left">
            Username
          </Label>
          <Input
            placeholder="tyler_durden"
            type="text"
            className={`bg-zinc-800 text-zinc-200 ${
              errors.userName ? "border-red-500" : ""
            }`}
            name="userName"
            value={user.userName}
            onChange={ChangeInput}
          />
          {errors.userName && (
            <p className="text-red-500 text-sm mt-1">{errors.userName}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email" className="text-white text-left">
            Email Address
          </Label>
          <Input
            placeholder="projectmayhem@fc.com"
            type="email"
            className={`bg-zinc-800 text-zinc-200 ${
              errors.email ? "border-red-500" : ""
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
              errors.password ? "border-red-500" : ""
            }`}
            name="password"
            value={user.password}
            onChange={ChangeInput}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword" className="text-white text-left">
            Confirm Password
          </Label>
          <Input
            placeholder="••••••••"
            type="password"
            className={`bg-zinc-800 text-zinc-200 ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={ChangeInput}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br bg-zinc-900 from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md  px-4 font-medium bg-zinc-800  dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-300" />
            <span className="text-sm text-neutral-300">GitHub</span>
            <BottomGradient />
          </button>
          <button
            className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
          >
            <IconBrandGoogle className="h-4 w-4  text-neutral-300" />
            <span className="text-sm text-neutral-300">Google</span>
            <BottomGradient />
          </button>
        </div>
      </Form>
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
