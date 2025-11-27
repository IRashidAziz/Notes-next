import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/auth/SocialButtons";
import Heading from "@/components/auth/Heading";
import RegisterForm from "@/components/auth/register/RegisterForm";
import Splitter from "@/components/auth/Splitter";

export const metadata: Metadata = {
  title: "Register",
};

const Register = () => {
  return (
    <div className="homedark min-h-screen flex items-center justify-center">
      <div className="w-full">
        <Heading
          title="Sign Up Account"
          description="Enter your personal data to create your account"
        />
        <SocialButtons />
        <Splitter />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
