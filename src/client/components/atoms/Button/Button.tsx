import React, { FC } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  className?: string;
  id?: string;
  "data-id"?: string;
  onClick?: React.MouseEventHandler;
};

interface Props {
  tagProps: ButtonProps;
  props?: ButtonProps;
  children?: React.ReactNode;
}

const Button: FC<Props> = ({ tagProps, props, children }: Props) => {
  return (
    <>
      <button {...tagProps}>
        <span {...props}>{children}</span>
      </button>
    </>
  );
};

export default Button;
