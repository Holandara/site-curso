import React, { useState } from "react";
import "./App.css";
import Header from "./components/HeaderSection/Header.js";
import Main from "./components/Section1/Main.js";
import Section1 from "./components/Section1/MainSection.js";
import Section2 from "./components/Section2/LearnSection.js";
import Section3 from "./components/Section3/InvestSection.js";
import Divider from "./components/Adicional/Divider/Divider.js";
import Modal from "./components/Adicional/Modal/Modal.jsx"; // Importe o Modal
import SectionTeste from "./components/Adicional/Section-teste.js"; // Importe o SectionTeste

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <SectionTeste />
      <SectionTeste/>
    </div>
  );
}

export default App;
