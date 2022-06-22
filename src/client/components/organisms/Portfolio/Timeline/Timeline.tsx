import React, { FC, useId } from "react";

import "./styles.scss";

import TimelineItem from "@components/molecules/Portfolio/TimelineItem";

interface Props {
  title: string;
  data: any[];
}

const Timeline: FC<Props> = ({ title = "My Timeline", data = [] }) => {
  const id = useId();
  return (
    <>
      <h4 className="stat-title">{title}</h4>
      <div className="timeline">
        {data.map((item, index) => {
          return (
            <TimelineItem
              icon={item.icon}
              year={item.year}
              title={item.title}
              details={item.details}
              key={id + index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Timeline;
