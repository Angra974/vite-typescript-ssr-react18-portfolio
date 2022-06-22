import React, { FC, useId } from "react";

import IconContainer from "@components/molecules/IconContainer";
import ImageContainer from "@components/molecules/ImageContainer";
import MainTitle from "@components/molecules/MainTitle";
import Component from "@components/atoms/Component";

import "./styles.scss";

import { FaGithubAlt, FaBehance, FaYoutube } from "react-icons/fa";
import data from "../../../../data/portfolioProjects";

import { useTranslation } from "react-i18next";


interface Props {
  isActive: boolean;
}

/**
 *
 * @param {boolean} isActive Whether the state is true (active) => we show the portfolio section
 * and we hide the other sections of this state is false and this section is hidden
 * @returns
 */

const SectionPortfolio: FC<Props> = ({ isActive = false }) => {
  const id = useId();



  // you can define a keyPrefix to be used for the resulting t function
  const { t } = useTranslation("common", { keyPrefix: "portfolio.sections.portfolio" })

  const projects = data.projects.map((project, index) => {
    return (
      <div className="portfolio-item" key={id + index}>
        <ImageContainer tagProps={{ className: "image" }} props={{ src: project.src, alt: project.alt }} />
        <Component as="div" props={{ className: "hover-items" }}>
          <Component as="h3">{t("headerItem")}</Component>
          <Component as="div" props={{ className: "icons" }}>
            {project.githubHref && (
              <IconContainer as="a" tagProps={{ className: "icon", href: project.githubHref }} icon={<FaGithubAlt />} />
            )}
            {project.behanceHref && (
              <IconContainer as="a" tagProps={{ className: "icon", href: project.behanceHref }} icon={<FaBehance />} />
            )}
            {project.youtubeHref && (
              <IconContainer as="a" tagProps={{ className: "icon", href: project.youtubeHref }} icon={<FaYoutube />} />
            )}
          </Component>
        </Component>
      </div>
    );
  });

  return (
    <section className={"portfolio-hide portfolio" + (isActive ? " active" : "")} id="portfolio">
      <MainTitle title={[t("title.0"), t("title.1")]} subTitle={t("subtitle")} />
      <p className="port-text"> {t("text")}</p>
      <div className="portfolios">{projects}</div>
    </section>
  );
};

export default SectionPortfolio;
