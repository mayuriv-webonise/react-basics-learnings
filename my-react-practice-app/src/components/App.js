import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/GlobalUserContext";

import Home from "./Home";
import User from "./User";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='user' element={<User />} />
        <Route path='home' element={<Home />} />
      </Routes>
    </AuthProvider>

  );
}

export default App;