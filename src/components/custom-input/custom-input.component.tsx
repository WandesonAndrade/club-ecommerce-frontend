import React, { FunctionComponent, InputHTMLAttributes } from "react";

//estilos
import { CustomInputContainer } from "./custom-input.styles";

interface CustomInputContainerProps
  extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
const CustomInput: FunctionComponent<CustomInputContainerProps> =
  React.forwardRef((props, ref) => {
    return <CustomInputContainer {...props} ref={ref as any} />;
  });
CustomInput.displayName = "CustomInput";

export default CustomInput;
