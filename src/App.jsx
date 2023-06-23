import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Lenguages from "./components/Lenguages";
import NavBar from "./components/NavBar";
import Proyects from "./components/Proyects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-black bg-opacity-50 bgra ">
      <div className="">
        <NavBar />
        <Header />
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
        <Lenguages />
        <Contact />
        <Proyects />
      </div>
    </div>
  );
}

export default App;
