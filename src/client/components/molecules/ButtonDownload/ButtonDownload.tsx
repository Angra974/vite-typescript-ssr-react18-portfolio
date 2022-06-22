import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import "./styles.scss";

interface Props {
    text: string;
    icon: React.ReactNode;
}

const ButtonDownload:FC<Props> = ({text = "", icon = <></>}) => {

  const { t } = useTranslation("common");
  return (
    <div className="btn-con">
      <button className="main-btn">
        <span className="btn-text">{t(text)}</span>
        <span className="btn-icon">
          {icon}
        </span>
      </button>
    </div>
  )
}

export default ButtonDownload;
