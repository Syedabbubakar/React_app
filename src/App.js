import "./assets/style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import { Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";

function App() {

const location = useLocation()

const currentRoute = location.pathname

console.log(currentRoute);

  return (
    <div className="App">

{
  currentRoute 
}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
