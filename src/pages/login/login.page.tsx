import { FcGoogle } from "react-icons/fc";
import { CgLogIn } from "react-icons/cg";

import CostomButton from "../../components/custom-button/custom-button.component";
import Headers from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";

const LoginPage = () => {
  return (
    <>
      <Headers />
      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com sua conta</LoginHeadline>
          <CostomButton startIcon={<FcGoogle size={18} />}>
            Entar com o Google
          </CostomButton>
          <LoginSubtitle>ou entre com seu e-mail </LoginSubtitle>

          <LoginInputContainer>{/* email Input */}</LoginInputContainer>
          <LoginInputContainer>{/* senha Input */}</LoginInputContainer>
          <CostomButton startIcon={<CgLogIn size={18} />}>Entrar</CostomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
