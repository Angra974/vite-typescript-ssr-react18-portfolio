import React, { FC, useId } from "react";
import { FaBriefcase , FaDownload } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { data } from "../../../../data/portfolioAbout";
import "./styles.scss";
import MainTitle from "@components/molecules/MainTitle";
import ProgressBars from "@components/organisms/Portfolio/ProgressBars";
import Timeline from "@components/organisms/Portfolio/Timeline";
import AboutItem from "@components/molecules/Portfolio/AboutItem";
import ButtonDownload from "@components/molecules/ButtonDownload";

interface Props {
  isActive: boolean;
}

const SectionAbout: FC<Props> = ({ isActive = false }) => {
  const id = useId();

  const { t } = useTranslation("common", { keyPrefix: "portfolio.sections.about" })


  const AboutListItems = data.AboutItems.map((item, index) => {
    return <AboutItem largeText={item.largeText} smallText={item.smallText} key={id + index} />;
  });

  const timelineItems = [
    {
      icon: <FaBriefcase />,
      year: "2010 - Present",
      title: ["Web Developer", "Vircosoft"],
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
    },
    {
      icon: <FaBriefcase />,
      year: "2016 - 2017",
      title: ["C++ Programmer", "- Slime Tech"],
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
    },
    {
      icon: <FaBriefcase />,
      year: "2009 - 2013",
      title: ["Business Degree", "- Sussex University"],
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
    },
    {
      icon: <FaBriefcase />,
      year: "2013 - 2016",
      title: ["Computer Science Degree", "- Brookes University"],
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
    },
    {
      icon: <FaBriefcase />,
      year: "2017 - Present",
      title: ["3D Animation", "- Brighton University"],
      details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.",
    },
  ];

  return (
    <section className={"about portfolio-hide" + (isActive ? " active" : "")} id="about">
      <MainTitle title={[t("title.0"), t("title.1")]} subTitle={t("subtitle")} />

      <div className="about-container">
        <div className="left-about">
          <h4>{t("information")}</h4>
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <ButtonDownload text="downloadCv" icon={<FaDownload />} />
        </div>
        <div className="right-about">{AboutListItems}</div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">{t("skills")}</h4>
        <ProgressBars data={data.progress} />
      </div>

      <Timeline title={t("timeline")} data={timelineItems} />
    </section>
  );
};

export default SectionAbout;
