import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './assets/components/Home.jsx'
import Register from "./assets/components/Register.jsx";
import Login from "./assets/components/Login.jsx";
import Navigation from "./assets/components/Navigation.jsx";
import AddProduct from "./assets/components/AddProduct.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>      
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>

      </Routes>
    </BrowserRouter>
  )
}