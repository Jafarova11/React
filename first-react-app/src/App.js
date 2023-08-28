import "./App.css";
import Header from "./layouts/header";
import Home from "./sections/home";
import About from "./sections/about";
import Service from "./sections/service";
import Portfolio from "./sections/portfolio";
import Resume from "./sections/resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
