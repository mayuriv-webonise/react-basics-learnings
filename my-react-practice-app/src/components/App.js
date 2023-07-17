import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import User from "./User";
import Login from "./Login";
 
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='user' element={<User/>} />
      <Route path='home' element={<Home/>} />
    </Routes>
  );
}
 
export default App;