import React, { FC, useId } from "react";

import "./styles.scss";

interface Props {
  largeText: string;
  smallText: string[];
}

const AboutItem: FC<Props> = ({ largeText, smallText }: Props) => {
  const id = useId();
  return (
    <div className="about-item" key={id}>
      <div className="abt-text">
        <p className="large-text">{largeText}</p>
        <p className="small-text">
          {smallText[0]}
          <br />
          {smallText[1]}
        </p>
      </div>
    </div>
  );
};

export default AboutItem;
