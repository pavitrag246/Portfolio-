
import './App.css';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Education from './Components/Education';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';


function App() {
  return (
    <>
     <Navbar/>
      <Header/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </>
  );
}

export default App;
