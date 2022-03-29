import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Shared/Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import "./Styles/App.scss";
import "./Styles/_reset.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
