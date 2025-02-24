import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">LIMIAR</div>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="nav-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
