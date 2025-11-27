import React from "react";
import Heading from "@/components/auth/Heading";
import SocialButtons from "@/components/auth/SocialButtons";
import Splitter from "@/components/auth/Splitter";
import { Metadata } from "next";
import LoginForm from "@/components/auth/Login/LoginForm";

export const metadata: Metadata = {
  title: "Login",
};
const Login = () => {
  return (
    <div className="homedark min-h-screen flex items-center justify-center">
      <div className="w-full">
        <Heading
          title="Log In Account"
          description="Enter your credentials to log in to your account"
          className="loginhead"
        />
        <SocialButtons />
        <Splitter />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
