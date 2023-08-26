import "./App.css";
import Header from "./layouts/header";
import Home from "./sections/home";
import About from "./sections/about";
import Service from "./sections/service";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
    </div>
  );
}

export default App;
