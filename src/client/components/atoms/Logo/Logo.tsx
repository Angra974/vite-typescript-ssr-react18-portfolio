import React, { FC } from "react";
// ? Better use a svg file here
import LogoSrc from "@assets/logo/logo.png";

interface LogoProps {
  alt?: string;
}

const Logo: FC<LogoProps> = ({ alt = "" }: LogoProps) => {
  return <img src={LogoSrc} alt={alt} />;
};

export default Logo;
