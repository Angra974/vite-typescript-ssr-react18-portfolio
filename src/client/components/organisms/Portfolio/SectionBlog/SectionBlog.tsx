import React, { FC, useId } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

import data from "../../../../data/portfolioBlog";
import MainTitle from "@components/molecules/MainTitle";

interface BlogType {
  imgSrc?: string;
  alt?: string;
  title?: string;
  details: string;
}

interface Props {
  isActive: boolean;
}

const SectionBlog: FC<Props> = ({ isActive = false }) => {
  const { t } = useTranslation("common", { keyPrefix: "portfolio.sections.blog" })
  const id = useId();

  return (
    <section className={"blog portfolio-hide  " + (isActive ? "active" : "")} id="blog">
      <div className="blogs-content">
        <MainTitle title={[t("title.0"), t("title.1")]} subTitle={t("subtitle")} />

        <div className="blogs">
          {data.BlogItems.map((blog: BlogType, index: number) => {

            return (
              <div className="blog" key={`${id}${index}`}>
                <img src={blog.imgSrc} alt={blog.alt === "" ? blog.title : blog.alt} />
                <div className="blog-text">
                  <h4>{blog.title}</h4>
                  <p>{blog.details}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
