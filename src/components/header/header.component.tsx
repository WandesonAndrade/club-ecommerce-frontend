import "./header.styles.css";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    //conteiner principal do header
    <div className="header-container">
      <h2 className="header-title">Club Ecommerce</h2>
      <div className="header-items">
        <div className="header-item">Explorar</div>
        <div className="header-item">Login</div>
        <div className="header-item">Criar Conta</div>
        <div className="header-item">
          <FaCartShopping size={25} />
          <p style={{ marginLeft: 5 }}>5</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
