import "./App.css";
import Header from "./layouts/header";
import Home from "./sections/home";
import About from "./sections/about";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
