import { FcGoogle } from "react-icons/fc";
import { CgLogIn } from "react-icons/cg";
import { useForm } from "react-hook-form";
import valitador from "validator";

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
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../components/config/firebase.config";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForm>();

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
    } catch (error) {
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError("email", {
          type: "invalid",
        });
        setError("password", {
          type: "invalid",
        });
      }
    }
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
              {...register("email", {
                required: true,
                validate: (value) => valitador.isEmail(value),
              })}
            />
            {errors?.email?.type === "required" && (
              <InputErrorMessage>O e-mail é obrigatório</InputErrorMessage>
            )}
            {errors?.email?.type === "validate" && (
              <InputErrorMessage>Formato de e-mail inválido</InputErrorMessage>
            )}
            {errors?.email?.type === "invalid" && (
              <InputErrorMessage>E-mail ou senha invalidos</InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              type="password"
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}

            {errors?.password?.type === "invalid" && (
              <InputErrorMessage> E-mail ou senha invalidos</InputErrorMessage>
            )}
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
