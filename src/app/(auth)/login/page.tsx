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
    <div className="homedark">
      <Heading
        title="Log In Account"
        description="Enter your credentials to log in to your account"
      />
      <SocialButtons />
      <Splitter />
      <LoginForm />
    </div>
  );
};

export default Login;
