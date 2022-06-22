import React, { ElementType, FC } from "react";

import Component from "@components/atoms/Component";
import "./styles.scss";

interface Props {
  title: string[];
  classname?: string;
  subTitle?: string;
  subClass?: string;
  subTag?: ElementType;
}

const MainTitle: FC<Props> = ({
  title = ["", ""],
  classname = "main-title",
  subTitle = "",
  subClass = "bg-text",
  subTag = "span",
}: Props) => {
  return (
    <>
      <h2 className={classname}>
        {title[0]} <span>{title[1]}</span>
        <Component as={subTag} props={{ className: subClass }}>
          {subTitle}
        </Component>
      </h2>
    </>
  );
};

export default MainTitle;
