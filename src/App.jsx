import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import './App.css'
import Companies from "./Components/Companies/Companies";
import Residence from "./Components/Residencies/Residence";
import Value from "./Components/Value/Value";
import Contact from "./Components/contact/contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies/>
      <Residence/>
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
