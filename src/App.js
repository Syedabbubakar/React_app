import "./assets/style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
