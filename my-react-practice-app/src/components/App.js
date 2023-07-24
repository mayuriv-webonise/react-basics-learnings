import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/GlobalUserContext";

import Home from "./Home";
import User from "./User";
import Login from "./Login";
import Header from "./Header";
import  Signup  from "./Signup";
import ItemList from "./ItemList";

function App() {
  const items = [
    { id: 1, name: 'Item 1', count: 0 },
    { id: 2, name: 'Item 2', count: 0 },
    { id: 3, name: 'Item 3', count: 0 },
  ];
  return (
    <AuthProvider >
 
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='user' element={<User />} />
        <Route path='home' element={<Home />} />
        <Route  path="register" element={<Signup></Signup>}/>
        <Route  path="items" element={<ItemList  items={items}></ItemList>}/>
      </Routes>
    </AuthProvider>

  );
}

export default App;