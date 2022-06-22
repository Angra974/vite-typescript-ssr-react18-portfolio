import React, { FC } from "react";
// import * as S from "./styles";

type FrontendProps = {
  children: React.ReactNode;
};

const Frontend:FC<FrontendProps> = ({ children }: FrontendProps) => {
  return <main>{children}</main>;
};

export default Frontend;
