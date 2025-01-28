import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle,
} from "./header.styles";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(UserContext);
  const heandleLoginClick = () => {
    navigate("/login");
  };
  const heandleSignUpClick = () => {
    navigate("/SignUp");
  };

  const heandleHomeClick = () => {
    navigate("/");
  };

  return (
    //conteiner principal do header
    <HeaderContainer>
      <HeaderTitle onClick={heandleHomeClick}>Club Ecommerce</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={heandleHomeClick}>Explorar</HeaderItem>
        {/*se o usuario estiver logado, não mostra o botão de login */}
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={heandleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={heandleSignUpClick}>Criar Conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
        )}

        <HeaderItem>
          <FaCartShopping size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  );
};

export default Header;
