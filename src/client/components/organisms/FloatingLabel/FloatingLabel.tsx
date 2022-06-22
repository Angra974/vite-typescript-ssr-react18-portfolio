import React, { FC } from "react";

import "./styles.scss";

interface Props {
  type: string;
  classname?: string;
  id?: string;
  label?: string;
  labelClass?: string;
  required?: boolean;
}

/**
 * Used in form ( contact page currently)
 * @param param
 * @returns
 */
const FloatingLabel: FC<Props> = ({ type, id, label, required = true, classname = "", labelClass = "" }: Props) => {
  return (
    <>
      <div className="floating-label-wrap">
        <input
          type={type}
          className={`floating-label-input floating-label-field floating-label-field--s3 ${classname}`}
          id={id}
          name={id}
          placeholder={label}
          required={!!required}
        />
        <label htmlFor={id} className={`floating-label ${labelClass}`}>
          {label}
        </label>
      </div>
    </>
  );
};

export default FloatingLabel;
