import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

// add current style to elemeent with Styled components
import * as S from "./styles";

// add styles from css for covenience and more adaptibility
import "./styles.scss";

interface Props {}

const Menu: FC<Props> = () => {
  const { t } = useTranslation("common", { keyPrefix: "portfolio.menu" });

  console.log(t);

  // ? TODO: loop through the menu translation and create a menu based on the translation
  // ? Json file only, so we don't need to write code in this file when need to update the menu (add/remove links)

  return (
    <S.Menu className="main-nav">
      <ul>
        <li>
          <NavLink
            to="/"
            aria-label={t("home")}
            data-nav="home"
            className={({ isActive }) => (isActive ? "is_active" : "")}
          >
            {t("home")}
          </NavLink>
        </li>
        <li data-nav="about">
          <NavLink
            to="/about"
            aria-label={t("about")}
            data-nav="about"
            className={({ isActive }) => (isActive ? "is_active" : "")}
          >
            {t("about")}
          </NavLink>
        </li>
        <li data-nav="portfolio">
          <NavLink
            to="/portfolio"
            aria-label={t("portfolio")}
            data-nav="portfolio"
            className={({ isActive }) => (isActive ? "is_active" : "")}
          >
            {t("portfolio")}
          </NavLink>
        </li>{" "}
        <li data-nav="blog">
          <NavLink
            to="/blog"
            aria-label={t("blog")}
            data-nav="blog"
            className={({ isActive }) => (isActive ? "is_active" : "")}
          >
            {t("blog")}
          </NavLink>
        </li>{" "}
        <li data-nav="contact">
          <NavLink
            to="/contact"
            aria-label={t("contact")}
            data-nav="contact"
            className={({ isActive }) => (isActive ? "is_active" : "")}
          >
            {t("contact")}
          </NavLink>
        </li>{" "}
      </ul>
    </S.Menu>
  );
};

export default Menu;
