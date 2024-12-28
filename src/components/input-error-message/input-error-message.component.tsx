import { FunctionComponent, PropsWithChildren } from "react";
import { InputErrorMessageContainer } from "./input-error-message.styles";

const InputErrorMessage: FunctionComponent<PropsWithChildren<{}>> = ({
  children,
}) => {
  return <InputErrorMessageContainer>{children}</InputErrorMessageContainer>;
};

export default InputErrorMessage;
