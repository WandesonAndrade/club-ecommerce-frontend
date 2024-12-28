import react, {
  FunctionComponent,
  PropsWithChildren,
  ButtonHTMLAttributes,
} from "react";

import { CustomButtonContainer, IconContainer } from "./custom-button.style";
interface CustomButtonProps
  extends PropsWithChildren,
    ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: react.ReactNode;
}
const CostomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  );
};

export default CostomButton;
