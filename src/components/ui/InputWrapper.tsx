import React from "react";
import css from "@/styles/InputWrapper.module.css";

type InputProps = {
  title: string;
  type?: "text" | "password" | "email";
  placeholder: string;
  className?: string;
  htmlfor: string;
};
const Input = ({
  title,
  placeholder,
  type = "text",
  className,
  htmlfor,
}: InputProps) => {
  return (
    <div className={`${css.InputWrapper}`}>
      <label htmlFor={htmlfor} className={css.title}>
        {title}
      </label>
      <div className={css.inputdiv}>
        <input
          name={htmlfor}
          id={htmlfor}
          type={type}
          placeholder={placeholder}
          className={`${css.input} rounded-lg ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;
