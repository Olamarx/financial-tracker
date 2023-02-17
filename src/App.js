import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route
      path="/login"
      element={(<Login/>)}
      />
      
      <Route
        exact
        path="/"
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
