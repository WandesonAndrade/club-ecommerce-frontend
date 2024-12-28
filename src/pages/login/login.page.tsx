import { FcGoogle } from "react-icons/fc";
import { CgLogIn } from "react-icons/cg";
import { useForm } from "react-hook-form";

import CostomButton from "../../components/custom-button/custom-button.component";
import Headers from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";
import CustomInput from "../../components/custom-input/custom-input.component";

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSubmitPress = (data: any) => {
    console.log(data);
  };

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

          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register("email", { required: true })}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
          </LoginInputContainer>
          <CostomButton
            startIcon={<CgLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Entrar
          </CostomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
};

export default LoginPage;