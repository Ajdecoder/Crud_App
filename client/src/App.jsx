import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Crudtable } from "./components/Crudtable";
import {EditUser} from "./components/Edit";
import Update from "./components/Update";
import {AddTask} from "./components/AddTask";
import About from "./components/About";
import {ReadUser} from "./components/Read"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Crudtable />} />
          <Route exact path="/addUser" element={<AddTask />} />
          <Route exact path="/edit" element={<EditUser />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/read" element={<ReadUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
