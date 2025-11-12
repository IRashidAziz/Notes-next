import React from "react";
import css from "@/styles/Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "transparent" | "white" | "black";
  className?: string;
};
const Button = ({
  children,
  variant = "transparent",
  className = "",
  ...props
}: ButtonProps) => {
  const BaseClasses = css.button;
  const variants: Record<string, string> = {
    transparent: css.transparent,
  };
  return (
    <button
      className={`${BaseClasses} ${variants[variant]} ${className} rounded-md`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
