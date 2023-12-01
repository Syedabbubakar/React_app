import "./assets/style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import AboutUs from "./pages/AboutUs";
import { Form, Route, Routes, useLocation } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Effect from "./pages/Effect";
import SignUp from "./pages/SignUp";
import ApiFetch from "./pages/ApiFetch";

function App() {

const location = useLocation()

const currentRoute = location.pathname

console.log(currentRoute);

  return (
    <div className="App">
 
{
  currentRoute !== "/login" && currentRoute !== "/signup"  ?  <Header /> : <></>
}

     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/ApiFetch" element={<ApiFetch/>} />
      </Routes>
      
      {/* <Effect/> */}
      
      
    </div>
  );
}

export default App;
