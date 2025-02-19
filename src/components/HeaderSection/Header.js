import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">Limiar</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#sobre" className="hover:text-gray-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-gray-300">
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
