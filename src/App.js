import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";


function App() {
  return (
    <>
    <Routes>
      <Route
        exact
        path="/"
        element={(<Login/>)}
      />

      <Route
        path="/home"
        element={(<Home/>)}
      />

      <Route
        path="/signup"
        element={(<Signup/>)}
      />
    </Routes>
    </>
  );
}

export default App;
