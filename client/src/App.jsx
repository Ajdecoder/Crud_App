import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Crudtable from "./components/Crudtable";
import Register from "./components/Register";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Crudtable />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
