import { useForm } from "react-hook-form";
import valitador from "validator";

import { CgLogIn } from "react-icons/cg";
import CostomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SignUpInputContainer,
} from "./sign-up.styles";
import InputErrorMessage from "../../components/input-error-message/input-error-message.component";
import { auth, db } from "../../components/config/firebase.config";
import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  AuthError,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}
const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
  } = useForm<SignUpForm>();

  const handleSubmitPress = async (data: any) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log("User created successfully");
      await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userCredentials.user.email,
      });
    } catch (error) {
      const _error = error as AuthError;
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("email", {
          type: "existing",
        });
      }
      console.log(data);
    }
  };
  const watchPassword = watch("password");
  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Criar Conta</SignUpHeadline>
          <SignUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.firstName}
              placeholder="Digite seu nome"
              {...register("firstName", { required: true })}
            />
            {errors?.firstName?.type === "required" && (
              <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.lastName}
              placeholder="Digite seu sobrenome"
              {...register("lastName", { required: true })}
            />
            {errors?.lastName?.type === "required" && (
              <InputErrorMessage>O sobrenome é obrigatório</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
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
            {errors?.email?.type === "existing" && (
              <InputErrorMessage>E-mail ja cadastrado</InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              type="password"
              placeholder="Digite sua senha"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors?.password?.type === "required" && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}

            {errors?.password?.type === "minLength" && (
              <InputErrorMessage>
                A senha precisa ter pelo menos 6 caracteres
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <SignUpInputContainer>
            <p>Confirmação de Senha</p>
            <CustomInput
              hasError={!!errors?.passwordConfirmation}
              type="password"
              placeholder="Confirme sua senha"
              {...register("passwordConfirmation", {
                required: true,
                minLength: 6,
                validate: (value) => value === watchPassword,
              })}
            />
            {errors?.passwordConfirmation?.type === "required" && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória
              </InputErrorMessage>
            )}

            {errors?.passwordConfirmation?.type === "validate" && (
              <InputErrorMessage>As senhas devem ser iguais</InputErrorMessage>
            )}
            {errors?.passwordConfirmation?.type === "minLength" && (
              <InputErrorMessage>
                A senha precisa ter pelo menos 6 caracteres
              </InputErrorMessage>
            )}
          </SignUpInputContainer>

          <CostomButton
            startIcon={<CgLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}
          >
            Criar Conta
          </CostomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  );
};

export default SignUpPage;
