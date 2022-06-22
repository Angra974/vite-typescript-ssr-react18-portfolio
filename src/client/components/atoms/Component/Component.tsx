import React, { ElementType, FC } from "react";
import tagPropsType from "@shared/types/tag.types";

interface ComponentProps {
  as?: ElementType ;
  props?: tagPropsType;
  children?: React.ReactNode;
}
/**
 *
 * @param { string } as : tag element
 * @params { any }  props : attributes+values and event for this element
 * @returns the formatted element
 */
const Component: FC<ComponentProps> = ({ as: Tag = "div", props, children }: ComponentProps) => {
  return <Tag {...props}>{children}</Tag>;
};

export default Component;
