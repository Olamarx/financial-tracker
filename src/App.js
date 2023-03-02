import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hook/useAuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <>
    { authIsReady && (<>
      <Navbar />
      <Routes>
      {user ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/signup" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </>
      )}
    </Routes>
    
    </>)
    }
    </>
  );
}

export default App;
