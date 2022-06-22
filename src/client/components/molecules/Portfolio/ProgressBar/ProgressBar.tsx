import React, { FC } from "react";

import "./styles.scss";

interface Props {
  icon:  React.ReactNode;
  title: string;
  text: string;
  classname?: string;
}

const ProgressBar: FC<Props> = ({ icon, title = "", text = "", classname = "" }: Props) => {
  return (
    <>
      <div className="progress-bar">
        <p className="prog-title">
          {title} {icon}
        </p>
        <div className="progress-con">
          <p className="prog-text">{text}</p>
          <div className="progress">
            <span className={classname} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
