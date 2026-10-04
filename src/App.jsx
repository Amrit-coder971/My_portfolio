
import About from "./Components/About/About";
import Contactme from "./Components/Contactme/Contactme";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skill from "./Components/Skill/Skill";

function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Skill /> 
      <Experience />
      <Projects/>
      <Contactme />
      <Footer />
    </div>
  );
}

export default App;
