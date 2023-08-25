import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
    
      <Router>
    <Navbar title="TextUtils" about="About" />
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={ <About />}/>
          <Route exact path="/" element={     <Textform  heading="Enter the text to analyze below" />}/>
       
      
    </Routes>
    </div>
    </Router>
    </>

  );
}

export default App;
