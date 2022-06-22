import { FC } from "react";
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
declare const FloatingLabel: FC<Props>;
export default FloatingLabel;
//# sourceMappingURL=FloatingLabel.d.ts.map