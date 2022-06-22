import React, { FC, useId } from "react";
import { useTranslation } from "react-i18next";
import Component from "@components/atoms/Component";
import Button from "@components/atoms/Button";
import MainTitle from "@components/molecules/MainTitle";
import data from "../../../../data/portfolioContact";
import "./styles.scss";

import IconContainer from "@components/molecules/IconContainer";
import FloatingLabel from "@components/organisms/FloatingLabel";
interface Props {
  isActive: boolean;
}

/**
 * Show contact section
 * @param isActive Show the section if true, hide if false. When true, all other sections are hidden
 */
const SectionContact: FC<Props> = ({ isActive }) => {


  // take translation from public/${lang}/contact.json
  const { t } = useTranslation("common", {keyPrefix: "portfolio.sections.contact"});
  const id = useId();
  const userEmail = data.email;
  // data are in src/client/data
  const contactItems = data.items.map((item, index)=> {
    return (
      <div className="contact-item" key={`${id}${index}}`}>
        <IconContainer as="div" tagProps={{ className: "icon" }} icon={item.icon}>
          <span>{item.label}</span>
        </IconContainer>
        <p>{item.text}</p>
      </div>
    );
  });

  const socialLinks = data.socials.map((social, index) => {
    return (
      <IconContainer
        as="a"
        tagProps={{
          href: social.href,
          className: "icon",
          target: social.target,
        }}
        icon={social.icon}
        key={`${id}${index}}`}
      />
    );
  });

  return (
    <section className={"contact portfolio-hide" + (isActive ? " active" : "")} id="contact">
      <div className="contact-container">
        <MainTitle title={[t("title.0"), t("title.1")]} subTitle={t("subtitle")} />
        <div className="contact-content-con">
          <div className="left-contact">
            <Component as="h4">{t("information")}</Component>
            <Component as="p">{t("description")}</Component>
            <div className="contact-info">
              <address>{contactItems}</address>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">{socialLinks}</div>
            </div>
          </div>
          <div className="right-contact">
            <form action={`mailto:${userEmail}`} method="get" encType="text/plain">
              <FloatingLabel type="text" id="name" classname="input-control" label={t("label_name")} required={true} />
              <FloatingLabel
                type="email"
                id="email"
                classname="input-control"
                label={t("label_email")}
                required={true}
              />
              <FloatingLabel
                type="text"
                id="subject"
                classname="input-control"
                label={t("label_subject")}
                required={true}
              />
              <div className="input-control">
                <textarea
                  cols={15}
                  rows={8}
                  placeholder={t("text_placeholder")}
                  defaultValue={""}
                  name="body"
                  id="body"
                />
              </div>
              <Button tagProps={{ type: "submit", className: "btn large" }}>{t("submit")}</Button>
              {/*
              <ButtonDownload text='downloadCv' iicon={<FaDownload />} ></ButtonDownload>
  */}{" "}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
