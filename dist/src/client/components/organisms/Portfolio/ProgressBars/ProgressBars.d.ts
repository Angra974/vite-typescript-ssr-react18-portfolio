import React, { FC } from "react";
import "./styles.scss";
declare type Progress = {
    icon: React.ReactNode;
    title: string;
    text: string;
    classname: string;
};
interface Props {
    data: Progress[];
}
declare const ProgressBars: FC<Props>;
export default ProgressBars;
//# sourceMappingURL=ProgressBars.d.ts.map