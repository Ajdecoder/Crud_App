import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Crudtable } from "./components/Crudtable";
import { EditUser } from "./components/Edit";
import { AddTask } from "./components/AddTask";
import About from "./components/About";
import { ReadUser } from "./components/ReadOne";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useContext, useState } from "react";
import { DefaultHome } from "./components/Defaults/DefaultHome";
import { AdminContext } from "./components/context/CrudTableContext";

function App() {
  const { edittableRights } = useContext(AdminContext);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={edittableRights ? <Crudtable /> : <DefaultHome />}
          />
          <Route exact path="/addUser" element={<AddTask />} />
          <Route exact path="/update/:task_id" element={<EditUser />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/read" element={<ReadUser />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
