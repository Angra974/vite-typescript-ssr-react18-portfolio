import React, { ElementType,  FC } from "react";

import tagPropsType from "@shared/types/tag.types";

interface ComponentProps {
  as?: ElementType;
  tagProps: tagPropsType;
  props: tagPropsType;
}

const ImageContainer: FC<ComponentProps> = ({ as: Tag = "div", tagProps, props }) => {
  return (
    <>
      <Tag {...tagProps}>
        <img {...props} />
      </Tag>
    </>
  );
};

export default ImageContainer;
