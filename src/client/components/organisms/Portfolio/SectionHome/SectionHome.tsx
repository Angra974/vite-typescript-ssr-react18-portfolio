import React, { FC } from "react";
import ImageContainer from "@components/molecules/ImageContainer";

import Component from "@components/atoms/Component";
import ButtonDownload from "@components/molecules/ButtonDownload";

import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";

import "./styles.scss";

interface Props {
  isActive: boolean;
}

/** @hidden
 *  @params {boolean} isActive Show/hide element on page laad
 *F
 */
const SectionHome: FC<Props> = ({ isActive = false }) => {
  const { t } = useTranslation("common", { keyPrefix: "portfolio.sections.home" })


  return (
    <>
      <section className={"header portfolio-hide" + (isActive ? " active" : "")} id="home">
        <div className="header-content">
          <div className="left-header">
            {/*            <div className='h-shape' /> */}
            <Component as="div" props={{ className: "h-shape" }} />
            <ImageContainer tagProps={{ className: "image" }} props={{ src: "assets/img/hero.png", alt: "" }} />
          </div>
          <div className="right-header">

            <Component as="h1" props={{ className: "name" }}>
              {t("hi")}
              <span> {t("name")} </span>
              {t("role")}
            </Component>

            <Component as="p">{t("description")}</Component>
            <ButtonDownload text='downloadcv' icon={<FaDownload />} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHome;
