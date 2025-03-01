import React, { useState } from "react";
import "./App.css";
import Header from "./components/HeaderSection/Header.js";
import Section1 from "./components/Section1/MainSection.js";
import Section2 from "./components/Section2/LearnSection.js";
import Section3 from "./components/Section3/InvestSection.js";
import Divider from "./components/Adicional/Divider/Divider.js";
import Modal from "./components/Adicional/Modal/Modal.jsx"; // Importe o Modal

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div className="App">
      <Header />
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 setOpen={setIsOpen} setSelected={setSelectedCourse} />{" "}
      {/* Passe a função para Section3 */}
      {isOpen && (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} course={selectedCourse} />
      )}
    </div>
  );
}

export default App;
