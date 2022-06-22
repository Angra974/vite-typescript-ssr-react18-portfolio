import React, { FC } from "react";
declare type ButtonProps = {
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
declare const Button: FC<Props>;
export default Button;
//# sourceMappingURL=Button.d.ts.map