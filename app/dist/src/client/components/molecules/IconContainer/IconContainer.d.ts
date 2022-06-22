import React, { ElementType, FC } from "react";
import "./styles.scss";
import tagPropsType from "@shared/types/tag.types";
interface ComponentProps {
    as?: ElementType;
    tagProps: tagPropsType;
    icon?: any;
    children?: React.ReactNode;
}
declare const IconContainer: FC<ComponentProps>;
export default IconContainer;
//# sourceMappingURL=IconContainer.d.ts.map