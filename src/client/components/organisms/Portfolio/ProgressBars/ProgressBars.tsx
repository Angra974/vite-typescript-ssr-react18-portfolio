import React, { FC, useId } from "react";

import ProgressBar from "@components/molecules/Portfolio/ProgressBar";
import "./styles.scss";

type Progress = {
  icon: React.ReactNode;
  title: string;
  text: string;
  classname: string;
};
interface Props {
  data: Progress[];
}

const ProgressBars: FC<Props> = ({ data }: Props) => {

  const id = useId();
  return (
    <>
      <div className="progress-bars">
        {data.map((item, index) => {
          return (
            <ProgressBar
              icon={item.icon}
              title={item.title}
              text={item.text}
              classname={item.classname}
              key={`${id}${index}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProgressBars;
