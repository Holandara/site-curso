import './App.css';
import HeaderSection from './components/HeaderSection/HeaderSection.js';
import Divider from './components/Divider/Divider.js';
import LearnSection from './components/LearnSection/LearnSection.js';
import InvestSection from './components/InvestSection/InvestSection.js';
import NavBar from './components/NavBar/NavBar.js';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Divider />
      <LearnSection />
      <Divider />
      <InvestSection />
    </div>
  );
}

export default App;