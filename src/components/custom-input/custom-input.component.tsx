import { FunctionComponent, InputHTMLAttributes } from "react";

//estilos
import { CustomInputContainer } from "./custom-input.styles";

interface CustomInputContainerProps
  extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}
const CustomInput: FunctionComponent<CustomInputContainerProps> = ({
  hasError,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />;
};

export default CustomInput;
