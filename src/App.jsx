import "./App.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portofolio from "./components/portofolio/Portofolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portofolio">
        <Parallax type="portofolio" />
      </section>
      <Portofolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
