import React, { ElementType, FC } from "react";

import "./styles.scss";
import tagPropsType from "@shared/types/tag.types";

interface ComponentProps {
  as?: ElementType ;
  tagProps: tagPropsType;
  icon?: any;
  children?: React.ReactNode;
}

const IconContainer: FC<ComponentProps> = ({ as: Tag = "div", tagProps, icon, children }: ComponentProps) => {
  return (
    <>
      <Tag {...tagProps}>
        {icon}
        {children}
      </Tag>
    </>
  );
};

export default IconContainer;
