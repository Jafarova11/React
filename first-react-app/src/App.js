import "./App.css";
import Header from "./layouts/header";
import Home from "./sections/home";
import About from "./sections/about";
import Service from "./sections/service";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
