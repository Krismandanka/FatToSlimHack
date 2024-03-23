import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./Components/common/Home"
import Header from './Components/common/Header';
import NavBar from './Components/common/Navbar';
import Login from './Pages/Login';
function App() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {};
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
            <Header/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              {/* <Route path="/products" element={<ProductsPage />} /> */}




            </Routes>


      
    </div>
  );
}

export default App;
