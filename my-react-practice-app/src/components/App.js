import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/GlobalUserContext";

import Home from "./Home";
import User from "./User";
import Login from "./Login";
import Header from "./Header";
import  Signup  from "./Signup";

function App() {
  return (
    <AuthProvider >
 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='user' element={<User />} />
        <Route path='home' element={<Home />} />
        <Route  path="register" element={<Signup></Signup>}/>
      </Routes>
    </AuthProvider>

  );
}

export default App;