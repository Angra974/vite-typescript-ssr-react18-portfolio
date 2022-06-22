import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";
import MainTitle from "@components/molecules/MainTitle";

interface Props {
  isActive: boolean;
}

const ErrorNotFound: FC<Props> = ({ isActive = false }) => {

  const { t } = useTranslation("common", {keyPrefix: "portfolio.sections.error"});

  return (
    <section className={"error portfolio-hide" + (isActive ? " active" : "")} id="error">
      <MainTitle title={[t("title.0"), t("title.1")]} subTitle={t("subtitle")} />

      <div className="error-container">
        <h2>{t("error_page")}</h2>
      </div>
    </section>
  );
};

export default ErrorNotFound;
