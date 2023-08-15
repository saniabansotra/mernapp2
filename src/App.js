import "./App.css";
import Home from "./component/home";
import Education from "./component/education";
import About from "./component/about";
import Contact from "./component/contact";
import Navbar from "./component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/navbar" element={<Navbar />} />
          <Route exact path="/education" element={<Education />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
