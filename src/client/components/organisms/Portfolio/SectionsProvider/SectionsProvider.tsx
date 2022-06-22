import React, { FC } from "react";

import "./styles.scss";

import SectionHome from "@components/organisms/Portfolio/SectionHome";
import PortfolioControls from "@components/organisms/Portfolio/PortfolioControls";
import SectionAbout from "@components/organisms/Portfolio/SectionAbout";
import SectionBlog from "@components/organisms/Portfolio/SectionBlog";
import SectionContact from "@components/organisms/Portfolio/SectionContact";
import SectionPortfolio from "@components/organisms/Portfolio/SectionPorfolio";
import ErrorNotFound from "../../ErrorNotFound";

interface Props {
  active: string;
}

/**
 *
 * @param {string} name of the section to show, hide the others
 * @returns void
 **/
const SectionsProvider: FC<Props> = ({ active = "" }) => {
  return (
    <>
      <SectionHome isActive={active === "home"} />
      <SectionAbout isActive={active === "about"} />
      <SectionPortfolio isActive={active === "portfolio"} />
      <SectionBlog isActive={active === "blog"} />
      <SectionContact isActive={active === "contact"} />
      <ErrorNotFound isActive={active === "error"} />
      <PortfolioControls active={active} />
    </>
  );
};

export default SectionsProvider;
