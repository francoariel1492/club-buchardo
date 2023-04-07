import Hero from "./components/Hero/Hero";
import Professors from "./components/Professors/Professors";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Join from "./components/Join/Join";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <Professors />
      <Programs />
      <Reasons />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
