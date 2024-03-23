import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import Home from "./Components/common/Home"
import Header from './Components/common/Header';
import NavBar from './Components/common/Navbar';
import Login from './Pages/Login';
import ProductsPage from './Components/Core/products/ProductPage';
import EnrolledCourses from './Components/Core/Dashboard/EnrolledCourses';
// import AddCourse from './Components/Core/Dashboard/AddCourse/index';


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
              <Route path="/healthPlan" element={<ProductsPage />}  />
              
              <Route
                path="/dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
                      {/* <Route path="dashboard/add-course" element={<AddCourse />} /> */}


            </Routes>


      
    </div>
  );
}

export default App;
