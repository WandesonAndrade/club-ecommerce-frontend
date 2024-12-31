// Importações necessárias do React
import { FunctionComponent, useState, createContext } from "react";

// Importação do tipo User
import User from "../types/user.types";

// Definição da interface do contexto do usuário
interface IUserContext {
  // Estado do usuário (pode ser null)
  userState: User | null;
  // Função para logar o usuário
  loginUser: (user: User) => void;
  // Função para deslogar o usuário
  logoutUser: () => void;
  // Flag para indicar se o usuário está autenticado
  isAuthenticated: boolean;
}

// Criação do contexto do usuário com valores padrão
export const UserContext = createContext<IUserContext>({
  userState: null,
  // Função vazia para logar o usuário (será substituída pelo provedor)
  loginUser: () => {},
  // Função vazia para deslogar o usuário (será substituída pelo provedor)
  logoutUser: () => {},
  isAuthenticated: false,
});

// Componente provedor do contexto do usuário
const UserContextProvider: FunctionComponent<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  // Estado do usuário (inicialmente null)
  const [userState, setUserState] = useState<User | null>(null);

  // Flag para indicar se o usuário está autenticado (baseado no estado do usuário)
  const isAuthenticated = userState !== null;

  // Função para logar o usuário (atualiza o estado do usuário)
  const loginUser = (user: User) => setUserState(user);
  // Função para deslogar o usuário (atualiza o estado do usuário para null)
  const logoutUser = () => setUserState(null);

  // Retorna o provedor do contexto do usuário com os valores atualizados
  return (
    <UserContext.Provider
      value={{
        userState,
        loginUser,
        logoutUser,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Exportação do componente provedor como padrão
export default UserContextProvider;
