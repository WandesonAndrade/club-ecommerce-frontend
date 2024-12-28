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
          {/* <Button /> */}
          <LoginSubtitle>ou entre com seu e-mail </LoginSubtitle>

          <LoginInputContainer>{/* email Input */}</LoginInputContainer>
          <LoginInputContainer>{/* senha Input */}</LoginInputContainer>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;
