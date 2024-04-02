"use client";
import React, { forwardRef, Ref } from "react";
import cn from "classnames";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
}

const Button = forwardRef((props: IButton, ref: Ref<HTMLButtonElement>) => {
  const { className, label, ...rest } = props;

  return (
    <button ref={ref} className={cn(className)} {...rest}>
      {label}
    </button>
  );
});
Button.displayName = "Button";
export default Button;
