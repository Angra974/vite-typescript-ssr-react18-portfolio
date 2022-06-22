import React, { FC } from "react";
import "./styles.scss";
import IconContainer from "@components/molecules/IconContainer";

import { FaAdjust } from "react-icons/fa";

interface Props {}

/**
 *
 * Switch between light and dark mode
 * @returns
 */
const ThemeSwitcher: FC<Props> = ({}) => {
  // toggle dark and ligth theme
  const handleTheme = (): void => {
    document.body.classList.toggle("light-mode");
  };

  return (
    <IconContainer as="div" tagProps={{ className: "theme-btn", onClick: () => handleTheme() }} icon={<FaAdjust />} />
  );
};

export default ThemeSwitcher;
