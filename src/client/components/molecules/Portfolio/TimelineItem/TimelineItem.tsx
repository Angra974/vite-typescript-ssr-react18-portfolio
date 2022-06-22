import React, { FC } from "react";

import "./styles.scss";
interface Props {
  icon: any;
  year: string;
  title: string[];
  details: string;
}

const TimelineItem: FC<Props> = ({ icon, year = "", title, details = "" }) => {
  return (
    <>
      <div className="timeline-item">
        <div className="tl-icon"></div>
        <p className="tl-duration">{year}</p>
        <h5>
          {title[0]}
          <span>{title[1]}</span>
        </h5>
        <p>{details}</p>
      </div>
    </>
  );
};

export default TimelineItem;
