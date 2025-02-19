import "./App.css";
import Header from "./components/HeaderSection/Header.js";
import Section1 from "./components/Section1/MainSection.js";
import Section2 from "./components/Section2/LearnSection.js";
import Section3 from "./components/Section3/InvestSection.js";
import Divider from "./components/Adicional/Divider/Divider.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Divider />
      <Section2 />
      <Divider />
      <Section3 />
    </div>
  );
}

export default App;
