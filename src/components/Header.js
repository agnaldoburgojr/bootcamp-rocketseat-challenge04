import React from "react";
import Logo from "../assets/facebook.png";
import User from "../assets/user-icon.png";

function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={Logo} />
      <div className="header-menu">
        <span className="header-text">Meu perfil </span>
        <img className="header-user" src={User} />
      </div>
    </div>
  );
}
export default Header;
